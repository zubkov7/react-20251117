import { Codec } from "../codec/codec";

export const Codecs = ({ codecs }) => {
  return (
    <div>
      <h3>Codecs</h3>
      <ul>
        {codecs.map(({ id, type }) => (
          <li key={id}>
            <Codec type={type} />
          </li>
        ))}
      </ul>
    </div>
  );
};
