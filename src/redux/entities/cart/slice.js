import { createSlice, createSelector } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }) => {
      if (!state[payload]) {
        return state;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] <= 0) {
        delete state[payload];
      }
    },
  },
  selectors: {
    selectAmountByItemId: (state, id) => state[id],
    // selectCartItemsIds: (state) => Object.keys(state),
  },
});

const selectCartSlice = (state) => state[cartSlice.name];

// createSelector([selector1, selectore2, ...], (res1, res2, ...) => {});
export const selectCartItemsIds = createSelector(
  [selectCartSlice],
  (cartSlice) => Object.keys(cartSlice)
);

export const { selectAmountByItemId } = cartSlice.selectors;
export const { addToCart, removeFromCart } = cartSlice.actions;
