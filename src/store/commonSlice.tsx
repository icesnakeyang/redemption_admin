import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
  name: "common",
  initialState: {
    refresh: 0,
  },
  reducers: {
    doRefresh: (state: any) => {
      state.refresh += 1;
    },
    clearRefresh: (state: any) => {
      state.refresh = 0;
    },
  },
});

export const { doRefresh, clearRefresh } = commonSlice.actions;

export default commonSlice.reducer;
