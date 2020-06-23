<template>
  <div class="education">
    <div class="undergraduate">
      <div class="title">
        <h4>
          <img src="../assets/gradCap.png" />
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
              <a :href="finalYearProject.location">
                <i class="el-icon-document"></i>
              </a>
            </h5>
          </div>
          <div class="subtitle">
            <p style="font-size:11px">Python, Kubernetes, Docker, Azure</p>
          </div>
          <p style="color:black">
            {{finalYearProject.content}}
            <br />
            <br />Read about the
            <span
              style="font-weight:bold; font-size:10px;"
            >Security and Privacy Considerations of my Dissertation.</span>
          </p>
        </div>
        <div class="otherProjects">
          <h5>Recognition + Other Projects</h5>
          <p v-for="op in otherProjects" :key="op.name" style="color:black">
            <a :href="op.location">{{op.name}}</a>
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
        "My time at Trinity required me to develop skills in a broad array of disciplines from x86 ARM Assembly to Deep Learning. My programming roots began with C++ and C which would later be leveraged to complete my Computer Networks projects. I was focused on developing a strong understanding of the underlying systems and technologies upon which we build services, in addition to the patterns and practices used to build those services themselves.",
      finalYearProject: {
        name: "Parallelized DNA Analysis on Kubernetes",
        content:
          "This involved the development of a Kubernetes based control plane for the execution of DNA analysis jobs – enabling highly parallelized workloads to be executed rapidly and at low cost with minimal operational overhead. This involves the containerization of the existing application, the automation of deployments on Kubernetes and integration with the Kubernetes API to orchestrate these analysis jobs and their distributed storage requirements. To gather accurate performance benchmarks, I’m using Prometheus and Grafana – instrumenting the application itself to expose useful runtime metrics.",
        location: "https://github.com/mang0kitty/bwbble"
      },
      otherProjects: [
        {
          name: "2018 Women Who Wow",
          location: "https://www.tcd.ie/tangent/mentoring/women/"
        },
        {
          name: "Dark Web Visualization",
          tags: ["D3.js", "Python"],
          location: "https://darkweb.aideen.dev/index.html"
        }
        // {
        //   name: "HTTP/ 1.0",
        //   tags: ["C++"],
        //   location: "https://github.com/mang0kitty/http"
        // }
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
.finalYearProject.fypTitle {
  display: inline-block;
}
.finalYearProject {
  flex: 2;
}
.el-icon-document {
  display: inline-block;
}
.finalYearProject h5 {
  height: 0em;
  margin-bottom: 15px;
  letter-spacing: 0.5px;
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
  padding-bottom: 30px;
}

h4 {
  font-family: "avenir", sans-serif;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
  height: 4.3em;
  position: relative;
}
p {
  font-style: italic;
  margin-top: 0;
  font-size: 12px;
  font-style: normal;
  font-family: "Poppins", sans-serif;
  color: grey;
  padding-right: 85px;
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
}
</style>