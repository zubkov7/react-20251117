import { useParams } from "react-router";
import { HeadphoneContainer } from "../components/headphone/headphone-container";

export const HeadphonePage = () => {
  const { headphoneId } = useParams();

  return <HeadphoneContainer id={headphoneId} />;
};
