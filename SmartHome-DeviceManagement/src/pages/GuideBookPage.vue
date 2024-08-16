<template>
  <div class="guide-page">
    <h1>Guide Book</h1>
    <UINavBar> </UINavBar>
    <!-- Add your content here -->
  </div>
</template>

<script>
import UINavBar from '../components/UINavBar.vue'
export default {
  name: 'GuideBook',
  components: {
    UINavBar
  }
}
</script>

<style scoped>
.guide-page {
  padding-top: 3rem;
}
</style>
