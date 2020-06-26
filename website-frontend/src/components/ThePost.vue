<template>
  <div class="post">
    <div class="content">
      <a :href="project.location" v-if="project.type == 'project'"
        ><h1>{{ project.name }}</h1></a
      >
      <a href="#" @click="navigate(project.name)" v-if="project.type == 'blog'">
        <h1>{{ project.name }}</h1>
      </a>

      <p class="description">{{ project.description }}</p>
      <p class="date">{{ project.date }}</p>
    </div>
    <div class="media">
      <!-- <img :src="project.image" /> -->
    </div>
  </div>
</template>

<script>
// import router from "../router";
export default {
  name: "Post",
  props: {
    project: Object,
  },
  methods: {
    getId: function(name) {
      return name.toLowerCase().replace(/[^\w\d-]/g, "-");
    },
    navigate: function(name) {
      this.$router.push({
        name: "blog-post",
        params: {
          id: this.getId(name),
        },
      });
    },
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
h1 {
  font-family: "Karla", sans-serif;
  font-size: 13px;
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
