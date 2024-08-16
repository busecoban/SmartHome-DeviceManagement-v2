<template>
  <div class="app-page">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MainPage',

  components: {},
  mixins: [],
  data() {
    return {
      status: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.status = false
    }, 3000)
  },
  computed: {},
  methods: {},
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        console.log('Route changed')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
span {
  background: white;
}
</style>
