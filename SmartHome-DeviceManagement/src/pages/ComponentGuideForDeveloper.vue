<template>
  <div class="home-view">
    <UINavBar> </UINavBar>
    <UIFooter></UIFooter>
    <div>
      <h2>Our Components</h2>
      <h2>Inputlar s-m-l</h2>

      <h2>.</h2>
    </div>

    <UIInput id="1" :size="'small'" label="small input"> </UIInput>
    <UIInput id="2" :size="'medium'" label="medium input"> </UIInput>
    <UIInput id="3" :size="'large'" label="large input"> </UIInput>

    <div>
      <h2>form için small</h2>

      <h2>.</h2>
    </div>
    <UIInput id="4" type="email" label="Email" v-model="email" :errorMessage="emailError" />
    <UIInput
      id="5"
      type="password"
      label="Password"
      v-model="password"
      :errorMessage="passwordError"
    />
    <UIInput
      id="6"
      type="password"
      label="disabled"
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
  background: white;
}
</style>
