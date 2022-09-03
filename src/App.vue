<template>
  <div id="app">
    <TheNavigation />
    <router-view />
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";
export default {
  name: "App",
  components: {
    TheNavigation,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 1rem;
}
</style>
