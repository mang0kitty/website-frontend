<template>
  <div class="featuredPost" v-if="project">
    <div class="media">
      <img :src="project.image">
    </div>
    <div class="content">
      <a :href="project.location">
        <h2>{{ project.name }}</h2>
      </a>
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
img {
  width: 100%;
  aspect-ratio: 16/7;
  border-radius: 10px;
}
.featuredPost h2 {
  font-family: "Karla", sans-serif;
  font-size: 1rem;
  line-height: 2.5rem;
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
