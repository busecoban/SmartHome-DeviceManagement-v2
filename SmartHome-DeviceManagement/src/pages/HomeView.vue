<template>
  <div class="home-view">
    <UINavBar> </UINavBar>
    <h1>Welcome to the Home Page</h1>
    <UIFooter></UIFooter>
    <UIButton @click="handleClick"> Click Me</UIButton>
    <UIInput
      id="email"
      type="email"
      label="Email"
      placeholder="Enter your email"
      v-model="email"
      :errorMessage="emailError"
    />

    <UIInput
      id="password"
      type="password"
      label="Password"
      placeholder="Enter your password"
      v-model="password"
      :errorMessage="passwordError"
    />

    <UIInput
      id="password"
      type="password"
      label="Password"
      placeholder="Enter your password"
      v-model="password"
      :errorMessage="passwordError"
      disabled
    />
  </div>
</template>

<script lang="ts">
import UINavBar from '../components/UINavBar.vue'
import UIFooter from '../components/UIFooter.vue'
import UIButton from '../components/UIButton.vue'
import UIInput from '../components/UIInput.vue'

export default {
  name: 'HomeView',
  components: {
    UINavBar,
    UIFooter,
    UIButton,
    UIInput
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
