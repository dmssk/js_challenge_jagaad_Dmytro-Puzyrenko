/* eslint-disable */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import AppBagModal from '@/components/modal/AppBagModal'

import * as filters from '@/filters'


const localVue = createLocalVue()
localVue.use(Vuex)

Object.keys(filters).forEach(key => {
  localVue.filter(key, filters[key])
})

describe('AppBagModal.vue', () => {
  let mutations
  let getters
  let store
  let wrapper

  beforeEach(() => {
    mutations = {
      DELETE_PRODUCT_FROM_CART: jest.fn()
    }
    getters = {
      getBag: () => [{
        uuid: '123',
        retail_price: {}
      }],
      getTotalPrice: () => '0'
    }
    store = new Vuex.Store({
      mutations,
      getters
    })
    wrapper = shallowMount(AppBagModal, {
      store,
      localVue
    })
  })

  it('calls DELETE_PRODUCT_FROM_CART when button is clicked', () => {
    const button = wrapper.find('.bag__modal-item button')
    button.trigger('click')
    expect(mutations.DELETE_PRODUCT_FROM_CART).toHaveBeenCalled()
  })
})
