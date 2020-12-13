import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 按需引入ant design ui库
// import  "./plugins/ant.js";
import { Button, message, Form, Input } from "ant-design-vue";
// 公共样式
import "./style/index.css";
// 自适应
import "./assets/flexible/flexible.js";
// iconfont
import "./assets/iconfont/iconfont.css";
// 守卫
import "./premission";

const vue = createApp(App);
vue
  .use(store)
  .use(router)
  .mount("#app");

vue.config.productionTip = false;
vue.config.globalProperties.$message = message;
vue.use(Button);
vue.use(Form).use(Input);
