/* eslint-disable */
import { shallowMount } from '@vue/test-utils'
import AppPagination from '@/components/AppPagination.vue'



describe('AppPagination.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(AppPagination, {
      propsData: {
        pagination: {
          current: 1,
          perPage: 1,
          total: 10,
          visible: 3,
          offset: 0
        }
      }
    })
  })

  it('change page to 2 on arrow-next click', async () => {
    const button = wrapper.find('.pagination__item .arrow-next')
    await button.trigger('click')
    const activePage = wrapper.find('.pagination__link.active')
    expect(activePage.text()).toBe(wrapper.props().pagination.current.toString())
    expect(activePage.text()).toBe('2')
  })

  it('change page to 1 on arrow-prev click', async () => {
    const button = wrapper.find('.pagination__item .arrow-prev')
    await button.trigger('click')
    const activePage = wrapper.find('.pagination__link.active')
    expect(activePage.text()).toBe(wrapper.props().pagination.current.toString())
    expect(activePage.text()).toBe('1')
  })

  it('2 times next 1 time back', async () => {
    const prev = wrapper.find('.pagination__item .arrow-prev')
    const next = wrapper.find('.pagination__item .arrow-next')
    await next.trigger('click')
    await next.trigger('click')
    await prev.trigger('click')
    const activePage = wrapper.find('.pagination__link.active')
    expect(activePage.text()).toBe(wrapper.props().pagination.current.toString())
    expect(activePage.text()).toBe('2')
  })
})
