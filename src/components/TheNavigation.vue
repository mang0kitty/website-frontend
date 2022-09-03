<template>
  <nav>
    <div class="header">
      <router-link :to="{ name: 'about' }"><h4>I'm Aideen Fay</h4></router-link>
      <p id="subtext">An Engineer and Humanitarian</p>
    </div>
    <el-menu
      id="nav-right"
      theme="light"
      class="el-nav-menu"
      active-text-color="green"
      :ellipsis="false"
      mode="horizontal"
    >
      <el-menu-item index="1" @click="navigate('home')">Home</el-menu-item>
      <el-menu-item index="2" @click="navigate('projects')"
        >Projects</el-menu-item
      >
      <el-menu-item index="3" @click="navigate('library')"
        >Library</el-menu-item
      >
      <!-- <el-menu-item index="4" @click="navigate('home')">Resources</el-menu-item> -->
      <el-menu-item index="4" @click="navigate('about')">About</el-menu-item>
    </el-menu>
  </nav>
</template>

<script>
import {ElMenu, ElMenuItem, ElSubMenu} from "element-plus";

export default {
  methods: {
    navigate(name) {
      this.$router.push({ name });
    },
  },
  components: {
    ElMenu,
    ElMenuItem,
    ElSubMenu,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,600;1,600&display=swap");
.el-nav-menu {
  border-bottom: none !important;
  margin-right: 30px;
}
nav {
  display: flex;
  /* border-bottom: solid 1px #e6e6e6; */
  flex-direction: row;
  justify-content: space-between;
}
.header {
  margin-left: 30px;
  color: black;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
}

.el-menu-item {
  text-decoration: none;
}
h4 {
  font-weight: bold;
  font-size: 1.2rem;
  height: 1.5em;
}
#subtext {
  font-size: small;
}
a {
  text-decoration: none;
  color: black;
}
</style>
