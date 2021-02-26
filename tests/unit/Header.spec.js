/* eslint-disable */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import AppHeader from '@/components/AppHeader.vue'

import * as filters from '@/filters'


const localVue = createLocalVue()
localVue.use(Vuex)
Object.keys(filters).forEach(key => {
  localVue.filter(key, filters[key])
})

describe('AppHeader.vue', () => {
  let getters
  let store
  let wrapper

  beforeEach(() => {
    getters = {
      getTotalPrice: () => '0',
      getBagCount: () => '0',
      getWishlistCount: () => '0'
    }
    store = new Vuex.Store({
      getters
    })
    wrapper = shallowMount(AppHeader, {
      store,
      localVue
    })
  })

  it('have 0 total price on load', () => {
    const price = wrapper.find('.header-bag__price')
    expect(price.text()).toBe('€ 0')
  })
  it('have 0 items in bag on load', () => {
    const bag = wrapper.findAll('.bag__item-counter').at(0)
    expect(bag.text()).toBe('0')
  })
  it('have 0 items in wishlist on load', () => {
    const wishlist = wrapper.findAll('.bag__item-counter').at(1)
    expect(wishlist.text()).toBe('0')
  })

})
