import React from "react";
import cn from "classnames";
import styles from "./CartItem.module.scss";

export function CartItem({ onRemove, image, title, price, id }) {
  return (
    <>
      <div className={cn(styles["cartItem"], "d-flex align-center mb-20")}>
        <img
          className="mr-20 mb-10"
          width={60}
          height={60}
          src={image}
          alt="ked"
        />
        <div className="mr-15">
          <p className="mb-5">{title}</p>
          <b>{price} Br.</b>
        </div>
        <img
          className={cn(styles["removeBtn"])}
          src="/img/btn-remove.svg"
          alt="remove"
          onClick={() => onRemove(id)}
        />
      </div>
    </>
  );
}

export default CartItem;
