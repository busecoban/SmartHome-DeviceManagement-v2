<template>
  <div class="home-view">
    <UINavBar> </UINavBar>
    <UIFooter></UIFooter>
    <h1>Welcome to the Home Page</h1>
    <h2>Our Components</h2>
    <h3>Buse Ç.</h3>
    <UIInput id="4" :size="'small'"> </UIInput>
    <UIInput id="5" :size="'medium'"> </UIInput>
    <UIInput id="6" :size="'large'"> </UIInput>

    <UIInput
      id="1"
      type="email"
      label="Email:"
      placeholder="Enter your email"
      v-model="email"
      :errorMessage="emailError"
    />

    <UIInput
      id="2"
      type="password"
      label="Password:"
      placeholder="Enter your password"
      v-model="password"
      :errorMessage="passwordError"
    />

    <UIInput
      id="3"
      type="password"
      label="Password:"
      placeholder="Enter your password"
      v-model="password"
      :errorMessage="passwordError"
      disabled
    />

    <UIButton @click="handleClick"> Click Me</UIButton>
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
