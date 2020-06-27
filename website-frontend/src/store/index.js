import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { posts: [] },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    LOAD_POSTS(context) {
      if (context.state.posts.length) return;

      fetch("/posts/projects.json")
        .then((res) => res.json())
        .then((posts) => context.commit("SET_POSTS", posts));
    },
  },
  modules: {},
});
