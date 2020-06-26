<template>
  <div class="markdownPost" v-html="content"></div>
</template>

<script>
import projectJson from "../assets/posts/projects.json";

var md = require("markdown-it")({
  html: true,
  linkify: true,
  // highlight: (src: string, lang: string) => {
  //     if (!lang) return src

  //     try {
  //         return hljs.highlight(lang, src).value
  //     } catch (err) {
  //         console.debug(`Unknown language '${lang}' used in Markdown`)
  //         return src
  //     }
  // }
});

export default {
  name: "MarkdownPost",
  data: function() {
    return {
      content: "",
    };
  },
  props: {
    id: Number,
  },
  computed: {
    project() {
      return projectJson.find((project) => project.id === this.id);
    },
  },
  watch: {
    id: {
      handler() {
        fetch(this.project.location)
          .then((res) => res.text())
          .then((content) => md.render(content))
          .then((html) => (this.content = html));
      },
      immediate: true,
    },
  },
};
</script>

<style>
.markdownPost {
  width: 960px;
  margin: 0 auto;
}
.markdownPost p,
.markdownPost ul,
.markdownPost li {
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
}

.markdownPost h1 {
  font-family: "Karla", sans-serif;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 500;
}
.markdownPost h2 {
  font-family: "Karla", sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 500;
}
.markdownPost h3 {
  font-family: "Karla", sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 500;
}
.markdownPost h4 {
  font-family: "Karla", sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 500;
}
</style>
