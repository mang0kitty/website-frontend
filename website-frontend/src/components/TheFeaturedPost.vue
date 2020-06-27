<template>
  <div class="featuredPost" v-if="project">
    <div class="media">
      <img :src="project.image" />
    </div>
    <div class="content">
      <a :href="project.location"
        ><h1>{{ project.name }}</h1></a
      >
      <p class="description">{{ project.description }}</p>
      <p class="date">{{ project.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedPost",
  props: {
    project: Object,
  },
};
</script>

<style scoped>
.featuredPost {
  width: 784px;
  height: 578px;
}

img {
  width: 784px;
  height: 382px;
  border-radius: 10px;
}
h1 {
  font-family: "Karla", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 500;
}
p {
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  letter-spacing: 0.6px;
}
.date {
  color: grey;
  font-size: 11px;
}
a {
  text-decoration: none;
  color: black;
}
</style>
