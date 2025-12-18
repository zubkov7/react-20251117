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
import { useGetReviewsByHeadphoneIdQuery } from "../redux/services/api";

export const HeadphoneReviewsPage = () => {
  const { headphoneId } = useParams();

  const usersRequestStatus = useRequest(getUsers);
  const {
    data,
    isLoading: isLoadingReviews,
    isError: isErrorReviews,
    isFetching,
  } = useGetReviewsByHeadphoneIdQuery(headphoneId);

  const isLoading =
    usersRequestStatus === REQUEST_STATUS_PENDING || isLoadingReviews;

  const isError =
    usersRequestStatus === REQUEST_STATUS_REJECTED || isErrorReviews;

  if (isFetching) {
    return "loading...";
  }

  if (isError) {
    return "ERROR";
  }

  return data?.length ? <Reviews reviews={data} /> : <div>empty review</div>;
};
