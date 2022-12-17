import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PeopleView from "../views/PeopleView.vue";
import PeopleList from "@/components/PeopleList/PeopleList.vue";
import PeopleDetail from "@/components/PeopleDetail/PeopleDetail.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/people",
    name: "people",
    component: PeopleView,
    children: [
      {
        path: "",
        name: "people-list",
        component: PeopleList,
      },
      {
        path: ":id",
        name: "people-detail",
        component: PeopleDetail,
      },
    ],
  },
  {
    path: "/movies",
    name: "movies",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MovieView.vue"),
  },
  {
    path: "/",
    redirect: "/people",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
