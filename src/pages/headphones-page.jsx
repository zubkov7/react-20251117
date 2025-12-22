import { Outlet } from "react-router";
import { HeadphonesTabsContainer } from "../components/headphones-tabs/headphones-tabs-container";

export const HeadphonesPage = () => {
  return (
    <div>
      <HeadphonesTabsContainer />
      <Outlet />
    </div>
  );
};
