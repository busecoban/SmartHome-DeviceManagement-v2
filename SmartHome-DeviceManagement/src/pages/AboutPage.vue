<template>
  <div class="about-page">
    <UINavBar> </UINavBar>
    <div>
      <h1>About Page</h1>
      <p>This is the about page of the application.</p>
    </div>
    <UIFooter></UIFooter>
  </div>
</template>

<script>
import UINavBar from '../components/UINavBar.vue'
import UIFooter from '../components/UIFooter.vue'

export default {
  components: {
    UINavBar,
    UIFooter
  },
  name: 'AboutPage'
}
</script>

<style scoped>
.about-page {
  padding-top: 3rem;
}
</style>
