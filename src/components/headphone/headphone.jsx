import { Counter } from "../counter/counter";
import { Reviews } from "../reviews/reviews";

export const HeadphoneListItem = ({ headphone }) => {
  const { name, reviews, codecs } = headphone;

  if (!name) {
    return null;
  }

  return (
    <li>
      <h2>{name}</h2>
      {reviews.length ? (
        <>
          <h3>Reviews</h3>
          <Reviews reviews={reviews} />
        </>
      ) : null}

      <h3>Codecs</h3>
      <ul>
        {codecs.map((codec) => (
          <li key={codec}>{codec}</li>
        ))}
      </ul>

      <Counter />
    </li>
  );
};
