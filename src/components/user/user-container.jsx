import { User } from "./user";
import { useGetUsersQuery } from "../../redux/services/api/api";

export const UserContainer = ({ id }) => {
  const { data } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id: userId }) => userId === id),
    }),
  });

  if (!data?.name) {
    return null;
  }

  return <User name={data.name} />;
};
