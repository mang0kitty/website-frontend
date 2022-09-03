import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Library from "../views/Library.vue";
import Projects from "../views/Projects.vue";
import MarkdownPost from "../components/TheMarkdownPost.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/library",
      name: "library",
      component: Library,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },

    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },

    {
      path: "/blog/:id",
      name: "blog-post",
      component: MarkdownPost,
      props: true,
    },
  ],
});

export default router;
