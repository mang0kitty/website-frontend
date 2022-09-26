<template>
  <div class="introduction">
    <div class="media">
      <img src="../assets/profile/profilecropped.jpg" />
    </div>
    <div class="body">
      <div class="content">
        <p>
          I’m a Security Software Engineer with a vision of employing resilient technology to improve the quality of life for people all over the world. <br />
          <br />
          For me, this means protecting individuals and organizations from security and environmental threats as well as the systemic structures ingrained within teams and society that hinder our progress,  by bridging the gap between software, security, and human rights.<br />
          <br />
          I’m interested in technology and leadership structures that advance progress in these spaces, through decentralization, machine intelligence, zero trust internet infrastructure, and technology that supports an industrial shift to clean energy. <br />
          <br />
          In my free time, I build and contribute to open-source projects and communities that advance <a href="https://github.com/Azure/aks-auditd">cybersecurity</a> and inefficient workflows in the <a href="https://github.com/mang0kitty/bwbble">biotech</a> and <a href="https://github.com/SierraSoftworks/git-tool">developer productivity</a> domain. 
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