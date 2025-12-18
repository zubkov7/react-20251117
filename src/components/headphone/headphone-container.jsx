import { Headphone } from "./headphone";
import {
  useAddReviewMutation,
  useGetHeadphoneByIdQuery,
} from "../../redux/services/api";
import { AuthContext } from "../auth-context";
import { use } from "react";

export const HeadphoneContainer = ({ id }) => {
  // const { data } = useGetHeadphonesQuery(undefined, {
  //   selectFromResult: (result) => ({
  //     ...result,
  //     data: data.find(({ id: headphoneId }) => id === headphoneId),
  //   }),
  // });
  const { auth } = use(AuthContext);
  const { id: userId } = auth;

  console.log(userId, "userId");

  const { data, isError, isLoading } = useGetHeadphoneByIdQuery(id);
  const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation();

  const handleAddReview = (review) =>
    addReview({ headphoneId: id, review: { ...review, user: userId } });

  if (isLoading) {
    return "loading...";
  }

  if (isError) {
    return "error...";
  }

  const { name, brand, reviews, codecs } = data || {};

  return (
    <Headphone
      name={name}
      brand={brand}
      reviewsIds={reviews}
      codecsIds={codecs}
      id={id}
      addReview={handleAddReview}
      isAddReviewLoading={isAddReviewLoading}
    />
  );
};
