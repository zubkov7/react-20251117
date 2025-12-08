import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphone/slice";
import { Button } from "../button/button";

export const HeadphoneTab = ({ headphoneId, ...props }) => {
  const headphone = useSelector((state) =>
    selectHeadphoneById(state, headphoneId)
  );

  if (!headphone) {
    return null;
  }

  return <Button {...props} title={headphone.name} />;
};
