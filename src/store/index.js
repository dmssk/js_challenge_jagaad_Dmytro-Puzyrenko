import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const initialState = {
  products: [],
  bag: [],
  wishlist: [],
  totalPrice: 0,
  loadedPages: new Set()
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
    SET_PRODUCTS (state, productsData) {
      if (!state.loadedPages.has(productsData.page)) {
        state.products.push(...productsData.products)
      }
      state.loadedPages.add(productsData.page)
    },
    ADD_PRODUCT_TO_BAG (state, productId) {
      const product = state.products.find(p => p.uuid === productId)
      const isInBag = state.bag.find(p => p.uuid === productId)
      if (product && !isInBag) {
        state.bag.push(product)
        state.totalPrice += +product.retail_price.value.toFixed(2)
      }
    },
    ADD_PRODUCT_TO_WISHLIST (state, productId) {
      const product = state.products.find(p => p.uuid === productId)
      const isInWishlist = state.wishlist.find(p => p.uuid === productId)
      if (product && !isInWishlist) {
        state.wishlist.push(product)
      }
    },
    DELETE_PRODUCT_FROM_CART (state, productId) {
      const product = state.products.find(p => p.uuid === productId)
      state.totalPrice -= +product.retail_price.value.toFixed(2)
      state.bag = state.bag.filter(p => p.uuid !== productId)
    },
    DELETE_PRODUCT_FROM_WISHLIST (state, productId) {
      state.wishlist = state.wishlist.filter(p => p.uuid !== productId)
    }
  },
  getters: {
    getTotalPrice (state) {
      return state.totalPrice.toFixed(2)
    },
    getBagCount (state) {
      return state.bag.length
    },
    getWishlist (state) {
      return state.wishlist
    },
    getWishlistCount (state) {
      return state.wishlist.length
    }
  }
})
