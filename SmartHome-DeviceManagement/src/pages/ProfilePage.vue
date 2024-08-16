<template>
  <div class="home-page">
    <h1>Welcome to the Profile Page</h1>
    <UINavBar> </UINavBar>
    <UIFooter></UIFooter>
  </div>
</template>

<script lang="ts">
import UINavBar from '../components/UINavBar.vue'
import UIFooter from '../components/UIFooter.vue'

export default {
  name: 'ProfilePage',
  components: {
    UINavBar,
    UIFooter
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  padding-top: 3rem;
}
</style>
