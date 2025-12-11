import { ReviewContainer } from "../review/review-container";

export const Reviews = ({ reviewsIds }) => {
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
