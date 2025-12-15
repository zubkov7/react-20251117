import { Tabs } from "../components/tabs/tabs";
import { useDispatch, useSelector } from "react-redux";
import {
  selectHeadphonesIds,
  selectRequestStatus,
} from "../redux/entities/headphones/slice";
import { HeadphoneTabContainer } from "../components/headphone-tab/headphone-tab-container";
import { Outlet } from "react-router";
import { useEffect, useReducer } from "react";
import { getHeadphones } from "../redux/entities/headphones/get-headphones";
import { useRequest } from "../redux/hooks/use-request";

export const HeadphonesPage = () => {
  // const dispatch = useDispatch();
  const headphonesIds = useSelector(selectHeadphonesIds);
  // const requestStatus = useSelector(selectRequestStatus);

  // useEffect(() => {
  //   dispatch(getHeadphones());
  // }, [dispatch]);

  const { requestStatus } = useRequest(getHeadphones);

  if (requestStatus === "pending" || requestStatus === "idle") {
    return "loading...";
  }

  if (requestStatus === "rejected" || !headphonesIds.length) {
    return "error";
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
