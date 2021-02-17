<template>
  <main class="product-page">
    <div class="container">
      <ul class="product-list">

        <app-product></app-product>
        <app-product></app-product>
      </ul>

      <app-pagination></app-pagination>
    </div>
  </main>
</template>

<script>
import AppPagination from "@/components/AppPagination"
import AppProduct from "@/components/AppProduct"
export default {
  name: "AppProductsList",
  components: {
    AppPagination,
    AppProduct
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
