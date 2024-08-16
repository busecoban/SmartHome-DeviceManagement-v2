<template>
  <div class="home-page">
    <h1>Welcome to the Profile Page</h1>
    <UINavBar> </UINavBar>
  </div>
</template>

<script lang="ts">
import UINavBar from '../components/UINavBar.vue'
export default {
  name: 'ProfilePage',
  components: {
    UINavBar
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  padding-top: 3rem;
}
</style>
