import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import NotFound from "../components/404.vue"
import Platform from "../components/Platform.vue";
import Home from "../components/Home.vue";

const routes: Array <RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component: Home,
    props: true,
  },

  {
    name: 'platform',
    path: '/platform',
    component: Platform,
    props: true,
    meta: { title: 'model' }
  },
  {
    name: '404',
    path: '/404',
    component: NotFound
  },
];

let history = createWebHistory();
const router = createRouter({
  history,
  routes,
});
// router.beforeEach((to, _from, next) => {
//   if (to.meta.title) {
//     document.title = `IEEE ITSC 2022 | ${to.meta.title}`;
//   }
//   next();
// });

export default router;