<template>
  <main class="product-page">
    <div class="container">
      <div v-if="loading" class="loader"></div>
      <ul
        v-else
        class="product-list"
      >

        <app-product
          v-for="p in products"
          :key="p.uuid"
          :image="p.cover_image_url"
          :title="p.title"
          :description="p.description"
          :price="p.retail_price"
          :id="p.uuid"
        />
      </ul>

      <app-pagination
        :pagination="pagination"
        @pageChange="onPageChange"
      />
    </div>
  </main>
</template>

<script>
import AppPagination from '@/components/AppPagination'
import AppProduct from '@/components/AppProduct'
import { getProducts } from '@/api'
import { mapMutations } from 'vuex'

export default {
  name: 'AppProductsList',
  components: {
    AppPagination,
    AppProduct
  },
  data () {
    return {
      products: null,
      pagination: {
        current: 1,
        perPage: 1,
        total: 10,
        visible: 3,
        offset: 0
      },
      loading: false
    }
  },
  methods: {
    ...mapMutations(['SET_PRODUCTS']),
    onPageChange (data) {
      this.getProductsHandler(6, data.offset, data.page)
    },
    async getProductsHandler (limit = 6, offset = 0, page = 1) {
      try {
        this.loading = true
        this.products = await getProducts(limit, offset)
        this.SET_PRODUCTS({
          products: this.products,
          page
        })
      } catch (e) {
        console.error(e)
      } finally {
        this.loading = false
      }
    }
  },
  mounted () {
    this.getProductsHandler()
  }
}
</script>

<style scoped lang="scss" src="@/assets/styles/products-list.scss"></style>
