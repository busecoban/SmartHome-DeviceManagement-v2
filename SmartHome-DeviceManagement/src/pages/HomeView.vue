<template>
  <div class="home-view">
    <UINavBar> </UINavBar>
    <UIFooter></UIFooter>
    <h1>Welcome to the Home Page</h1>
  </div>
</template>

<script lang="ts">
import UINavBar from '../components/UINavBar.vue'
import UIFooter from '../components/UIFooter.vue'

export default {
  name: 'HomeView',
  components: {
    UINavBar,
    UIFooter
  },

  methods: {
    handleClick() {}
  }
}
</script>

<style lang="scss" scoped>
.home-view {
  padding-top: 3rem;
}
</style>
