<template>
  <div class="home-view">
    <UINavBar> </UINavBar>
    <UIFooter></UIFooter>
    <UIInput :icon="'lock'" :label="'deneme'"> </UIInput>

    <h2>Small Buttons</h2>
    <UIButton label="Primary Small" size="small" color="primary" />
    <UIButton label="Secondary Small" size="small" color="secondary" />
    <UIButton label="Danger Small" size="small" color="danger" />
    <UIButton label="Success Small" size="small" color="success" />
    <UIButton label="Disabled Small" size="small" color="primary" :disabled="true" />
    <UIButton label="Icon Small" size="small" color="primary" icon="eye-open" />

    <h2>Medium Buttons</h2>
    <UIButton label="Primary Medium" size="medium" color="primary" />
    <UIButton label="Secondary Medium" size="medium" color="secondary" />
    <UIButton label="Danger Medium" size="medium" color="danger" />
    <UIButton label="Success Medium" size="medium" color="success" />
    <UIButton label="Disabled Medium" size="medium" color="primary" :disabled="true" />
    <UIButton label="Icon Medium" size="medium" color="primary" icon="home" />

    <h2>Large Buttons</h2>
    <UIButton label="Primary Large" size="large" color="primary" />
    <UIButton label="Secondary Large" size="large" color="secondary" />
    <UIButton label="Danger Large" size="large" color="danger" />
    <UIButton label="Success Large" size="large" color="success" />
    <UIButton label="Disabled Large" size="large" color="primary" :disabled="true" />
    <UIButton label="Icon Large" size="large" color="primary" icon="profile" />

    <h1>UIInput Component Examples</h1>

    <!-- Label Prop Examples -->
    <section>
      <h2>Label Prop Examples</h2>
      <UIInput :label="'Example 1'" />
      <UIInput :label="'Example 2'" />
      <UIInput :label="'Example 3'" />
    </section>

    <!-- Size Prop Examples -->
    <section>
      <h2>Size Prop Examples</h2>
      <UIInput :label="'Small Size'" :size="'small'" />
      <UIInput :label="'Medium Size'" :size="'medium'" />
      <UIInput :label="'Large Size'" :size="'large'" />
    </section>

    <!-- Type Prop Examples -->
    <section>
      <h2>Type Prop Examples</h2>
      <UIInput :label="'Email'" :type="'email'" />
      <UIInput :label="'Password'" :type="'password'" />
      <UIInput :label="'Medium Email'" :type="'email'" :size="'medium'" />
      <UIInput :label="'Large Password'" :type="'password'" :size="'large'" />
    </section>

    <!-- Icon Prop Examples -->
    <section>
      <h2>Icon Prop Examples</h2>
      <UIInput :label="'Search Icon'" :icon="'search'" />
      <UIInput :label="'Lock Icon'" :icon="'lock'" />
      <UIInput :label="'Search Icon Small'" :icon="'search'" :size="'small'" />
      <UIInput :label="'Lock Icon Large'" :icon="'lock'" :size="'large'" />
    </section>

    <!-- Disabled Prop Examples -->
    <section>
      <h2>Disabled Prop Examples</h2>
      <UIInput :label="'Disabled Input'" :disabled="true" />
      <UIInput :label="'Disabled with Icon'" :icon="'lock'" :disabled="true" />
    </section>

    <!-- IconRight Prop Examples -->
    <section>
      <h2>IconRight Prop Examples</h2>
      <UIInput :label="'Search Icon Right'" :iconRight="'search'" />
      <UIInput :label="'Lock Icon Right'" :iconRight="'lock'" />
      <UIInput :label="'Search Right Small'" :iconRight="'search'" :size="'small'" />
      <UIInput :label="'Lock Right Large'" :iconRight="'lock'" :size="'large'" />
    </section>

    <!-- Color Prop Examples -->
    <section>
      <h2>Color Prop Examples</h2>
      <UIInput :label="'Red Border'" :color="'red'" />
      <UIInput :label="'Blue Border'" :color="'blue'" />
      <UIInput :label="'Green Border'" :color="'green'" />
    </section>

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

    <UIButton @click="handleClick"> Click Me</UIButton>
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
