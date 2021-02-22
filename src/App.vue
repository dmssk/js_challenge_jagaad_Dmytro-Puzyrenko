<template>
  <div>
    <app-header/>
    <app-products-list/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppProductsList from '@/components/AppProductsList'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'AppMain',
  components: {
    AppHeader,
    AppProductsList,
    AppFooter
  }
}
</script>

<style lang="scss" src="@/assets/styles/main.scss"></style>
