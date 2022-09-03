<template>
  <div class="markdownPost" v-html="content"></div>
</template>

<script>
import MarkdownIt from "markdown-it";
import {ref, computed, watch, toRefs} from "vue"
import {useProjectStore} from "../stores/projects"
import {getSlug} from "../helpers/slug"

var md = MarkdownIt({
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
  props: {
    id: String,
  },
  setup(props) {
    const { id } = toRefs(props)

    const store = useProjectStore()
    const project = computed(() => store.blogs.find(p => getSlug(p.name) === id.value))
    const content = computed(() => project.value && md.render(store.content[project?.value?.location] || ""))

    watch(() => project.value?.location, () => {
      if (project.value) {
        store.refreshContent(project.value)
      }
    }, {immediate: true})

    store.refresh()

    return {
      store,
      project,
      content
    }
  }
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
  font-size: 17px;
  letter-spacing: 1px;
  font-weight: 500;
}
.markdownPost h2 {
  font-family: "Karla", sans-serif;
  font-size: 15px;
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
  font-size: 11px;
  letter-spacing: 1px;
  font-weight: 500;
}
</style>
