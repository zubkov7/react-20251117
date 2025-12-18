import { Tabs } from "../components/tabs/tabs";

import { useGetHeadphonesQuery } from "../redux/services/api";
import { TabLink } from "../components/tab-link/tab-link";
import { Outlet } from "react-router";

export const HeadphonesPage = () => {
  const { data, isError, isFetching, isLoading, refetch } =
    useGetHeadphonesQuery();

  if (isLoading) {
    return "loading...";
  }

  if (isError) {
    return "ERROR";
  }

  return (
    <div>
      <h1>Headphones Page</h1>

      <button onClick={refetch}>refetch</button>

      <Tabs>
        {data.map(({ id, name }) => (
          <TabLink key={id} to={`/headphones/${id}`}>
            {name}
          </TabLink>
        ))}
      </Tabs>

      <Outlet />
    </div>
  );
};
