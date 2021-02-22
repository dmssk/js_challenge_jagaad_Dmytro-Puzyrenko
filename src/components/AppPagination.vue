<template>
  <nav class="pagination">
    <ul class="pagination__list">
      <li class="pagination__item">
        <a
          @click.prevent="changePage(pagination.current - 1)"
          href="#"
          class="pagination__link"
        >
          <svg class="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1"
               xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Arrow Left</title>
            <polygon id="Left-Icon" stroke="none" fill-rule="evenodd"
                     transform="translate(22.027061, 23.000000) scale(-1, 1) translate(-22.027061, -23.000000) "
                     points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"/>
          </svg>
        </a>
      </li>
      <li
        v-for="page in countPages"
        :key="page.id"
        class="pagination__item"
      >
        <a
          @click.prevent="changePage(page)"
          href="#"
          class="pagination__link"
          :class="{'active' : page === pagination.current}"
        >
          {{ page }}
        </a>
      </li>
      <li class="pagination__item">
        <a href="#" class="pagination__link">
          ...
        </a>
      </li>
      <li class="pagination__item">
        <a
          @click.prevent="changePage(pagination.total)"
          href="#"
          class="pagination__link"
        >
          {{ pagination.total }}
        </a>
      </li>
      <li class="pagination__item">
        <a
          @click.prevent="changePage(pagination.current + 1)"
          href="#"
          class="pagination__link"
        >
          <svg class="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1"
               xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Arrow Right</title>
            <polygon id="Left-Iocn" stroke="none" fill-rule="evenodd"
                     points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"/>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppPagination',
  props: {
    pagination: {
      type: Object,
      default: () => ({
        current: 1,
        perPage: 1,
        total: 10,
        visible: 3,
        offset: 0
      }),
      required: true
    }
  },
  data () {
    return {
      productList: []
    }
  },
  computed: {
    lastVisiblePage () {
      return this.pagination.total - 7
    },
    countPages () {
      const pages = []
      for (let i = 0; i < this.pagination.visible; i++) {
        pages.push(this.lastVisiblePage - i)
      }
      return pages.reverse()
    }
  },
  methods: {
    countOffset (page) {
      if (page !== 1) {
        this.pagination.offset = (page - 1) * 6
      } else {
        this.pagination.offset = 0
      }
    },
    changePage (page) {
      if (page === 0) { return }
      page = +page
      this.countOffset(page)
      this.pagination.total += page - this.pagination.current
      this.pagination.current = page
      this.$emit('pageChange', {
        page,
        offset: this.pagination.offset
      })
    }
  }
}
</script>

<style scoped lang="scss" src="@/assets/styles/pagination.scss"></style>
