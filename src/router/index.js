import Vue from "vue";
import VueRouter from "vue-router";
import PromiseView from "../views/PromiseView.vue";
import WebDocView from "../views/WebDocView.vue";
import VideoView from "../views/VideoView.vue";
import LoginView from "../views/LoginView.vue";
import LoginSuccessView from "../views/LoginSuccessView.vue";
import MapView from "../views/MapView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "webDoc",
    component: WebDocView,
  },
  {
    path: "/promise",
    name: "promise",
    component: PromiseView,
  },
  {
    path: "/video",
    name: "video",
    component: VideoView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/login-success",
    name: "login-success",
    component: LoginSuccessView,
  },
  {
    path: "/map",
    name: "map",
    component: MapView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
