import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./item";
import filterReducer from "./filter";
import cartReducer from "./cart";

const store = configureStore({
  reducer: {
    item: itemReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});

export default store;
