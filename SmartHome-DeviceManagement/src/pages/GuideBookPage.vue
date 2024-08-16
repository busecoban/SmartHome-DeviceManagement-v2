<template>
  <div class="guide-page">
    <h1>Guide Book</h1>
    <UINavBar> </UINavBar>
    <UIFooter></UIFooter>
  </div>
</template>

<script>
import UINavBar from '../components/UINavBar.vue'
import UIFooter from '../components/UIFooter.vue'

export default {
  name: 'GuideBook',
  components: {
    UINavBar,
    UIFooter
  }
}
</script>

<style scoped>
.guide-page {
  padding-top: 3rem;
}
</style>
