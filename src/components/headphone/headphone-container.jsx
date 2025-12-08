import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphone/slice";
import { Headphone } from "./headphone";

export const HeadphoneContainer = ({ headphoneId }) => {
  const headphone = useSelector((state) => {
    console.log(state);

    return selectHeadphoneById(state, headphoneId);
  });

  if (!headphone) {
    return null;
  }

  const { name, brand, reviews, codecs } = headphone;

  return (
    <Headphone
      name={name}
      brand={brand}
      reviews={reviews}
      codecs={codecs}
      id={headphoneId}
    />
  );
};
