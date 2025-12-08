import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;

      state[payload] = (state[payload] || 0) + 1;
    },
    deleteFromCart: (state, { payload }) => {
      if (!state[payload]) {
        return state;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] === 0) {
        delete state[payload];
      }
    },
  },
  selectors: {
    selectCartItems: (state) =>
      Object.keys(state).reduce((acc, id) => {
        acc.push({ id, amount: state[id] });

        return acc;
      }, []),
    selectAmountById: (state, id) => state[id],
  },
});

export const { selectCartItems, selectAmountById } = cartSlice.selectors;

export const { addToCart, deleteFromCart } = cartSlice.actions; // action creator

console.log("addToCart", addToCart);

// action - { type: 'addToCart', { payload: 'id' }}
// action creator - () => ({ type: 'addToCart', { payload: 'id' }})
