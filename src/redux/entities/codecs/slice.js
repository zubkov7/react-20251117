import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getCodecsByHeadphoneId } from "./get-codecs-by-headphone-id";

const entityAdapter = createEntityAdapter();

export const codecsSlice = createSlice({
  name: "codecs",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getCodecsByHeadphoneId.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    }),
});

const selectCodecsSlice = (state) => state.codecs;

export const { selectById: selectCodecById, selectIds: selectCodecsIds } =
  entityAdapter.getSelectors(selectCodecsSlice);
