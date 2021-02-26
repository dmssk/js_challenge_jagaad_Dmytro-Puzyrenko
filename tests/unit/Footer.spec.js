import { shallowMount } from '@vue/test-utils'
import AppFooter from '@/components/AppFooter.vue'

describe('AppFooter.vue', () => {
  it('renders', () => {
    const msg = 'Footer'
    const wrapper = shallowMount(AppFooter)
    expect(wrapper.text()).toMatch(msg)
  })
})
