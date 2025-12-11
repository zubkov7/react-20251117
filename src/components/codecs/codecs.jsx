import { CodecContainer } from "../codec/codec-container";

export const Codecs = ({ codecsIds }) => {
  return (
    <div>
      <h3>Codecs</h3>
      {codecsIds?.map((codecId) => (
        <li key={codecId}>
          <CodecContainer id={codecId} />
        </li>
      ))}
    </div>
  );
};
