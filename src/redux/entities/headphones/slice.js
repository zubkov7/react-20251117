import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { normalizedHeadphones } from "../../../constants/normalized-mock";
import { getHeadphones } from "./get-headphones";

// const initialState = {
//   // ids: normalizedHeadphones.map(({ id }) => id),
//   // entities: normalizedHeadphones.reduce((acc, item) => {
//   //   acc[item.id] = item;

//   //   return acc;
//   // }, {}),
//   ids: [],
//   entities: {},
//   requestStatus: "idle",
// };

const entityAdapter = createEntityAdapter();

export const headphonesSlice = createSlice({
  name: "headphones",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectHeadphonesIds: (state) => state.ids,
    selectHeadphoneById: (state, id) => state.entities[id],
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getHeadphones.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getHeadphones.rejected, (state) => {
        state.requestStatus = "rejected";
      })
      .addCase(getHeadphones.fulfilled, (state, { payload }) => {
        state.requestStatus = "fulfilled";

        entityAdapter.setAll(state, payload);

        // state.ids = payload.map(({ id }) => id);
        // state.entities = payload.reduce((acc, item) => {
        //   acc[item.id] = item;

        //   return acc;
        // }, {});
      }),
});

const selectHeadphonesSlice = (state) => state[headphonesSlice.name];

export const { selectById } = entityAdapter.getSelectors(selectHeadphonesSlice);

export const { selectHeadphonesIds, selectHeadphoneById, selectRequestStatus } =
  headphonesSlice.selectors;
