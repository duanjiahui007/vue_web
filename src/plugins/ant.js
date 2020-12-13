/* eslint-disable */
import { createApp } from 'vue';
import { Button, message ,Form  } from 'ant-design-vue';
import App from "../App.vue";
const app = createApp(App);
app.config.productionTip = false;
app.use(Button);
app.use(Form);
app.config.globalProperties.$message = message;
