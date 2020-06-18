import Vue from "vue";
import App from "./App.vue";
import Router from "./router.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.filter("striphtml", function(value) {
  var div = document.createElement("div");
  div.innerHTML = value;
  var text = div.textContent || div.innerText || "";
  return text;
});

new Vue({
  router: Router,
  render: (h) => h(App),
}).$mount("#app");
