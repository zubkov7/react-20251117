import { CartItem } from "../cart-item/cart-item";

export const Cart = ({ itemsIds }) => {
  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {itemsIds.map((id) => (
          <li key={id}>
            <CartItem id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
