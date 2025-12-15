import { useParams } from "react-router";
import { selectHeadphoneById } from "../redux/entities/headphones/slice";
import { useSelector } from "react-redux";
import { Reviews } from "../components/reviews/reviews";

export const HeadphoneReviewsPage = () => {
  const { headphoneId } = useParams();

  const headphone = useSelector((state) =>
    selectHeadphoneById(state, headphoneId)
  );

  const { reviews } = headphone || {};

  return reviews.length ? (
    <Reviews reviewsIds={reviews} />
  ) : (
    <div>empty review</div>
  );
};
