<template>
  <div>
    <UINavBar></UINavBar>

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

<style lang="scss" scoped></style>
