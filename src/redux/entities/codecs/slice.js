import { createSlice } from "@reduxjs/toolkit";
import { normalizedCodecs } from "../../../constants/normalized-mock";

const initialState = {
  ids: normalizedCodecs.map(({ id }) => id),
  entities: normalizedCodecs.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
};

export const codecsSlice = createSlice({
  name: "codecs",
  initialState,
  selectors: { selectCodecById: (state, id) => state.entities[id] },
});

export const { selectCodecById } = codecsSlice.selectors;
