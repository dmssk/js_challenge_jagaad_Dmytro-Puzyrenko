<template>
  <main class="product-page">
    <div class="container">
      <ul class="product-list">

        <app-product
          v-for="p in products"
          :key="p.uuid"
          :image="p.cover_image_url"
          :title="p.title"
          :description="p.description"
        />
      </ul>

      <app-pagination></app-pagination>
    </div>
  </main>
</template>

<script>
import AppPagination from "@/components/AppPagination"
import AppProduct from "@/components/AppProduct"
import { getProducts } from "@/api"

export default {
  name: "AppProductsList",
  components: {
    AppPagination,
    AppProduct
  },
  data () {
    return {
      products: null
    }
  },
  methods: {

  },
  async mounted () {
    this.products = await getProducts(6, 0)
  }
}
</script>

<style scoped>

.product-list {
  display: flex;
  flex: 0 1 auto;
  flex-flow: row wrap;
  margin: 0 -10px;
}

</style>
