export const Codecs = ({ codecs }) => {
  return (
    <div>
      <h3>Codecs</h3>
      <ul>
        {codecs?.map((codec) => (
          <li key={codec}>{codec}</li>
        ))}
      </ul>
    </div>
  );
};
