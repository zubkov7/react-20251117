export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews?.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </div>
  );
};
