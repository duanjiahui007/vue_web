import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/home/home";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/index",
    meta: { title: "主页" },
    children: [
      {
        path: "index",
        component: () => import("@/views/index/index"),
        meta: { title: "主页" }
      },
      {
        path: "online",
        component: () => import("@/views/online/index"),
        meta: { title: "" }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
