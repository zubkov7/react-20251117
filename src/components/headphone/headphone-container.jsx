import { Headphone } from "./headphone";
import { useGetHeadphonesQuery } from "../../redux/services/api/api";

export const HeadphoneContainer = ({ id }) => {
  const { data: headphone } = useGetHeadphonesQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id: headphoneId }) => headphoneId === id),
    }),
  });

  if (!headphone) {
    return null;
  }

  const { name, brand } = headphone;

  return <Headphone name={name} brand={brand} id={id} />;
};
