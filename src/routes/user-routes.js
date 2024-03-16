import { Profile } from "../page/profile";
import { CreateProduct } from "../page/create-product";
import { UserProfile } from "../page/user-profile/user-profile";
export const userRoutes = [
  {
    path: "/user/edit",
    component: Profile,
  },
  {
    path: "/user/create",
    component: CreateProduct,
  },
  {
    component: UserProfile,
  },
];
