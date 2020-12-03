import { createRouter, createWebHashHistory } from "vue-router";
import Main from "@/main/index";
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
      },
      {
        path: "online",
        component: () => import("@/views/online/index"),
        meta: { title: "online" }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
