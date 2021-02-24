import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Pdf from "./views/personal/util/pdf";

// 按需引入ant design ui库
import {
  Button,
  message,
  Form,
  Input,
  Upload,
  DatePicker,
  Modal,
  Divider,
  Rate,
  Spin
} from "ant-design-vue";
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
vue.use(Pdf);
vue.config.productionTip = false;
vue.config.globalProperties.$message = message;
vue.config.globalProperties.$model = Modal;
vue
  .use(Button)
  .use(Form)
  .use(Input)
  .use(Upload)
  .use(DatePicker)
  .use(Divider)
  .use(Rate)
  .use(Spin);
