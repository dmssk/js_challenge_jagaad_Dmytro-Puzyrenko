<template>
  <div
    class="bag__modal"
  >
    <ul class="bag__modal-list">
      <li
        v-for="product in getWishlist"
        :key="product.uuid"
        class="bag__modal-item"
      >
        <img :src="product.cover_image_url" alt="Product">
        <span>{{ product.title }} <br> <b>{{ product.retail_price.formatted_value }}</b></span>
        <button @click="DELETE_PRODUCT_FROM_WISHLIST(product.uuid)">
          <svg height="15px" viewBox="0 0 329 329" width="15px" xmlns="http://www.w3.org/2000/svg">
            <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/>
          </svg>
        </button>
      </li>
      <li v-if="!getWishlist.length" class="bag__modal-item">
        <span>No products on wishlist</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'AppBagModal',
  computed: {
    ...mapGetters([
      'getWishlist'
    ])
  },
  methods: {
    ...mapMutations(['DELETE_PRODUCT_FROM_WISHLIST'])
  }
}
</script>

<style scoped lang="scss" src="@/assets/styles/modal.scss"></style>
