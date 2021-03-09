/* eslint-disable */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import AppProduct from '@/components/AppProduct.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('AppProduct.vue', () => {
  let state
  let mutations
  let getters
  let store
  let wrapper

  beforeEach(() => {
    state = {
      bag: []
    }
    mutations = {
      ADD_PRODUCT_TO_BAG: jest.fn(),
      ADD_PRODUCT_TO_WISHLIST: jest.fn()
    }
    getters = {
      getWishlist: () => [{uuid: '123'}]
    }
    store = new Vuex.Store({
      state,
      mutations,
      getters
    })
    wrapper = shallowMount(AppProduct, {
      store,
      localVue,
      propsData: {
        id: '123',
        image: 'mock-img-scr',
        title: 'Product',
        description: 'Product description',
        price: {
          formatted_value: '35'
        }
      }
    })
  })

  it('calls ADD_PRODUCT_TO_BAG when button is clicked', () => {
    const button = wrapper.find('.product__add-to-cart')
    button.trigger('click')
    expect(mutations.ADD_PRODUCT_TO_BAG).toHaveBeenCalled()
  })
  it('calls ADD_PRODUCT_TO_WISHLIST when button is clicked', () => {
    const button = wrapper.find('.product__wishlist-button')
    button.trigger('click')
    expect(mutations.ADD_PRODUCT_TO_WISHLIST).toHaveBeenCalled()
  })
})
