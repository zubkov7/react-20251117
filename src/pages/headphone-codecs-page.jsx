import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../redux/entities/headphones/slice";
import { Codecs } from "../components/codecs/codecs";

export const HeadphoneCodecsPage = () => {
  const { headphoneId } = useParams();

  const headphone = useSelector((state) =>
    selectHeadphoneById(state, headphoneId)
  );

  const { codecs } = headphone || {};

  return codecs.length ? (
    <Codecs codecsIds={codecs} />
  ) : (
    <div>empty codecs</div>
  );
};
