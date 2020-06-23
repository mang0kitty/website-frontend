<template>
  <section class="about">
    <section class="introduction">
      <Introduction />
    </section>
    <section class="experience">
      <div id="title">
        <h3>Experience</h3>
      </div>
      <ExperienceTimeline />
    </section>
    <section class="education">
      <div id="title">
        <h3>Education</h3>
      </div>
      <Education />
    </section>

    <section class="contact">
      <div id="title">
        <h3>Recent Projects</h3>
      </div>
      <div id="body"></div>
    </section>
  </section>
</template>

<script>
import ExperienceTimeline from "@/components/TheExperienceTimeline.vue";
import Introduction from "@/components/TheIntroduction.vue";
import Education from "@/components/TheEducation.vue";
export default {
  name: "About",
  components: {
    ExperienceTimeline,
    Introduction,
    Education
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,600;1,600&display=swap");

h3 {
  text-transform: uppercase;
  font-family: "avenir", sans-serif;
  font-weight: normal;
  font-size: 20px;
  font-stretch: normal;
  color: black;
  letter-spacing: 5px;
  text-align: center;
  vertical-align: middle;
  line-height: 55px;
}

h5 {
  text-transform: uppercase;
  font-weight: normal;
  font-size: 14px;
  font-family: "avenir-lt-w01_35-light1475496", sans-serif;
  letter-spacing: 1px;
}
.custom-icon {
  font-size: 2rem;
}
#title {
  border-style: solid none solid none;
  border-width: thin;
  border-color: #f1f1f1;
  height: 100px;
}

#body {
  width: 960px;
  display: inline-block;
  padding: 20px;
}
p {
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
}

.introduction {
  text-align: center;
  /* height: 500px; */
}
.education #title {
  text-align: center;
  /* height: 500px;
  color: red; */
}
.experience #title {
  /* height: 500px; */
  text-align: center;
}
.volunteering {
  text-align: center;
  /* height: 500px; */
}
.contact {
  text-align: center;
  /* height: 500px; */
}
</style>
