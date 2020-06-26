<template>
  <div class="project">
    <el-card class="project-card">
      <p id="date">{{project.date}}</p>
      <a :href="project.location">
        <h1>{{project.name}}</h1>
      </a>
      <p>{{project.description}}</p>
      <div class="tags">
        <el-tag
          class="tag"
          type="danger"
          size="mini"
          v-for="tag in project.tags"
          v-bind:key="tag"
        >{{tag}}</el-tag>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: Object
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap");
.project-card {
  width: 750px;
  height: auto;
  margin: 0 auto;
  margin-bottom: 50px;
}
h1 {
  font-size: 14px;
  font-family: "Karla", sans-serif;
  letter-spacing: 2px;
  font-weight: 500;
}
p {
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  letter-spacing: 1px;
  font-weight: 200;
}
.tags {
  float: right;
}

.el-tag {
  margin-right: 10px;
  margin-bottom: 10px;
}
.project-card #date {
  color: grey;
  font-size: 9px;
  height: 10px;
}
a {
  text-decoration: none;
  color: black;
}
</style>