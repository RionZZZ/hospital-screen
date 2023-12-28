import { createApp } from "vue";
import App from "./App.vue";
import "./style.scss";
import Screen1 from "./views/screen1/index.vue";
import Screen2 from "./views/screen2/index.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/screen1", component: Screen1 },
  { path: "/screen2", component: Screen2 },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
