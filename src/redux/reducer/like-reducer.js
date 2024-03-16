import { loadState } from "../../lib/storage";
import { createSlice } from "@reduxjs/toolkit";
const initialState = loadState("like") || [];

const likeReduser = createSlice({
  name: "likeReduser",
  initialState,
  reducers: {
    add: (state, action) => {
      return [...state, action.payload];
    },
    deleteData: (state, action) => {
      const newLikes = state?.filter((item) => item.id !== action.payload.id);
      return newLikes;
    },
  },
});

export default likeReduser.reducer;

export const { add, deleteData } = likeReduser.actions;
