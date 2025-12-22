import { useGetHeadphonesQuery } from "../../redux/services/api/api";
import { HeadphoneCounter } from "../headphone-counter/headphone-counter";

export const CartItem = ({ id }) => {
  const { data: headphone } = useGetHeadphonesQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id: headphoneId }) => headphoneId === id),
    }),
  });

  if (!headphone?.name) {
    return null;
  }

  return (
    <div>
      {headphone.name}
      <HeadphoneCounter id={id} />
    </div>
  );
};
