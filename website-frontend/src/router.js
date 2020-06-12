// Lazy load everything that isn't the home page. Code splitting - only loading what i need and when needed
import Vue from "vue";
import Router from "vue-router";
import Library from "views/Library.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/library",
      name: "library",
      component: () =>
        import(/* webpackChunkName: "library" */ "./views/Library"),
    },
  ],
});
