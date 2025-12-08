import { createSlice } from "@reduxjs/toolkit";
import { normalizedHeadphones } from "../../../constants/normalized-mock";

const initialState = {
  ids: normalizedHeadphones.map(({ id }) => id),
  entities: normalizedHeadphones.reduce((acc, headphone) => {
    acc[headphone.id] = headphone;

    return acc;
  }, {}),
};

console.log(initialState);

export const headphoneSlice = createSlice({
  name: "headphones",
  initialState,
  selectors: {
    selectHeadphoneById: (state, id) => {
      console.log("inside slice", state);

      return state.entities[id];
    },
    selectHeadphonesIds: (state) => state.ids,
  },
});

// export const selectHeadphoneSlice = (state) => state[headphoneSlice.name];
// export const selectHeadphoneById = (state, id) =>
//   selectHeadphoneSlice(state).entities[id];

export const { selectHeadphoneById, selectHeadphonesIds } =
  headphoneSlice.selectors;
