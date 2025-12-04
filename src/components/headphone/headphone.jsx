import { Codecs } from "../codecs/codecs";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import { HeadphoneCounter } from "../headphone-counter/headphone-counter";

export const Headphone = ({ name, brand, reviews, codecs }) => {
  if (!name) {
    return null;
  }

  return (
    <section>
      <h2>{name}</h2>
      <h3>Brand - {brand}</h3>
      {reviews.length ? <Reviews reviews={reviews} /> : <div>empty review</div>}
      {codecs.length ? <Codecs codecs={codecs} /> : <div>empty codecs</div>}
      <HeadphoneCounter />
      <ReviewForm />
    </section>
  );
};
