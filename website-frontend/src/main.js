import Vue from "vue";
import App from "./App.vue";
import Router from "./router.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
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
  render: (h) => h(App),
}).$mount("#app");
