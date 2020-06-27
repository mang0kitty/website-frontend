import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import Router from "./router.js";
import ElementUI from "element-ui";

import "element-ui/lib/theme-chalk/index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import store from "./store";

Vue.use(ElementUI);
Vue.use(Vuex);
Vue.config.productionTip = false;

export function CleanHTML(value) {
  var div = document.createElement("div");
  div.innerHTML = value;
  var text = div.textContent || div.innerText || "";
  return text.normalize();
}

Vue.filter("striphtml", CleanHTML);

export function GetPreview(text) {
  let count = 0;
  let quotes = false;
  text = text.normalize();

  let controlCharacters = /[^.'"!?]*([.'"!?])/g;

  let res = "";
  let match = null;
  while ((match = controlCharacters.exec(text))) {
    const control = match[1];

    switch (control) {
      case ".":
      case "!":
      case "?":
        if (!quotes && ++count >= 3) return res + match[0];
        break;
      case "'":
      case '"':
        quotes = !quotes;
        break;
      default:
        break;
    }

    res += match[0];
  }

  return res;
}

Vue.filter("preview", GetPreview);
new Vue({
  router: Router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
