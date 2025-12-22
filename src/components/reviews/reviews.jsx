import { use } from "react";
import { ReviewForm } from "../review-form/review-form";
import { Review } from "../review/review";
import { AuthContext } from "../auth-context";

export const Reviews = ({ reviews, onAddReview, isSubmitButtonDisabled }) => {
  const { auth } = use(AuthContext);

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(({ id, text, user }) => (
          <li key={id}>
            <Review text={text} userId={user} />
          </li>
        ))}
      </ul>
      {auth.isAuthorized && (
        <ReviewForm
          onSubmit={onAddReview}
          isSubmitButtonDisabled={isSubmitButtonDisabled}
        />
      )}
    </div>
  );
};
