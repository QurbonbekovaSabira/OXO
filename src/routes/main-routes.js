import { Home } from "../page/home";
import { SinglePage } from "../page/single-page";
import { Filter } from "../page/filter";
import { LikesPage } from "../page/likes-page/likes-page";
export const mainRoutes = [
  {
    component: Home,
  },
  {
    path: "/product/:id",
    component: SinglePage,
  },
  {
    path: "/likes",
    component: LikesPage,
  },
  {
    path: "/brand/:name",
    component: Filter,
  },
];
