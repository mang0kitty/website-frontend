<template>
  <div class="home">
    <div class="content">
      <div class="feature">
        <FeaturedPost :project="projects[0]" />
      </div>
      <div class="posts">
        <h1>Latest</h1>
        <div
          class="post"
          v-for="project in projects.slice(1)"
          v-bind:key="project.name"
        >
          <Post :project="project" />
        </div>
      </div>
    </div>
    <div class="about"></div>
  </div>
</template>

<script>
import FeaturedPost from "@/components/TheFeaturedPost.vue";
import Post from "@/components/ThePost.vue";
// import MarkdownPost from "@/components/TheMarkdownPost.vue";
export default {
  data: function() {
    return {};
  },

  computed: {
    projects() {
      return this.$store.state.posts;
    },
  },

  mounted() {
    this.$store.dispatch("LOAD_POSTS");
  },

  components: {
    FeaturedPost,
    Post,
    // MarkdownPost,
  },
};
</script>

<style scoped>
.home {
  flex-direction: row;
  display: flex;
  width: 1224px;
  margin: 0 auto;
  margin-top: 20px;
}

.content {
  /* // width: 784px; */
  flex: 2;
}
.feature {
  height: 554px;
  margin-bottom: 40px;
}
.posts .title {
  border-style: solid none none none;
  border-width: thin;
  border-color: grey;
}
.about {
  flex: 1;
}
h1 {
  border-bottom: 1px solid rgb(204, 204, 204);
  text-transform: uppercase;
  font-size: 17px;
  font-family: "Karla", sans-serif;
  letter-spacing: 2px;
  font-weight: 500;
  padding-bottom: 5px;
}
</style>
