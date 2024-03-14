import { Login } from "../page/login";
import { Profile } from "../page/profile";
import { CreateProduct } from "../page/create-product";

export const userRoutes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/createProduct",
    component: CreateProduct,
  },
];
