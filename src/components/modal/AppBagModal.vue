<template>
  <div
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
        <button @click="DELETE_PRODUCT_FROM_CART(product.uuid)">X</button>
      </li>
      <li
        v-if="!getBag.length"
        class="bag__modal-item"
      >
        The bag is empty
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
      'getBag'
    ])
  },
  methods: {
    ...mapMutations(['DELETE_PRODUCT_FROM_CART']),
  }
}
</script>

<style scoped lang="scss" src="@/assets/styles/modal.scss"></style>
