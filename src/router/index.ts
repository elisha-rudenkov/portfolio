import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ResumeView from "../views/ResumeView.vue";
import BenftProjectView from "../views/BenftProjectView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import PolyflowProjectView from "../views/PolyflowProjectView.vue";

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
    component: ProjectsView,

   
  },
  {
    path: "/projects/bnft",
    name: "bnft",
    component: BenftProjectView,
  },
  {
    path: "/projects/polyflow",
    name: "polyflow",
    component: PolyflowProjectView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
