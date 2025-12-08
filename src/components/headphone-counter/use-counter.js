import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  selectAmountById,
} from "../../redux/entities/cart/slice";

export const useCount = ({ min = 0, max = 5, id } = {}) => {
  // const [value, setValue] = useState(min);

  // const increment = useCallback(
  //   () => setValue((prevValue) => Math.min(prevValue + 1, max)),
  //   [max]
  // );

  // const decrement = useCallback(
  //   () => setValue((prevValue) => Math.max(prevValue - 1, min)),
  //   [min]
  // );

  const dispatch = useDispatch();

  const amount = useSelector((state) => selectAmountById(state, id));

  const increment = () => dispatch(addToCart(id));
  const decrement = () => dispatch(deleteFromCart(id));

  return {
    value: amount || 0,
    increment,
    decrement,
  };
};
