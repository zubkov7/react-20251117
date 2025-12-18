import { useSelector } from "react-redux";
import { useRequest } from "../../redux/hooks/use-request";
import { getUsers } from "../../redux/entities/users/get-users";
import { ReviewContainer } from "../review/review-container";
import { selectTotalUsers } from "../../redux/entities/users/slice";
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../redux/constants";

export const Reviews = ({ reviewsIds }) => {
  const users = useSelector(selectTotalUsers);
  const requestStatus = useRequest(getUsers);

  if (requestStatus === REQUEST_STATUS_PENDING || !users) {
    return "loading...";
  }

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return "ERROR";
  }

  return (
    <div>
      <h3>Reviews</h3>
      {reviewsIds?.map((reviewId) => (
        <li key={reviewId}>
          <ReviewContainer id={reviewId} />
        </li>
      ))}
    </div>
  );
};
