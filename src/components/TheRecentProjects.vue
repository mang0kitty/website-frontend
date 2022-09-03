<template>
  <div class="recentProjects">
    <div class="project">
      <Project
        v-for="project in projects"
        v-bind:key="project.name"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import Project from "@/components/TheProject.vue";
import {computed} from "vue"
import {useProjectStore} from "../stores/projects"

export default {
  name: "RecentProjects",
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
/* .recentProjects {
  display: flex;
  flex-direction: row;
} */
.project {
  /* width: 10px; */
  text-align: left;
}
</style>
