import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/user-reducer";
import { saveState } from "../lib/storage";
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

store.subscribe(() => {
  saveState("user", store.getState().user);
});
