<template>
  <div class="el-timeline">
    <div
      class="el-timeline-item"
      v-for="position in positions"
      :key="position.company + '@' + position.date"
    >
      <div class="el-timeline-item__tail"></div>
      <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--">
        <i class="el-timeline-item__icon custom-icon"></i>
      </div>

      <div class="el-timeline-item__wrapper">
        <div class="el-timeline-item__content">
          <h4 class="timeline-header">{{position.company | uppercase}}</h4>
          <p>{{position.description}}</p>
        </div>
        <div class="el-timeline-itme__timestamp is-bottom"></div>
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
.timeline-header {
  margin-top: 0;
}

.el-timeline {
  width: 50%;
}

.el-timeline-item__tail {
  border-left: 1px solid #e4e7ed;
  left: 4.5px;
}
.el-timeline .el-timeline-item:last-child .el-timeline-item__tail {
  display: block;
}
</style>