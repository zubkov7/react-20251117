import { createAsyncThunk } from "@reduxjs/toolkit";

export const getHeadphones = createAsyncThunk(
  "headphones/getHeadphones",
  async (params, { dispatch, getState, rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/products");

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("empty result");
    }

    return result;
  }
);
