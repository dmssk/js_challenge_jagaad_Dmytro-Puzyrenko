import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const initialState = {
  products: null,
  bag: [],
  wishlist: [],
  totalPrice: 0
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
    setProducts (state, products) {
      state.products = products
    },
    addProduct (state, productId) {
      const product = state.products.find(p => p.uuid === productId)
      const isInBag = state.bag.find(p => p.uuid === productId)
      if (product && !isInBag) {
        state.bag.push(product)
        state.totalPrice += +product.retail_price.value.toFixed(2)
      }
    },
    addProductToWishlist (state, productId) {
      const product = state.products.find(p => p.uuid === productId)
      const isInWishlist = state.wishlist.find(p => p.uuid === productId)
      if (product && !isInWishlist) {
        state.wishlist.push(product)
      }
    },
    deleteProduct (state, productId) {
      const product = state.products.find(p => p.uuid === productId)
      state.totalPrice -= +product.retail_price.value.toFixed(2)
      state.bag = state.bag.filter(p => p.uuid !== productId)
    },
    deleteProductFromWishlist (state, productId) {
      state.wishlist = state.wishlist.filter(p => p.uuid !== productId)
    }
  },
  actions: {
  },
  getters: {
    getTotalPrice (state) {
      return state.totalPrice.toFixed(2)
    },
    getBag (state) {
      return state.bag
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
  },
  modules: {
  }
})
