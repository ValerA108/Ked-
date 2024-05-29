import React from "react";
import cn from "classnames";
import styles from "./Drawer.module.scss";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";
import Info from "../Info/Info";
import { useState } from "react";
import axios from "axios";
import { useCart } from "../../hooks/useCart";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onRemove, onClickCart, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const nds = (totalPrice * 20) / 100;

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post("https://ked-api.onrender.com/orders", {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete("https://ked-api.onrender.com/cart/" + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert("Ошибка при создании заказа! ");
    }
    setIsLoading(false);
  };

  return (
    <div
      className={cn(
        `${styles["overlay"]} ${opened ? styles["overlayVisible"] : styles[""]}`
      )}
    >
      <div className={cn(styles["drawer"])}>
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            className={cn(styles["removeBtn"], "cu-p")}
            src="/img/btn-remove.svg"
            alt="remove"
            onClick={onClickCart}
          />
        </h2>

        {items.length > 0 ? (
          <div className={cn(styles["items"], "d-flex flex-column flex")}>
            <div className={cn(styles["items"])}>
              {items.map((obj) => {
                return (
                  <CartItem
                    key={obj.id}
                    image={obj.image}
                    title={obj.title}
                    price={obj.price}
                    onRemove={() => onRemove(obj.id)}
                  />
                );
              })}
            </div>
            <div className={cn(styles["cartTotalBlock"])}>
              <ul>
                <li className="d-flex">
                  <span>Цена:</span>
                  <div></div>
                  <b>{totalPrice} Br.</b>
                </li>
                <li className="d-flex">
                  <span>НДС 20%</span>
                  <div></div>
                  <b>{nds} Br.</b>
                </li>
                <li className="d-flex">
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice + nds} Br.</b>
                </li>
              </ul>
              <Button disabled={isLoading} onClick={onClickOrder}>
                Оформить заказ
              </Button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderComplete
                ? `Ваш заказ №${orderId} передан в обработку`
                : "Добавьте хотя бы одну пару кед, чтобы сделать заказ."
            }
            image={
              isOrderComplete
                ? "/img/complete-order.jpg"
                : "/img/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
