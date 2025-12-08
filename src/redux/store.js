import { configureStore } from "@reduxjs/toolkit";
import { headphoneSlice } from "./entities/headphone/slice";
import { cartSlice } from "./entities/cart/slice";

export const store = configureStore({
  reducer: {
    [headphoneSlice.name]: headphoneSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
});
