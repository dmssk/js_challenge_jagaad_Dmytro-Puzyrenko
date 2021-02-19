<template>
  <header class="header container">
    <h1 class="page-title">BRAND</h1>
    <aside class="header-bag">
      <div class="header-bag__item header-bag__count">
        <div class="header-bag__price">
          € {{ getTotalPrice }}
        </div>
        <button @click="toggleBagModal">
          <svg
            class="icon"
            width="17px"
            height="18px"
            viewBox="36 8 17 18"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>Bag Icon</title>
            <path d="M52.997701,12.8571429 L49.3553365,12.8571429 L49.3553365,8 L39.6423645,8 L39.6423645,12.8571429 L36,12.8571429 L36,25 L52.997701,25 L52.997701,12.8571429 Z M42.0706075,10.4285714 L46.9270935,10.4285714 L46.9270935,12.8571429 L42.0706075,12.8571429 L42.0706075,10.4285714 Z" id="Bag-Icon" stroke="none" fill-rule="evenodd"></path>
          </svg>
        </button>
        <span class="bag__item-counter">{{ getBagCount }}</span>

        <div
          v-if="bagModal"
          class="bag__modal"
        >
          <ul class="bag__modal-list">
            <li
              v-for="product in getBag"
              :key="product.uuid"
              class="bag__modal-item"
            >
              <img :src="product.cover_image_url" alt="">
              <span>{{ product.title }} <br> <b>{{ product.retail_price.formatted_value }}</b></span>
              <button @click="deleteProduct(product.uuid)">X</button>
            </li>
            <span v-if="!getBag.length">No products on bag</span>
          </ul>
        </div>
      </div>
      <div class="header-bag__item header-bag__wishlist-count">
        <button
          @click="toggleWishlistModal"
        >
          <svg class="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Wishlist Icon</title>
            <polygon id="Wishlist-Icon" stroke="none" fill-rule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
          </svg>
        </button>
        <span class="bag__item-counter">{{ getWishlistCount }}</span>
        <div
          v-if="wishlistModal"
          class="bag__modal"
        >
          <ul class="bag__modal-list">
            <li
              v-for="product in getWishlist"
              :key="product.uuid"
              class="bag__modal-item"
            >
              <img :src="product.cover_image_url" alt="">
              <span>{{ product.title }} <br> <b>{{ product.retail_price.formatted_value }}</b></span>
              <button @click="deleteProductFromWishlist(product.uuid)">X</button>
            </li>
            <span v-if="!getWishlist.length">No products on wishlist</span>
          </ul>
        </div>
      </div>
    </aside>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "AppHeader",
  data () {
    return {
      bagModal: false,
      wishlistModal: false
    }
  },
  computed: {
    ...mapGetters([
        'getTotalPrice',
        'getBagCount',
        'getBag',
        'getWishlistCount',
        'getWishlist'
      ])
  },
  methods: {
    ...mapMutations(['deleteProduct', 'deleteProductFromWishlist']),
    toggleBagModal () {
      this.bagModal = !this.bagModal
    },
    toggleWishlistModal () {
      this.wishlistModal = !this.wishlistModal
    },
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.page-title {
  font-size: 20px;
}

.header-bag {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.header-bag__item {
  height: 25px;

  display: flex;
  align-items: flex-end;
}

.header-bag__item .icon {
  height: auto;
  fill: #444A59;
}

.header-bag__price {
  margin-right: 5px;
  font-size: 12px;
  line-height: 12px;
}

.header-bag__count {
  position: relative;
  margin-left: 10px;
}

.header-bag__count .icon {
  width: 17px;
}

.header-bag__wishlist-count {
  position: relative;
  margin-left: 10px;
}

.bag__item-counter {
  width: 13px;
  height: 13px;
  margin-left: -1px;

  display: flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;

  font-family: 'Lato-Bold', sans-serif;
  font-size: 8px;
  text-align: center;

  border-radius: 50%;
  color: #ffffff;
  background-color: #358ED7;
}

.bag__modal {
  position: absolute;
  width: 400px;
  max-width: 100vw;
  max-height: 300px;
  overflow: auto;
  background: #fff;
  top: 100%;
  right: 0;
  z-index: 2;
  box-shadow: 0 0 8px 1px rgba(0,0,0,0.5);
  padding: 10px 15px;

  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #ccc;

    &:last-child {
      border-bottom: none;
    }

    img {
      max-width: 100px;
    }
    span {
      display: block;
      padding: 0 15px;
    }
  }
}
</style>
