import { useContext } from "react";
import AppContext from "../context";

export const useCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, i) => {
    return sum + i.price;
  }, 0);

  return { cartItems, setCartItems, totalPrice };
};
