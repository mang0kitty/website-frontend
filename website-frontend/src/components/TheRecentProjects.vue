<template>
  <div class="recentProjects">
    <div class="project">
      <Project
        v-for="project in projects.slice(projects.length - 3)"
        v-bind:key="project.name"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import Project from "@/components/TheProject.vue";
import projectJson from "../assets/posts/projects.json";
export default {
  name: "RecentProjects",
  data: function() {
    return {
      projects: projectJson,
    };
  },
  components: {
    Project,
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
