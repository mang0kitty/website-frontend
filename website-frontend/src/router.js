// Lazy load everything that isn't the home page. Code splitting - only loading what i need and when needed
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "./views/Home.vue"),
    },

    {
      path: "/library",
      name: "library",
      component: () =>
        import(/* webpackChunkName: "library" */ "./views/Library.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },

    {
      path: "/resources",
      name: "resources",
      component: () =>
        import(/* webpackChunkName: "resources" */ "./views/Resources.vue"),
    },

    {
      path: "/projects",
      name: "projects",
      component: () =>
        import(/* webpackChunkName: "library" */ "./views/Projects.vue"),
    },
  ],
});
