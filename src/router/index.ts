import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../pages/MainPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
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
      path: "/edit/:id",
      name: "editProduct",
      props: (route) => ({ id: parseInt(route.params.id.toString()) }),
      component: () => import("../components/EditProducts.vue"),
    },
  ],
});

export default router;
