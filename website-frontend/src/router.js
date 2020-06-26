// Lazy load everything that isn't the home page. Code splitting - only loading what i need and when needed
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// import posts from "assets/posts/projects.json";

// const blogPosts = posts.filter((post) => post.type === "blog");
// const blogRoutes = Object.keys(blogPosts).map((bp) => {
//   const children = blogPosts[bp].map((child) => ({
//     path: child.id,
//     name: child.id,
//     component: () => import("./components/TheMarkdownPost.vue"),
//   }));
// });
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
      path: "/projects",
      name: "projects",
      component: () =>
        import(/* webpackChunkName: "projects" */ "./views/Projects.vue"),
    },

    {
      path: "/blog/:id",
      name: "blog-post",
      component: () =>
        import(
          /* webpackChunkName: "blog-post" */ "./components/TheMarkdownPost.vue"
        ),
      props(route) {
        let props = { ...route.params };
        props.id = parseInt(props.id);
        return props;
      },
    },
  ],
});
