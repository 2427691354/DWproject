import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/index";
import Video from "@/components/video";
import onlineCourse from "@/components/onlineCourse";
import campus from "@/components/campus";
import epidemic from "@/components/epidemic";
import navs from "@/components/navs";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/video",
      name: "Video",
      component: Video
    },
    {
      path: "/onlineCourse",
      name: "onlineCourse",
      component: onlineCourse
    },
    {
      path: "/campus",
      name: "campus",
      component: campus
    },
    {
      path: "/epidemic",
      name: "epidemic",
      component: epidemic
    },{
      path: "/navs",
      name: "navs",
      component: navs
    }
  ]
});
