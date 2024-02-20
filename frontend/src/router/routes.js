import PublicLayout from "../layouts/PublicLayout.vue";
import HomeView from "../views/public/HomeView.vue";
import { ROUTE_NAMES } from "./routeNames";
export const routes = [
  {
    path: "/",
    component: PublicLayout,
    children: [
      {
        path: "",
        component: HomeView,
        name: ROUTE_NAMES.homePage,
      },
    ],
  },
];
