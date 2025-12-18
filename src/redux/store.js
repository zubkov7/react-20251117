import { configureStore } from "@reduxjs/toolkit";
import { headphonesSlice } from "./entities/headphones/slice";
import { reviewsSlice } from "./entities/reviews/slice";
import { codecsSlice } from "./entities/codecs/slice";
import { usersSlice } from "./entities/users/slice";
import { cartSlice } from "./entities/cart/slice";
import { requestSlice } from "./entities/request/slice";

export const store = configureStore({
  reducer: {
    [headphonesSlice.name]: headphonesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [codecsSlice.name]: codecsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
  },
});
