import { Profile } from "../page/profile";
import { CreateProduct } from "../page/create-product";
import { UserProfile } from "../page/user-profile/user-profile";
import { Announcement } from "../page/announcement/announcement";
import { EditUserProfile } from "../page/edit-user-profile";
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
  {
    path: "/user/:name",
    component: Announcement,
  },
  {
    path: "/user/profile/edit",
    component: EditUserProfile,
  },
];
