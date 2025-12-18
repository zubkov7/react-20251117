import { useParams } from "react-router";
import { selectHeadphoneById } from "../redux/entities/headphones/slice";
import { useSelector } from "react-redux";
import { Reviews } from "../components/reviews/reviews";
import { getUsers } from "../redux/entities/users/get-users";
import { useRequest } from "../redux/hooks/use-request";
import { getReviewsByHeadphoneId } from "../redux/entities/reviews/get-reviews-by-headphone-id";
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../redux/constants";

export const HeadphoneReviewsPage = () => {
  const { headphoneId } = useParams();

  const usersRequestStatus = useRequest(getUsers);
  const reviewsRequestStatus = useRequest(getReviewsByHeadphoneId, headphoneId);

  const isLoading =
    usersRequestStatus === REQUEST_STATUS_PENDING ||
    reviewsRequestStatus === REQUEST_STATUS_PENDING;

  const isError =
    usersRequestStatus === REQUEST_STATUS_REJECTED ||
    reviewsRequestStatus === REQUEST_STATUS_REJECTED;

  const headphone = useSelector((state) =>
    selectHeadphoneById(state, headphoneId)
  );

  const { reviews } = headphone || {};

  if (isLoading) {
    return "loading...";
  }

  if (isError) {
    return "ERROR";
  }

  return reviews.length ? (
    <Reviews reviewsIds={reviews} />
  ) : (
    <div>empty review</div>
  );
};
