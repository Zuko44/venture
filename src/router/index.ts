import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../pages/MainPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/authorization",
      name: "authorization",
      component: MainPage,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../pages/AboutView.vue"),
    },
    {
      path: "/registr",
      name: "registr",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/RegistrationForm.vue"),
    },
    {
      path: "/recovery",
      name: "recovery",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/RecoveryPassword.vue"),
    },
    {
      path: "/cabinet",
      name: "cabinet",
      component: () => import("../components/UserCabinet.vue"),
    },
  ],
});

export default router;
