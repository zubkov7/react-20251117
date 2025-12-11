import { useSelector } from "react-redux";
import { Review } from "./review";
import { selectReviewById } from "../../redux/entities/reviews/slice";

export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));

  if (!review?.text) {
    return null;
  }

  return <Review text={review.text} userId={review.user} />;
};
