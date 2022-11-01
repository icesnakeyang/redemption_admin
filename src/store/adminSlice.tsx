import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    loginName: null,
  },
  reducers: {
    saveLoginName: (state: any, action: any) => {
      state.loginName = action.payload;
    },
    clearAdmin: (state: any) => {
      state.loginName = null;
    },
  },
});

export const { saveLoginName, clearAdmin } = adminSlice.actions;

export default adminSlice.reducer;
