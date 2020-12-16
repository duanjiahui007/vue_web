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
        component: () => import("@/views/online/index.vue"),
        meta: { title: "online" }
      },
      {
        path:"model",
        component: () => import("@/views/model/index.vue"),
        meta: {title:"model"}
      },
      {
        path:"personal",
        component:()=>import("@/views/personal/index.vue"),
        meta: {title:"personal"}
      },
      {
        path:"us",
        component: ()=>import("@/views/connectUs/index.vue"),
        meta : { title: "us" }
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
