<template>
  <div id="app">
    <TheNavigation />
    <router-view />
</template>

<script>

import TheNaviagtion from "@/components/TheNavigation"
export default {
  name: "App",
  components: {
    TheNaviagtion
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

