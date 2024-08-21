<template>
  <div class="contact-us-page">
    <UINavBar></UINavBar>
    <h1>Contact Us Page</h1>
    <UIFooter></UIFooter>
  </div>
</template>

<script lang="ts">
import UINavBar from '../components/UINavBar.vue'
import UIFooter from '../components/UIFooter.vue'
export default {
  name: 'ContactUsPage',
  components: {
    UINavBar,
    UIFooter
  }
}
</script>

<style lang="scss" scoped>
.contact-us-page {
  padding-top: 3rem;
}
</style>
