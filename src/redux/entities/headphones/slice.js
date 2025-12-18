import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getHeadphones } from "./get-headphones";

const entityAdapter = createEntityAdapter();

export const headphonesSlice = createSlice({
  name: "headphones",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getHeadphones.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});

const selectHeadphonesSlice = (state) => state.headphones;

export const {
  selectById: selectHeadphoneById,
  selectIds: selectHeadphonesIds,
  selectTotal: selectHeadphonesTotal,
} = entityAdapter.getSelectors(selectHeadphonesSlice);
