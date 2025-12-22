import { useGetHeadphonesQuery } from "../../redux/services/api/api";
import { HeadphonesTabs } from "./headphones-tabs";

export const HeadphonesTabsContainer = () => {
  const { data, isLoading, isError } = useGetHeadphonesQuery();

  if (isLoading) {
    return "loading ...";
  }

  if (isError) {
    return "error";
  }

  if (!data.length) {
    return null;
  }

  return <HeadphonesTabs headphones={data} />;
};
