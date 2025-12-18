import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../redux/entities/headphones/slice";
import { Codecs } from "../components/codecs/codecs";
import { useRequest } from "../redux/hooks/use-request";
import { getCodecsByHeadphoneId } from "../redux/entities/codecs/get-codecs-by-headphone-id";
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../redux/constants";

export const HeadphoneCodecsPage = () => {
  const { headphoneId } = useParams();

  const headphone = useSelector((state) =>
    selectHeadphoneById(state, headphoneId)
  );

  const { codecs } = headphone || {};

  const requestStatus = useRequest(getCodecsByHeadphoneId, headphoneId);

  if (requestStatus === REQUEST_STATUS_PENDING) {
    return "loading...";
  }

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return "ERROR";
  }

  return codecs.length ? (
    <Codecs codecsIds={codecs} />
  ) : (
    <div>empty codecs</div>
  );
};
