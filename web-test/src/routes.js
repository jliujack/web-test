import { createRouter, createWebHashHistory } from "vue-router";
import onePx from "./pages/onePx/onePx.vue";
import viewPort from "./pages/viewPort/viewPort";

const routes = [
  { path: "/1px", component: onePx },
  { path: "/view-port", component: viewPort },
  { path: "/layout", component: () => import("./pages/layout/layout") },
  { path: "/", redirect: "/view-port" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
