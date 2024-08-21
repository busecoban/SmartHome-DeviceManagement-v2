<template>
  <div class="Loginpage">
    <UINavBar></UINavBar>
    <h1>Login Page</h1>
    <UIFooter></UIFooter>
  </div>
</template>

<script lang="ts">
import UINavBar from '../components/UINavBar.vue'
import UIFooter from '../components/UIFooter.vue'
export default {
  name: 'LoginPage',
  components: {
    UINavBar,
    UIFooter
  }
}
</script>

<style lang="scss" scoped>
.Loginpage {
  padding-top: 3rem;
}
</style>
