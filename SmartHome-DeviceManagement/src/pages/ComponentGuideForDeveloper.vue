<template>
  <div class="home-view">
    <UINavBar> </UINavBar>
    <UIFooter></UIFooter>
    <div class="header">
      <h2>Developer Guide</h2>
      <h2>Inputlar s-m-l</h2>
    </div>

    <UIInput id="1" :size="'small'" label="small input"> </UIInput>
    <UIInput id="2" :size="'medium'" label="medium input"> </UIInput>
    <UIInput id="3" :size="'large'" label="large input"> </UIInput>

    <div class="header">
      <h2>formlar için</h2>
    </div>
    <UIInput id="4" type="email" label="Email" v-model="email" :errorMessage="emailError" />
    <UIInput
      id="5"
      type="password"
      label="Password"
      v-model="password"
      :errorMessage="passwordError"
    />

    <div class="header">
      <h2>butonlar</h2>
    </div>

    <UIButton @click="handleClick"> Click Me</UIButton>

    <div class="header">
      <h2>text box</h2>
    </div>
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

.header {
  padding-bottom: 1rem;
  padding-top: 1rem;
}
</style>
