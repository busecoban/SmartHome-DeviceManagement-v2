<template>
  <div class="uiform-c">
    <div class="container">
      <div class="form-wrapper">
        <IconSvg :name="'BIMO'" :size="'l'"></IconSvg>
        <UIInput :id="mail1" label="Mail" :size="'medium'" />
        <UIInput
          :id="mail2"
          label="Password"
          type="password"
          size="medium"
          icon="lock"
          iconRight="search"
        />
        <UIInput id="mail3" label="Confirm Password" :type="'password'" :size="'medium'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import UIInput from '../components/UIInput.vue'
import IconSvg from '../components/IconSvg.vue'
export default {
  name: 'UIForm',
  components: {
    UIInput,
    IconSvg
  }
}
</script>

<style lang="scss" scoped>
.uiform-c {
  padding: 3rem;
  display: flex;
  flex-direction: column;

  .container {
    width: 50rem;
    height: 50rem;
    border: 1px solid;
  }

  .form-wrapper {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
