import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ResumeView from "../views/ResumeView.vue";
import AllProjectsView from "../views/AllProjectsView.vue";
import ProjectView from "../views/ProjectView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/resume",
    name: "resume",
    component: ResumeView,
  },
  {
    path: "/projects",
    name: "projects",
    component: AllProjectsView,
  },
  {
    path: "/projects/:id",
    name: "project",
    component: ProjectView,
  },
 
];

/* const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { y: 0 };
    }
  }
}); */

const router = createRouter({
  scrollBehavior(to, from, SavedPosition) {
    if (to.hash) {
      const el = window.location.href.split("#")[1];
      if (el.length) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        document.getElementById(el).scrollIntoView({ behavior: "smooth" });
      }
    } else if (SavedPosition) {
      return SavedPosition;
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      document.getElementById("app").scrollIntoView({ behavior: "smooth" });
    }
  },
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

//redirect to home if route not found
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
