<template>
  <div class="recentProjects">
    <div class="project">
      <Project
        v-for="project in filteredPosts"
        v-bind:key="project.name"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import Project from "@/components/TheProject.vue";

export default {
  name: "RecentProjects",
  data: function() {
    return {};
  },
  components: {
    Project,
  },
  computed: {
    projects() {
      return this.$store.state.posts;
    },
    filteredPosts() {
      return this.$store.state.posts.filter((p) => p.type === "project");
    },
  },
  mounted() {
    this.$store.dispatch("LOAD_POSTS");
  },
};
</script>

<style scoped>
/* .recentProjects {
  display: flex;
  flex-direction: row;
} */
.project {
  /* width: 10px; */
  text-align: left;
}
</style>
