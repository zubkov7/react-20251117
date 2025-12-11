import { Counter } from "../counter/counter";
import { useCount } from "./use-counter";

export const HeadphoneCounter = ({ headphoneId }) => {
  const { amount, increment, decrement } = useCount(headphoneId);

  return <Counter value={amount} increment={increment} decrement={decrement} />;
};
