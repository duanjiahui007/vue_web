import { createRouter, createWebHashHistory } from "vue-router";
import Main from "@/main/index";
import Other from "@/main/other";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
    redirect: "/home",
    meta: { title: "home" },
    children: [
      {
        path: "home",
        component: () => import("@/views/home/index"),
        meta: { title: "home" }
      }
    ]
  },
  {
    path: "/other",
    name: "other",
    component: Other,
    meta: { title: "other" },
    children: [
      {
        path: "online",
        component: () => import("@/views/online/index"),
        meta: { title: "online" }
      }
    ]
  },
  {
    path: "/signIn",
    component: () => import("@/views/login/index"),
    meta: { title: "signIn" }
  },
  {
    path: "/signUp",
    component: () => import("@/views/login/signUp"),
    meta: { title: "signUp" }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
