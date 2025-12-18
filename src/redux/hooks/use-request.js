import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStatus } from "../entities/request/slice";

export const useRequest = (thunk, payload) => {
  const dispatch = useDispatch();

  const [request, setRequest] = useState(null);

  const requestStatus = useSelector((state) =>
    selectStatus(state, request?.requestId)
  );

  useEffect(() => {
    const request = dispatch(thunk(payload));
    setRequest(request);

    return () => {
      request.abort();
      setRequest(null);
    };
  }, [thunk, payload, dispatch]);

  return requestStatus;
};
