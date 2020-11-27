import { createStore } from "vuex";
import getters from "./getters";

// 获取modules文件夹下的所有js 文件
const modulesFiles = require.context("./modules", true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulesPath) => {
  const modulesName = modulesPath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulesPath);
  modules[modulesName] = value.default;
  return modules;
}, {});

export default createStore({
  getters,
  modules
});
