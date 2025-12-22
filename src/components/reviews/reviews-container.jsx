import {
  useAddReviewMutation,
  useGetReviewsByHeadphoneIdQuery,
  useGetUsersQuery,
} from "../../redux/services/api/api";
import { AuthContext } from "../auth-context";
import { Reviews } from "./reviews";
import { useCallback, useContext } from "react";

export const ReviewsContainer = ({ headphoneId }) => {
  const { auth } = useContext(AuthContext);

  const { data, isFetching: isGetReviewsFetching } =
    useGetReviewsByHeadphoneIdQuery(headphoneId);

  useGetUsersQuery();

  const [addReview, { isLoading: isAddReviewFetching }] =
    useAddReviewMutation();

  const handleAddReview = useCallback(
    (review) => {
      addReview({ headphoneId, review: { ...review, user: auth?.id } });
    },
    [addReview, auth?.id, headphoneId]
  );

  if (isGetReviewsFetching || isAddReviewFetching) {
    return "...loading";
  }

  if (!data.length) {
    return null;
  }

  return (
    <Reviews
      reviews={data}
      onAddReview={handleAddReview}
      isSubmitButtonDisabled={isAddReviewFetching}
    />
  );
};
