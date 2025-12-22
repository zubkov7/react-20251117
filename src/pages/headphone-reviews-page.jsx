import { useParams } from "react-router";
import { ReviewsContainer } from "../components/reviews/reviews-container";
import { use } from "react";
import { AuthContext } from "../components/auth-context";

export const HeadphoneReviewsPage = () => {
  const { headphoneId } = useParams();

  return <ReviewsContainer headphoneId={headphoneId} />;
};
