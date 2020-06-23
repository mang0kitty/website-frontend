<template>
  <div class="introduction">
    <div class="media">
      <img src="../assets/me.jpg" />
    </div>
    <div class="body">
      <div class="content">
        <p>
          I’m an Irish computer engineering graduate with a passion for software development and the secure and reliable deployment of systems at scale. I have experience as a Software Engineering Intern at AWS and will be returning to begin my career as a Security Engineer.
          <br />
          <br />When I’m not upskilling or trying to make a difference through code, you’ll find me reading books with a cup of tea, running miles, cooking, learning more about foreign policy and creating new connections.
        </p>
      </div>
      <div class="contact">
        <a v-for="icon in icons" v-bind:key="icon.link" :href="icon.link" target="_blank">
          <component :is="icon.icon"></component>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { LinkedinIcon, GithubIcon, MailIcon } from "vue-feather-icons";

export default {
  data: function() {
    return {
      icons: [
        {
          icon: LinkedinIcon,
          link: "https://www.linkedin.com/in/aideen-fay/"
        },
        { icon: GithubIcon, link: "https://github.com/mang0kitty" },
        { icon: MailIcon, link: "mailto:me@aideen.dev" }
      ]
    };
  },
  components: {
    LinkedinIcon,
    GithubIcon,
    MailIcon
  },
  methods: {
    reDirect: function(link) {
      window.location.href = link;
    }
  }
};
</script>

<style scoped>
.content {
  padding-right: 85px;
}
.contact {
  padding-right: 85px;
  flex-direction: row;
  display: flex;
  justify-content: center;
}
.feather-github,
.feather-linkedin,
.feather-mail {
  stroke-width: 0.6;
  margin: 5px 10px;
  stroke: green;
}
.introduction {
  width: 960px;
  padding-top: 40px;
  padding-bottom: 60px;
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
}
img {
  width: 270px;
  height: 320px;
  border-radius: 10px;
}
p {
  margin-top: 0;
  font-size: 12px;
  font-style: normal;
  font-family: "Poppins", sans-serif;
  text-align: left;
  letter-spacing: 1px;
}

.body {
  width: 450px;
}
</style>