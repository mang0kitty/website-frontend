<template>
  <div class="education">
    <div class="undergraduate">
      <div class="title">
        <h4>
          <img src="../assets/logos/gradCap.png" />
          BAI Computer Engineering,
          <span class="normal-heading">1st Class Honors</span>
        </h4>
        <p>Trinity College Dublin, Ireland</p>
      </div>
      <div style="text-align: center;" class="education-intro-wrapper">
        <div class="education-intro-content">{{trinity}}</div>
      </div>
      <div class="body">
        <div class="finalYearProject">
          <div class="fypTitle">
            <h5 style="font-style:normal">
              Dissertation: {{finalYearProject.name}}
              <a
                href="../assets/projects/dissertation.pdf"
                target="_blank"
              >
                <i class="el-icon-document"></i>
              </a>
              <a :href="finalYearProject.location" target="_blank">
                <vue-feather type="github" stroke-width="1" size="1rem"></vue-feather>
              </a>
            </h5>
          </div>
          <div class="subtitle">
            <p style="font-size:11px">Python, Kubernetes, Docker, Azure</p>
          </div>
          <p style="color:black">{{finalYearProject.content}}</p>
          <h5 style="font-style:normal">
            Security and Privacy Considerations of my Dissertation
            <a
              :href="finalYearProject.location"
              target="_blank"
            >
            <vue-feather type="file-text" stroke-width="1" size="1rem"></vue-feather>
            </a>
          </h5>
        </div>
        <div class="otherProjects">
          <h5>Recognition + Other Projects</h5>
          <p v-for="op in otherProjects" :key="op.name" style="color:black">
            <a :href="op.location" target="_blank">{{op.name}}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      trinity:
        "This degree helped develop my understanding of the underlying systems and technologies upon which we build services, as well as the patterns and practices used to build those services themselves. My electives focused on Security and Privacy, Deep Learning, Data Visualization, Computer Networks, and Knowledge Engineering with the goal of allowing me to reason about complex systems from first principles and share that with others.",
      finalYearProject: {
        name: "Parallelized DNA Analysis on Kubernetes",
        content:
          "This involved the development of a Kubernetes based control plane for the execution of DNA analysis jobs – enabling highly parallelized workloads to be executed rapidly and at low cost with minimal operational overhead. This involves the containerization of the existing application, the automation of deployments on Kubernetes and integration with the Kubernetes API to orchestrate these analysis jobs and their distributed storage requirements. To gather accurate performance benchmarks, I’m using Prometheus and Grafana – instrumenting the application itself to expose useful runtime metrics.",
        location: "https://github.com/mang0kitty/bwbble",
        file: "/assets/projects/dissertation.pdf"
      },
      otherProjects: [
        {
          name: "Dark Web Visualization",
          tags: ["D3.js", "Python"],
          location: "https://darkweb.aideen.dev/index.html"
        },
        {
          name: "2018 Women Who Wow",
          location: "https://www.tcd.ie/tangent/mentoring/women/"
        }
      ],
      certifications: [
        {
          name: "OSINT Mini",
          issuer: "OSINT-i1"
        },
        {
          name: "Humanitarian Response to Conflict and Disaster",
          issuer: "Harvard University"
        }
      ]
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Karla&display=swap");
.finalYearProject.fypTitle {
  display: inline-block;
}
.finalYearProject {
  flex: 2;
}
.el-icon-document {
  display: inline-block;
}
.body h5 {
  font-family: "Karla", sans-serif;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 1px;
}

.vue-feather {
  vertical-align: middle;
}

.finalYearProject p {
  margin-top: 0;
}
img {
  width: 40px;
  height: 50px;
  vertical-align: middle;
  margin: 20px;
}

.education-intro-content {
  text-align: left;
  display: inline-block;
  color: black;
  font-style: normal;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  letter-spacing: 1px;
}

.education {
  width: 960px;
  margin: 0 auto;
  display: block;
  padding-bottom: 40px;
  padding-top: 30px;
}

h4 {
  font-family: "Karla", sans-serif;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
  height: 4em;
}

h5 {
  line-height: 2rem;
}

p {
  font-style: italic;
  margin-top: 0;
  font-size: 12px;
  font-style: normal;
  font-family: "Poppins", sans-serif;
  color: grey;
  padding-right: 95px;
  letter-spacing: 1px;
}
.title {
  text-align: center;
}
.normal-heading {
  text-transform: capitalize;
  font-family: "avenr", sans-serif;
}
.body {
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
}

a {
  text-decoration: none;
  color: black;

  margin-right: 7px;
}
.feather-github {
  stroke-width: 1;
  margin: 5px 10px;
  stroke: black;
  margin-right: 25px;
  height: 18px;
}
</style>