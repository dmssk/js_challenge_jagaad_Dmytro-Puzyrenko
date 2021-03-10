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
import products from '@/services/products'
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
  created () {
    this.getProductsHandler()
  },
  methods: {
    ...mapMutations(['SET_PRODUCTS']),
    onPageChange (data) {
      this.getProductsHandler(6, data.offset, data.page)
    },
    async getProductsHandler (limit = 6, offset = 0, page = 1) {
      try {
        this.loading = true
        this.products = await products.get('https://api.musement.com/api/v3/venues/164/activities', {
          params: {
            limit,
            offset
          }
        })
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
  }
}
</script>

<style scoped lang="scss" src="@/assets/styles/products-list.scss"></style>
