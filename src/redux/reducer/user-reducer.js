import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../lib/storage";
const initialState = loadState("user") || {
  user: [],
  likes: [],
  product: [],
};
 const userReduser = createSlice({
  name: "userReduser",
  initialState,
  reducers: {
    add: (state, action) => {
      return { ...state, user: [action.payload] };
    },
    delete: (state, action) => {},
  },
});

export default userReduser.reducer;

export const { add } = userReduser.actions;
