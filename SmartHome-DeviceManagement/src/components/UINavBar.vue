<template>
  <div :class="['ui-navbar-c', navbarClass]">
    <div class="ui-navbar">
      <div class="ui-navbar-logo">
        <slot name="logo">
          <IconSvg name="home" :size="l" />
        </slot>
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
import IconSvg from '../components/IconSvg.vue'

export default {
  name: 'UINavBar',
  components: {
    IconSvg
  },
  props: {
    theme: {
      type: String,
      default: 'light'
    }
  },

  computed: {
    navbarClass() {
      return {
        'ui-navbar-c--light': this.theme === 'light',
        'ui-navbar-c--dark': this.theme === 'dark'
      }
    }
  },
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

<style lang="scss" scoped>
.ui-navbar-c {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  &--light {
    background-color: #f9f9f9;
    color: #333;
  }

  &--dark {
    background-color: #333;
    color: #f9f9f9;
  }

  .ui-navbar {
    display: flex;
    align-items: center;
  }

  .ui-navbar-logo {
    margin-right: 2rem;
  }

  .ui-navbar-links {
    display: flex;
    gap: 1rem;

    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
