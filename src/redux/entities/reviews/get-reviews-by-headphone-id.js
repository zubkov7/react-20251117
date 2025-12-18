import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviewsByHeadphoneId = createAsyncThunk(
  "reviews/getReviewsByHeadphoneId",
  async (headphoneId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?productId=${headphoneId}`
    );

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("reviews/getReviewsByHeadphoneId");
      return;
    }

    return result;
  }
);
