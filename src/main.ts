import { createApp } from "vue";
import { createPinia } from "pinia"
import App from "./App.vue";
import router from "./router";

import 'element-plus/theme-chalk/index.css';
import ElementPlus from 'element-plus';
import VueFeather from 'vue-feather';
import './assets/main.css';

const app = createApp(App);
const store = createPinia();

app.use(router);
app.use(store);
app.use(ElementPlus);

app.component(VueFeather.name, VueFeather);

app.mount("#app");

