import { Profile } from "../page/profile";
import { CreateProduct } from "../page/create-product";

export const userRoutes = [
  {
    component: Profile,
  },
  {
    path: "/user/create",
    component: CreateProduct,
  },
];
