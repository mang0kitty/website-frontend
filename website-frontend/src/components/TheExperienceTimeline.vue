<template>
  <div class="experience">
    <div id="body">
      <div id="description" v-for="exp in experience" :key="exp"></div>
      <!-- <el-timeline id="timeline">
        <el-timeline-item icon="custom-icon" v-for="exp in experience" :key="exp">
          <h4 class="timeline-header">{{exp.company | uppercase}}</h4>
          <p>{{exp.description}}</p>
        </el-timeline-item>
      </el-timeline>-->

      <timeline :positions="experience"></timeline>
    </div>
  </div>
</template>


<script>
import TimelineVue from "./Timeline.vue";
// import * as d3 from "d3";
export default {
  name: "ExperienceTimeline",
  data: function() {
    return {
      experience: [
        {
          company: "Mossé Security",
          role: "Cyber Security Intern",
          description:
            "This remote internship programme requires me to perform network vulnerability scans, write YARA rules, defend web applications against common vulnerabilities and develop applications and scripts in Python, Golang and PowerShell. ",
          date: "2020"
        },
        {
          company: "Amazon Web Services",
          role: "Software Engineer Intern",
          description:
            "I worked on the DevOps and Tools team for Aurora Storage where I delivered a debugging and analysis tool that verifies and presents billing usages and metering data throughout the life-cycle of customer and canary database volumes and also provides correlated monitored metrics. This tool automates a routine and time-expensive task when responding to tickets relating to Aurora Storage billing.",
          date: "May-Sept 2019"
        },
        {
          company: "Trinity College Dublin",
          role: "Computer Engineering Student",
          description:
            "I’ve focused on developing a strong understanding of the underlying systems and technologies upon which we build services, in addition to the patterns and practices used to build those services themselves. My goal is to position myself as someone capable of not only designing but also supporting and reasoning about complex systems from first principles.",
          date: "2016-2020"
        }
      ]
    };
  },
  filters: {
    uppercase: function(v) {
      return v.toUpperCase();
    }
  },
  components: {
    timeline: TimelineVue
  }
};
</script>

<style scoped>
.timeline-header {
  margin-top: 0;
}
.experience {
  width: 960px;
}
section.experience #description {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
section.experience #body {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
p {
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
}
section.experience #timeline {
  width: 50%;
}
</style>

<style>
#timeline .el-timeline-item .el-timeline-item__tail {
  border-left: 1px solid #e4e7ed;
}
</style>