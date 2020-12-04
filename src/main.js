import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 公共样式
import "./style/index.css";
// 自适应
import "./assets/flexible/flexible.js";
// iconfont
import "./assets/iconfont/iconfont.css";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
