<template>
  <li class="product-list__item">
    <article class="product" itemscope itemtype="http://schema.org/Product">
      <figure class="product__image-wrapper">
        <img class="product__image" :src="imageSrc" alt="Product" itemprop="image"/>
        <button
          @click="addToWishlist"
          class="product__wishlist-button button button--round button--wishlist"
        >
          <svg :class="{'wished': isProductInWishlist}" class="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1"
               xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Wishlist Icon</title>
            <polygon id="Wishlist-Icon" stroke="none" fill-rule="evenodd"
                     points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
          </svg>
        </button>
      </figure>
      <div class="product__details">
        <h1 class="product__title" itemprop="brand">{{title}}</h1>
        <p class="product__subtitle" itemprop="description">{{description}}</p>
        <div class="product__price" itemscope itemtype="http://schema.org/Offer">
          <span class="product__price--discounted"
                itemprop="price">{{price.formatted_value}}</span>
        </div>
        <button
          class="product__add-to-cart button button--primary"
          :class="{'button--in-cart': isProductInBag}"
          @click="addToCard"
        >
          <span v-if="isProductInBag">In Cart</span>
          <span v-else>Add to Cart</span>
        </button>
      </div>
    </article>
  </li>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
    name: "AppProduct",
    props: {
      id: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      price: {
        type: Object,
        required: true
      }
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters(['getBag', 'getWishlist']),
      isProductInBag () {
        const product = this.getBag.find(p => p.uuid === this.id)
        return !!product
      },
      isProductInWishlist () {
        const product = this.getWishlist.find(p => p.uuid === this.id)
        return !!product
      },
      imageSrc () {
        return this.image + '?q=60&fit=crop&h=220px'
      }
    },
    methods: {
      ...mapMutations(['ADD_PRODUCT_TO_BAG', 'ADD_PRODUCT_TO_WISHLIST']),
      addToCard () {
        this.ADD_PRODUCT_TO_BAG(this.id)
      },
      addToWishlist () {
        this.ADD_PRODUCT_TO_WISHLIST(this.id)
      }
    }
  }
</script>

<style scoped lang="scss" src="@/assets/styles/product.scss"></style>
