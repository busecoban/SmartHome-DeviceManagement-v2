<template>
  <div>
    <h1>Welcome to the Home Page</h1>
    <UINavBar> </UINavBar>
  </div>
</template>

<script>
import UINavBar from '../components/UINavBar.vue'
export default {
  name: 'HomeView',
  components: {
    UINavBar
  },
  // Your component's logic goes here

  // Add your component's logic here
  created() {
    // Logic to be executed when the component is created
  },

  methods: {
    // Define your component's methods here
    handleClick() {
      // Handle the click event
    }
  }
}
</script>

<style scoped></style>
