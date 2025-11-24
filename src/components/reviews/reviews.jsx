export const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((text) => (
        <li key={text}>{text}</li>
      ))}
    </ul>
  );
};
