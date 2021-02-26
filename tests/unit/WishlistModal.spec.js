/* eslint-disable */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import AppWishlistModal from '@/components/modal/AppWishlistModal'

import * as filters from '@/filters'


const localVue = createLocalVue()
localVue.use(Vuex)

Object.keys(filters).forEach(key => {
  localVue.filter(key, filters[key])
})

describe('AppWishlistModal.vue', () => {
  let mutations
  let getters
  let store
  let wrapper

  beforeEach(() => {
    mutations = {
      DELETE_PRODUCT_FROM_WISHLIST: jest.fn()
    }
    getters = {
      getWishlist: () => [{
        uuid: '123',
        retail_price: {}
      }]
    }
    store = new Vuex.Store({
      mutations,
      getters
    })
    wrapper = shallowMount(AppWishlistModal, {
      store,
      localVue
    })
  })

  it('calls DELETE_PRODUCT_FROM_WISHLIST when button is clicked', () => {
    const button = wrapper.find('.bag__modal-item button')
    button.trigger('click')
    expect(mutations.DELETE_PRODUCT_FROM_WISHLIST).toHaveBeenCalled()
  })
})
