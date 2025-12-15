import { Tabs } from "../components/tabs/tabs";
import { useSelector } from "react-redux";
import { selectHeadphonesIds } from "../redux/entities/headphones/slice";
import { HeadphoneTabContainer } from "../components/headphone-tab/headphone-tab-container";
import { Outlet } from "react-router";

export const HeadphonesPage = () => {
  const headphonesIds = useSelector(selectHeadphonesIds);

  return (
    <div>
      <h1>Headphones Page</h1>

      <Tabs>
        {headphonesIds.map((id) => (
          <HeadphoneTabContainer key={id} id={id} />
        ))}
      </Tabs>

      <Outlet />
    </div>
  );
};
