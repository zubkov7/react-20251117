import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectAmountByItemId,
} from "../../redux/entities/cart/slice";

export const useCount = (headphoneId) => {
  const dispatch = useDispatch();

  const amount =
    useSelector((state) => selectAmountByItemId(state, headphoneId)) || 0;

  const increment = useCallback(
    () => dispatch(addToCart(headphoneId)),
    [headphoneId, dispatch]
  );

  const decrement = useCallback(
    () => dispatch(removeFromCart(headphoneId)),
    [headphoneId, dispatch]
  );

  return {
    amount,
    increment,
    decrement,
  };
};
