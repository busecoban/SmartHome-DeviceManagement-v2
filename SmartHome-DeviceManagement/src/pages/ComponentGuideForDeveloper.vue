<template>
  <div class="home-view">
    <UINavBar> </UINavBar>
    <UIFooter></UIFooter>

    <h1>{{ ' Developer Component Guide ' }}</h1>
    <h3>{{ 'written by Buse Ç.' }}</h3>
    <h1>{{ ' _ ' }}</h1>

    <h1>{{ 'UIInput Component' }}</h1>

    <h2>{{ 'propsuz UIInput' }}</h2>
    <UIInput></UIInput>

    <h2>{{ 'size prop UIInput' }}</h2>
    <UIInput id="1" :size="'small'" label="small"> </UIInput>
    <UIInput id="2" :size="'medium'" label="medium"> </UIInput>
    <UIInput id="3" :size="'large'" label="large"> </UIInput>

    <h2>{{ 'type prop UIInput' }}</h2>
    <UIInput id="4" :size="'small'" label="small" :type="'email'"> </UIInput>
    <UIInput id="5" :size="'small'" label="small" :type="'password'"> </UIInput>

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
  user-select: none;
  padding-top: 3rem;
  background: white;
}

.header {
  padding-bottom: 1rem;
  padding-top: 1rem;
}
</style>
