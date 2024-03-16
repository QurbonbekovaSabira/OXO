import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/user-reducer";
import { saveState } from "../lib/storage";
import likeReducer from "./reducer/like-reducer";
export const store = configureStore({
  reducer: {
    user: userReducer,
    like: likeReducer,
  },
});

store.subscribe(() => {
  saveState("user", store.getState().user);
  saveState("like", store.getState().like);
});
