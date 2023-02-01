import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: true,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: initialState,
  reducers: {
    setIsDark(state, action) {
      state.isDark = action.payload;
    },
  },
});

export const darkModeActions = darkModeSlice.actions;
export default darkModeSlice;
