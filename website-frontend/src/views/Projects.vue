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
import projectJson from "../assets/posts/projects.json";
export default {
  name: "Projects",
  data: function() {
    return {
      projects: projectJson,
    };
  },
  components: {
    Project,
  },
  computed: {
    filterProjects: function() {
      return this.projects.filter((project) => project.type === "project");
    },
  },
};
</script>

<style scoped>
.projects {
  margin-top: 50px;
}
</style>
