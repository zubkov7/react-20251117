import { Tabs } from "../components/tabs/tabs";
import { useSelector } from "react-redux";
import { selectHeadphonesIds } from "../redux/entities/headphones/slice";
import { HeadphoneTabContainer } from "../components/headphone-tab/headphone-tab-container";
import { Outlet } from "react-router";
import { getHeadphones } from "../redux/entities/headphones/get-headphones";
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../redux/constants";
import { useRequest } from "../redux/hooks/use-request";

export const HeadphonesPage = () => {
  const headphonesIds = useSelector(selectHeadphonesIds);
  const requestStatus = useRequest(getHeadphones);

  if (requestStatus === REQUEST_STATUS_PENDING || !headphonesIds?.length) {
    return "loading...";
  }

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return "ERROR";
  }

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
