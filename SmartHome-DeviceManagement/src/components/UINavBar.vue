<template>
  <div class="ui-navbar-c">
    <div class="['ui-navbar',navbarClass]">
      <div class="ui-navbar-logo">
        <slot name="logo"> </slot>
      </div>

      <div class="ui-navbar-links">
        <slot name="links">
          <span><a href="/">Home</a></span>
          <span><a href="/about">About</a></span>
          <span><a href="/guidebook">Guidebook</a></span>
          <span><a href="/profile">Profile</a></span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'UINavBar',
  props: {
    theme: {
      type: String,
      default: 'light'
    }
  },

  computed: {
    navbarClass() {
      return {
        'ui-navbar-c': true,
        'ui-navbar-c--light': this.theme === 'light',
        'ui-navbar-c--dark': this.theme === 'dark'
      }
    }
  },
  data() {},
  methods: {
    handleThemeChange(theme) {
      this.$emit('themeChange', theme)
    },
    handleLogin() {
      this.$emit('login')
    }
  }
}
</script>

<style lang="scss" scoped></style>
