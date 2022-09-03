<template>
  <div class="introduction">
    <div class="media">
      <img src="../assets/profile/profilecropped.jpg" />
    </div>
    <div class="body">
      <div class="content">
        <p>
          I’m an Irish computer engineering graduate with a passion for software development and the secure and reliable deployment of systems at scale. I have experience as a Software Engineering Intern at AWS and will be returning as a Graduate Security Engineer.
          <br />
          <br />When I’m not upskilling or trying to make a difference through code, you’ll find me reading books with a cup of tea, running miles, cooking, learning more about foreign policy and creating new connections.
        </p>
      </div>
      <div class="contact">
        <a v-for="icon in icons" v-bind:key="icon.link" :href="icon.link" target="_blank">
          <vue-feather :type="icon.icon" stroke-width="1"></vue-feather>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      icons: [
        {
          icon: "linkedin",
          link: "https://www.linkedin.com/in/aideen-fay/"
        },
        { icon: "github", link: "https://github.com/mang0kitty" },
        { icon: "mail", link: "mailto:me@aideen.dev" }
      ]
    };
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
.vue-feather {
  stroke-width: 0.6;
  margin: 5px 10px;
  stroke: green;
  margin-right: 25px;
}
.introduction {
  width: 960px;
  padding-top: 40px;
  padding-bottom: 70px;
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
}
img {
  width: 300px;
  height: 340px;
  clip-path: polygon(0% 0%, 100% 0%, 40% 100%, 0% 100%);
  border-radius: 7px;
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
  margin-top: 80px;
  margin-left: -100px;
}
</style>