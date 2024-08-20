<template>
  <div class="market-page">
    <UINavBar></UINavBar>
    <h1>Market Page</h1>
    <UIFooter></UIFooter>
  </div>
</template>

<script lang="ts">
import UINavBar from '../components/UINavBar.vue'
import UIFooter from '../components/UIFooter.vue'

export default {
  name: 'MarketPage',
  components: {
    UINavBar,
    UIFooter
  }
}
</script>

<style lang="scss" scoped>
.market-page {
  padding-top: 3rem;
}
</style>
