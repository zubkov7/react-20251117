import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/slice";
import { Headphone } from "./headphone";

export const HeadphoneContainer = ({ id }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  const { name, brand, reviews, codecs } = headphone || {};

  return (
    <Headphone
      name={name}
      brand={brand}
      reviewsIds={reviews}
      codecsIds={codecs}
      id={id}
    />
  );
};
