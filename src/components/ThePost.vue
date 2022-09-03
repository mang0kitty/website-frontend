<template>
  <div class="post">
    <div class="content">
      <a
        :href="project.location"
        v-if="project.type == 'project'"
        target="_blank"
        ><h3>{{ project.name }}</h3></a
      >
      <router-link
        :to="{ name: 'blog-post', params: { id: getSlug(project.name) } }"
        v-if="project.type == 'blog'"
      >
        <h3>{{ project.name }}</h3>
      </router-link>

      <p class="description">{{ project.description }}</p>
      <p class="date">{{ project.date }}</p>
    </div>
  </div>
</template>

<script>
// import router from "../router";
import {getSlug} from "../helpers/slug"

export default {
  name: "Post",
  props: {
    project: Object,
  },
  methods: {
    getSlug
  },
};
</script>

<style scoped>
.post {
  flex-direction: row;
  display: flex;
  padding-bottom: 10px;
}
.content {
  flex: 4;
}
.media {
  flex: 1;
}

.content h3 {
  font-family: "Karla", sans-serif;
  font-size: 0.9rem;
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
img {
  width: 152px;
}
a {
  text-decoration: none;
  color: black;
}
</style>
