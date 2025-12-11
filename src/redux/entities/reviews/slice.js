import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../constants/normalized-mock";

const initialState = {
  ids: normalizedReviews.map(({ id }) => id),
  entities: normalizedReviews.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
  },
});

export const { selectReviewById } = reviewsSlice.selectors;
