import Vue from "vue";
import VueRouter from "vue-router";

import SiteListView from "../views/SiteListView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "siteList",
      component: SiteListView,
    },
    {
      path: "/site/:id",
      name: "siteDetail",
      component: () => import("../views/SiteDetailView.vue"),
    },
  ],
});

export default router;
