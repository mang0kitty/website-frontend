<template>
  <div class="projects">
    <Project
      v-for="project in filterProjects"
      v-bind:key="project.name"
      :project="project"
    />
  </div>
</template>

<script>
import Project from "@/components/TheProject.vue";

export default {
  name: "Projects",
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
    filterProjects: function() {
      return this.$store.state.posts.filter(
        (project) => project.type === "project"
      );
    },
  },
  mounted() {
    this.$store.dispatch("LOAD_POSTS");
  },
};
</script>

<style scoped>
.projects {
  margin-top: 50px;
}
</style>
