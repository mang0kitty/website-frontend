<template>
  <div class="el-timeline">
    <div
      class="el-timeline-item"
      v-for="position in positions"
      :key="position.company + '@' + position.date"
    >
      <div class="el-timeline-item__left">
        <h4>{{position.role}}</h4>
        <p>{{position.date}}</p>
      </div>

      <div class="el-timeline-item__center">
        <div class="el-timeline-item__tail"></div>
        <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--">
          <i class="el-timeline-item__icon custom-icon"></i>
        </div>
      </div>

      <div class="el-timeline-item__right">
        <div class="el-timeline-item__wrapper">
          <div class="el-timeline-item__content">
            <h5 class="timeline-header">{{position.company}}</h5>
            <p>{{position.description}}</p>
          </div>
          <div class="el-timeline-itme__timestamp is-bottom"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    positions: {
      type: Array,
      required: true,
      default: () => []
    }
  }
};
</script>

<style scoped>
.el-timeline-item__left_content {
  position: absolute;
  padding-left: 0;
  flex: 1;
}
.el-timeline-item__left p {
  color: grey;
}
.timeline-header {
  margin-top: 0;
}
h4 {
  font-family: "avenir", sans-serif;
  font-size: 12px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 0;
  margin-bottom: 5px;
}

.el-timeline-item {
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
}
.el-timeline-item__left {
  flex: 2;
  text-align: right;
  padding-right: 20px;
}

.el-timeline-item__right {
  flex: 2;
  padding-bottom: 20px;
}

.el-timeline-item__center {
  flex: 0 0 30px;
  position: relative;
}

.el-timeline-item__content {
  flex: 2;
}

.el-timeline-item__wrapper {
  padding: 0;
}

.el-timeline {
  padding-top: 35px;
  padding-bottom: 30px;
  flex-direction: column;
  display: flex;
}

h5 {
  font-family: "avenir", sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 0;
  margin-bottom: 5px;
}
p {
  margin-top: 0px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
}

.el-timeline-item__tail {
  border-left: 1px solid #e4e7ed;
  left: 4.5px;
}
.el-timeline .el-timeline-item:last-child .el-timeline-item__tail {
  display: block;
}

.el-timeline-item__node--normal {
  left: 1px;
  width: 7px;
  height: 7px;
  background-color: green;
  /* background-color: #024b0c; */
}
</style>