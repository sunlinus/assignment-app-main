import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "sort",
  initialState: {
    search: "",
    sortType: "none",
  },
  reducers: {
    change(state, action) {
      state.search = action.payload;
    },
    ascending(state) {
      state.sortType = "ASCEND";
    },
    descending(state) {
      state.sortType = "DESCEND";
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
