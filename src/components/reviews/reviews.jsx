import { useSelector } from "react-redux";
import { useRequest } from "../../redux/hooks/use-request";
import { getUsers } from "../../redux/entities/users/get-users";
import { ReviewContainer } from "../review/review-container";
import { selectTotalUsers } from "../../redux/entities/users/slice";
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../redux/constants";
import { Review } from "../review/review";

export const Reviews = ({ reviews }) => {
  // const users = useSelector(selectTotalUsers);
  // const requestStatus = useRequest(getUsers);

  // if (requestStatus === REQUEST_STATUS_PENDING || !users) {
  //   return "loading...";
  // }

  // if (requestStatus === REQUEST_STATUS_REJECTED) {
  //   return "ERROR";
  // }

  return (
    <div>
      <h3>Reviews</h3>
      {reviews?.map(({ id, text, user }) => (
        <li key={id}>
          <Review text={text} userId={user} />
        </li>
      ))}
    </div>
  );
};
