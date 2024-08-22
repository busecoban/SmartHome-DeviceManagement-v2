<template>
  <div class="home-view">
    <UINavBar> </UINavBar>
    <UIFooter></UIFooter>
    <h1>{{ 'UIInput Component' }}</h1>
    <h2>{{ 'label prop UIInput' }}</h2>
    <UIInput :label="'hehe'"></UIInput>
    <UIInput :label="'deneme'" />
    <UIInput :label="'deneme'" :size="'small'" />
    <UIInput :label="'deneme'" :size="'medium'" />
    <UIInput :label="'deneme'" :size="'large'" />
    <h2>{{ 'propsuz UIInput' }}</h2>
    <UIInput></UIInput>
    <h2>{{ 'size small-medium-large prop UIInput' }}</h2>
    <UIInput id="1" :size="'small'"> </UIInput>
    <UIInput id="2" :size="'medium'"> </UIInput>
    <UIInput id="3" :size="'large'"> </UIInput>

    <h2>{{ 'type prop email password UIInput' }}</h2>
    <UIInput id="4" :type="'email'"> </UIInput>
    <UIInput id="5" :type="'password'"> </UIInput>
    <UIInput id="6" :type="'email'" :size="'medium'"> </UIInput>
    <UIInput id="7" :type="'password'" :size="'large'"> </UIInput>

    <h2>{{ 'icon prop UIInput' }}</h2>
    <UIInput :icon="'search'"> </UIInput>
    <UIInput :icon="'search'" :size="'small'"> </UIInput>
    <UIInput :icon="'search'" :size="'medium'"> </UIInput>
    <UIInput :icon="'search'" :size="'large'"> </UIInput>

    <h2>{{ 'disabled prop UIInput' }}</h2>
    <UIInput :disabled="true" :icon="'lock'"> </UIInput>

    <h2>{{ 'iconRight prop UIInput' }}</h2>
    <UIInput :iconRight="'search'" :label="'deneme'"> </UIInput>
    <UIInput :iconRight="'search'" :size="'small'"> </UIInput>
    <UIInput :iconRight="'search'" :size="'medium'"> </UIInput>
    <UIInput :iconRight="'search'" :size="'large'"> </UIInput>

    <h2>{{ 'color prop UIInput' }}</h2>
    <UIInput :color="'red'"> </UIInput>

    <h1>{{ 'IconSvg Component' }}</h1>
    <h2>{{ 'propsuz IconSvg' }}</h2>
    <IconSvg></IconSvg>
    <h2>{{ 'name prop IconSvg' }}</h2>
    <IconSvg :name="'lock'"></IconSvg>
    <h2>{{ 'small IconSvg' }}</h2>
    <IconSvg :size="'s'"> </IconSvg>
    <h2>{{ 'medium IconSvg' }}</h2>
    <IconSvg :size="'m'"> </IconSvg>
    <h2>{{ 'Large IconSvg' }}</h2>
    <IconSvg :size="'l'"> </IconSvg>
    <h2>{{ 'XLarge IconSvg' }}</h2>
    <IconSvg :size="'Xl'"> </IconSvg>

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
import IconSvg from '../components/IconSvg.vue'

export default {
  name: 'HomeView',
  components: {
    UINavBar,
    UIFooter,
    UIButton,
    UIInput,
    IconSvg
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
