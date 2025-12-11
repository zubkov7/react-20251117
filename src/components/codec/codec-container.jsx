import { useSelector } from "react-redux";
import { Codec } from "./codec";
import { selectCodecById } from "../../redux/entities/codecs/slice";

export const CodecContainer = ({ id }) => {
  const codec = useSelector((state) => selectCodecById(state, id));

  if (!codec?.type) {
    return null;
  }

  return <Codec type={codec.type} />;
};
