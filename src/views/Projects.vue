<template>
  <div class="projects">
    <Project
      v-for="project in projects"
      v-bind:key="project.name"
      :project="project"
    />
  </div>
</template>

<script>
import Project from "@/components/TheProject.vue";
import {computed} from "vue"
import {useProjectStore} from "../stores/projects"

export default {
  name: "Projects",
  components: {
    Project,
  },
  setup() {
    const store = useProjectStore()
    const projects = computed(() => store.projects)

    store.refresh()

    return {
      store,
      projects
    }
  }
};
</script>

<style scoped>
.projects {
  margin-top: 50px;
}
</style>
