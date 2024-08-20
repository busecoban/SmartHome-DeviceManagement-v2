<template>
  <div :class="['ui-footer-c', footerClass]">
    <div class="ui-footer">
      <div class="ui-footer-links">
        <slot name="links">
          <span><a href="/componentguidefordeveloper">Developer Guide</a></span>

          <span><a href="/contactus">Contact Us</a></span>
          <span><a href="/about">About Us</a></span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'UIFooter',
  components: {},
  props: {
    theme: {
      type: String,
      default: 'light'
    }
  },

  computed: {
    footerClass() {
      return {
        'ui-footer-c--light': this.theme === 'light',
        'ui-footer-c--dark': this.theme === 'dark'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-footer-c {
  height: 3rem;

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

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

  .ui-footer {
    display: flex;
    align-items: center;
  }

  .ui-footer-logo {
    margin-right: 2rem;
  }

  .ui-footer-links {
    position: absolute;
    right: 2rem;
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
