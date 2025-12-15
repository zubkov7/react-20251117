import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectHeadphoneById } from "./slice";

export const getHeadphoneById = createAsyncThunk(
  "headphones/getHeadphoneById",
  async (headphoneId, { dispatch, getState, rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/product/${headphoneId}`
    );

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("empty result");
    }

    return result;
  },
  {
    condition: (headphoneId, { getState, dispatch }) => {
      return !selectHeadphoneById(getState(), headphoneId);
    },
  }
);
