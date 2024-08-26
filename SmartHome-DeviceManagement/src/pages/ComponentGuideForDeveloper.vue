<template>
  <div class="home-view">
    <UINavBar> </UINavBar>
    <UIFooter></UIFooter>

    <!-- Section 1: UIInput Component Examples -->
    <section class="input-section">
      <h1>UIInput Component Examples</h1>
      <!-- Label Prop Examples -->
      <div>
        <h2>Label Prop Examples</h2>
        <UIInput :id="'input-example1'" :label="'Example 1'" />
        <UIInput :id="'input-example2'" :label="'Example 2'" />
        <UIInput :id="'input-example3'" :label="'Example 3'" />
      </div>

      <!-- Size Prop Examples -->
      <div>
        <h2>Size Prop Examples</h2>
        <UIInput :id="'input-small-size'" :label="'Small Size'" :size="'small'" />
        <UIInput :id="'input-medium-size'" :label="'Medium Size'" :size="'medium'" />
        <UIInput :id="'input-large-size'" :label="'Large Size'" :size="'large'" />
      </div>

      <!-- Type Prop Examples -->
      <div>
        <h2>Type Prop Examples</h2>
        <UIInput :id="'input-email-type'" :label="'Email'" :type="'email'" />
        <UIInput :id="'input-password-type'" :label="'Password'" :type="'password'" />
        <UIInput
          :id="'input-medium-email-type'"
          :label="'Medium Email'"
          :type="'email'"
          :size="'medium'"
        />
        <UIInput
          :id="'input-large-password-type'"
          :label="'Large Password'"
          :type="'password'"
          :size="'large'"
        />
      </div>

      <!-- Icon Prop Examples -->
      <div>
        <h2>Icon Prop Examples</h2>
        <UIInput :id="'input-search-icon'" :label="'Search Icon'" :icon="'search'" />
        <UIInput :id="'input-lock-icon'" :label="'Lock Icon'" :icon="'lock'" />
        <UIInput
          :id="'input-search-icon-small'"
          :label="'Search Icon Small'"
          :icon="'search'"
          :size="'small'"
        />
        <UIInput
          :id="'input-lock-icon-large'"
          :label="'Lock Icon Large'"
          :icon="'lock'"
          :size="'large'"
        />
      </div>

      <!-- Disabled Prop Examples -->
      <div>
        <h2>Disabled Prop Examples</h2>
        <UIInput :id="'input-disabled'" :label="'Disabled Input'" :disabled="true" />
        <UIInput
          :id="'input-disabled-icon'"
          :label="'Disabled with Icon'"
          :icon="'lock'"
          :disabled="true"
        />
      </div>

      <!-- IconRight Prop Examples -->
      <div>
        <h2>IconRight Prop Examples</h2>
        <UIInput
          :id="'input-icon-right-search'"
          :label="'Search Icon Right'"
          :iconRight="'search'"
        />
        <UIInput :id="'input-icon-right-lock'" :label="'Lock Icon Right'" :iconRight="'lock'" />
        <UIInput
          :id="'input-icon-right-small'"
          :label="'Search Right Small'"
          :iconRight="'search'"
          :size="'small'"
        />
        <UIInput
          :id="'input-icon-right-large'"
          :label="'Lock Right Large'"
          :iconRight="'lock'"
          :size="'large'"
        />
      </div>

      <!-- Color Prop Examples -->
      <div>
        <h2>Color Prop Examples</h2>
        <UIInput :id="'input-red-border'" :label="'Red Border'" :color="'red'" />
        <UIInput :id="'input-blue-border'" :label="'Blue Border'" :color="'blue'" />
        <UIInput :id="'input-green-border'" :label="'Green Border'" :color="'green'" />
      </div>
    </section>

    <!-- Section 2: UIButton Component Examples -->
    <section class="button-section">
      <h1>UIButton Component Examples</h1>
      <!-- Small Buttons -->
      <div>
        <h2>Small Buttons</h2>
        <UIButton label="Primary Small" size="small" color="primary" />
        <UIButton label="Secondary Small" size="small" color="secondary" />
        <UIButton label="Danger Small" size="small" color="danger" />
        <UIButton label="Success Small" size="small" color="success" />
        <UIButton label="Disabled Small" size="small" color="primary" :disabled="true" />
        <UIButton label="Icon Small" size="small" color="primary" icon="eye-open" />
      </div>

      <!-- Medium Buttons -->
      <div>
        <h2>Medium Buttons</h2>
        <UIButton label="Primary Medium" size="medium" color="primary" />
        <UIButton label="Secondary Medium" size="medium" color="secondary" />
        <UIButton label="Danger Medium" size="medium" color="danger" />
        <UIButton label="Success Medium" size="medium" color="success" />
        <UIButton label="Disabled Medium" size="medium" color="primary" :disabled="true" />
        <UIButton label="Icon Medium" size="medium" color="primary" icon="home" />
      </div>

      <!-- Large Buttons -->
      <div>
        <h2>Large Buttons</h2>
        <UIButton label="Primary Large" size="large" color="primary" />
        <UIButton label="Secondary Large" size="large" color="secondary" />
        <UIButton label="Danger Large" size="large" color="danger" />
        <UIButton label="Success Large" size="large" color="success" />
        <UIButton label="Disabled Large" size="large" color="primary" :disabled="true" />
        <UIButton label="Icon Large" size="large" color="primary" icon="profile" />
      </div>
    </section>

    <!-- Section 3: IconSvg Component Examples -->
    <section class="icon-svg-section">
      <h1>IconSvg Component Examples</h1>
      <!-- Small Icons -->
      <div>
        <h2>Small Icons</h2>
        <IconSvg :name="'search'" :size="'s'" />
        <IconSvg :name="'lock'" :size="'s'" />
        <IconSvg :name="'home'" :size="'s'" />
      </div>

      <!-- Medium Icons -->
      <div>
        <h2>Medium Icons</h2>
        <IconSvg :name="'search'" :size="'m'" />
        <IconSvg :name="'lock'" :size="'m'" />
        <IconSvg :name="'home'" :size="'m'" />
      </div>

      <!-- Large Icons -->
      <div>
        <h2>Large Icons</h2>
        <IconSvg :name="'search'" :size="'l'" />
        <IconSvg :name="'lock'" :size="'l'" />
        <IconSvg :name="'home'" :size="'l'" />
      </div>
    </section>
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
  }
}
</script>

<style lang="scss" scoped>
.home-view {
  padding-top: 3rem;
  background: white;
  display: flex;
  flex-direction: column;
}

.input-section,
.button-section,
.icon-svg-section {
  margin-bottom: 2rem;
}
</style>
