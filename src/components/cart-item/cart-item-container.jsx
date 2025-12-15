import { useSelector } from "react-redux";
import { selectAmountByItemId } from "../../redux/entities/cart/slice";
import { selectHeadphoneById } from "../../redux/entities/headphones/slice";
import { CartItem } from "./cart-item";

export const CartItemContainer = ({ id }) => {
  const amount = useSelector((state) => selectAmountByItemId(state, id));
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  if (!headphone) {
    return null;
  }

  return <CartItem amount={amount} headphoneName={headphone.name} />;
};
