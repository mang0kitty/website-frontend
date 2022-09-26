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
          description: "At Microsoft I'm a Threat Hunter on the Cloud and AI Threat Hunting team where our objective is to proactively identify and report on security gaps in Azure infrastructure that would allow an adversary to operate undetected. In addition to my core technical responsibilities, I have also supported team management in making sure our team's execution and mission is aligned with the organization's broader objectives.",
          date: "November 2021 - Present"
        },
        {
          company: "Amazon",
          role: "Security Engineer II",
          description:
            "I worked on Amazon’s Subsidiary Security team, which was responsible for M&A due diligence and the security integration of subsidiaries into Amazon’s tech and cultural ecosystem. I worked directly with the product and security teams to assess the probability of a risk event to Amazon and address security and visibility gaps across their cloud and on-prem environments.",
          date: "July 2020 - November 2021",
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