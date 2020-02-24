// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Axios from "axios";
import ElementUI from "element-ui";
import echarts from "echarts";
import AMap from "vue-amap";
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'videojs-flash'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')


Vue.use(VideoPlayer)
Vue.use(ElementUI);
Vue.use(AMap);
Vue.prototype.$echarts = echarts;

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;
Vue.prototype.baseUrl = "http://localhost:8088";

// 引入公共public.js
import "./assets/css/comon0.css";
import "../node_modules/echarts/map/js/china.js"; // 引入中国地图数据
import "element-ui/lib/theme-chalk/index.css";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
