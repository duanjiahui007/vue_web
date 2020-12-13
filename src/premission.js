import router from "./router";
import { setStrong, getStrong } from "./utils/localstrong.js";
import store from "./store/index";
router.beforeEach(async (to, from, next) => {
  if (to.meta.title !== getStrong()) {
    setStrong(to.meta.title);
    store.dispatch("nav/AsyncHeaderPath", to.meta.title);
  }
  next();
});
