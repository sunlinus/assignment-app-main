import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchItem = createAsyncThunk("get/itemList", async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data;
});

const itemSlice = createSlice({
  name: "item",
  initialState: {
    item: [],
    status: "idle",
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(
      (fetchItem.pending,
      (state) => {
        state.status = "loading";
      })
    );

    builder.addCase(fetchItem.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.item = action.payload;
    });

    builder.addCase(fetchItem.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default itemSlice.reducer;
