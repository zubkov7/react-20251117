import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["Review"],
  endpoints: (builder) => ({
    getHeadphones: builder.query({ query: () => "/products" }),
    getHeadphoneById: builder.query({
      query: (headphoneId) => `/product/${headphoneId}`,
    }),
    getReviewsByHeadphoneId: builder.query({
      query: (headphoneId) => `/reviews?productId=${headphoneId}`,
      providesTags: (_, __, headphoneId) => [
        { type: "Review", id: headphoneId },
      ],
    }),
    addReview: builder.mutation({
      query: ({ headphoneId, review }) => ({
        url: `/review/${headphoneId}`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: (_, __, { headphoneId }) => [
        { type: "Review", id: headphoneId },
      ],
    }),
  }),
});

export const {
  useGetHeadphonesQuery,
  useLazyGetHeadphonesQuery,
  useGetHeadphoneByIdQuery,
  useLazyGetHeadphoneByIdQuery,
  useGetReviewsByHeadphoneIdQuery,
  useLazyGetReviewsByHeadphoneIdQuery,
  useAddReviewMutation,
} = api;
