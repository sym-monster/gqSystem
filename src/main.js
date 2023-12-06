import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import "@plugins/element.js";
//import "@/assets/css/global.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import api from "./api/index";
import qs from "qs";

Vue.prototype.qs = qs; //带参数请求
Vue.prototype.api = api;
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
