<template>
  <div class="experience">
    <timeline :positions="experience"></timeline>
  </div>
</template>


<script>
import Timeline from "./Timeline.vue";

export default {
  name: "ExperienceTimeline",
  data: function () {
    return {
      experience: [
        {
          company: "Amazon",
          role: "Security Engineer",
          description:
            "I work to ensure our subsidaries have the tools, solutions and insights to hit the Amazon security bar.",
          date: "July 2020 - Present",
        },
        {
          company: "Mossé Security",
          role: " Remote Cyber Security Intern",
          description:
            "This remote internship programme requires me to perform network vulnerability scans, write YARA rules, defend web applications against common vulnerabilities and develop applications and scripts in Python, Golang and PowerShell. ",
          date: "2020",
        },
        {
          company: "Amazon Web Services",
          role: "Software Engineer Intern",
          description:
            "I worked on the DevOps and Tools team for Aurora Storage where I delivered a debugging and analysis tool that verifies and presents billing usages and metering data throughout the life-cycle of customer and canary database volumes and also provides correlated monitored metrics. This tool automates a routine and time-expensive task when responding to tickets relating to Aurora Storage billing.",
          date: "May - Sept 2019",
        },
        {
          company: "Trinity College Dublin",
          role: "Computer Engineering Student",
          description: "",
          date: "2016-2020",
        },
      ],
    };
  },
  filters: {
    uppercase: function (v) {
      return v.toUpperCase();
    },
  },
  components: {
    Timeline,
  },
};
</script>

<style scoped>
.timeline-header {
  margin-top: 0;
}
.experience {
  padding-top: 30px;
  width: 960px;
  margin: 0 auto;
  padding-bottom: 30px;
}
</style>

<style>
#timeline .el-timeline-item .el-timeline-item__tail {
  border-left: 1px solid #e4e7ed;
}
</style>