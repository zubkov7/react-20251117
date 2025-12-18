import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCodecsByHeadphoneId = createAsyncThunk(
  "codecs/getCodecsByHeadphoneId",
  async (headphoneId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/codecs?productId=${headphoneId}`
    );

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("codecs/getCodecsByHeadphoneId");
      return;
    }

    return result;
  }
);
