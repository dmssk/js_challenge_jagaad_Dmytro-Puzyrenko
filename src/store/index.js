import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const initialState = {
  products: null,
  bag: [],
  wishlist: null,
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
    deleteProduct (state, productId) {
      const product = state.products.find(p => p.uuid === productId)
      state.totalPrice -= +product.retail_price.value.toFixed(2)
      state.bag = state.bag.filter(p => p.uuid !== productId)
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
    }
  },
  modules: {
  }
})
