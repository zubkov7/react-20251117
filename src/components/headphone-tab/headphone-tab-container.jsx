import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/slice";
import { TabLink } from "../tab-link/tab-link";
import { useGetHeadphonesQuery } from "../../redux/services/api";

export const HeadphoneTabContainer = ({ id }) => {
  const headhpone = useSelector((state) => selectHeadphoneById(state, id));

  // const { data } = useGetHeadphonesQuery(undefined, {
  //   selectFromResult: (result) => ({
  //     ...result,
  //     data: data.find(({ id: headphoneId }) => id === headphoneId),
  //   }),
  // });

  if (!headhpone) {
    return;
  }

  return <TabLink to={`/headphones/${id}`}>{headhpone.name}</TabLink>;
};
