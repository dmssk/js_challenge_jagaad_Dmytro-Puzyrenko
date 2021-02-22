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
        <img :src="product.cover_image_url" alt="">
        <span>{{ product.title }} <br> <b>{{ product.retail_price.formatted_value }}</b></span>
        <button @click="DELETE_PRODUCT_FROM_WISHLIST(product.uuid)">X</button>
      </li>
      <li class="bag__modal-item">
        <span v-if="!getWishlist.length">No products on wishlist</span>
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
    ...mapMutations(['DELETE_PRODUCT_FROM_WISHLIST']),
  }
}
</script>

<style scoped lang="scss" src="@/assets/styles/modal.scss"></style>
