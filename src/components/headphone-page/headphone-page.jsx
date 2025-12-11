import { HeadphoneContainer } from "../headphone/headphone-container";
import { useParams } from "react-router";

export const HeadphonePage = () => {
  const { headphoneId } = useParams();

  return <HeadphoneContainer id={headphoneId} />;
};
