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
          company: "Microsoft",
          role: "Security Software Engineer II",
          description: "At Microsoft I'm a Threat Hunter on the MSRC Threat Hunting team where our objective is to proactively find previously undetected threats in Azure first-party infrastructure - that is the underlying infrastructure that runs Azure services for our customers.",
          date: "November 2021 - Present"
        },
        {
          company: "Amazon",
          role: "Security Engineer II",
          description:
            "At Amazon, I conducted defensive security engineering for Amazon's subsidiaries and acquisitions. This included the development of automated tools for restricted environment management, and the maintenance and use of large data query platforms.",
          date: "July 2020 - November 2021",
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