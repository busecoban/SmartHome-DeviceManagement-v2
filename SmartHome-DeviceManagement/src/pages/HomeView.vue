<template>
  <div class="home-view">
    <UINavBar> </UINavBar>
    <h1>Welcome to the Home Page</h1>
    <UIFooter></UIFooter>
  </div>
</template>

<script>
import UINavBar from '../components/UINavBar.vue'
import UIFooter from '../components/UIFooter.vue'

export default {
  name: 'HomeView',
  components: {
    UINavBar,
    UIFooter
  },

  created() {},

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
