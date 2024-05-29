import cn from "classnames";
import styles from "./CartEmpty.module.scss";
import Button from "../Button/Button";

function CartEmpty({ onClickCart }) {
  return (
    <div
      className={cn(
        styles["cartEmpty"],
        "d-flex align-center justify-center flex-column flex"
      )}
    >
      <img
        className="mb-20"
        width={120}
        height={120}
        src="/img/empty-cart.jpg"
        alt="empty cart"
      />
      <h2>Корзина пустая</h2>
      <p className="opacity-6">Добавьте пару кед, чтобы сделать заказ</p>
      <Button onClick={onClickCart}>Вернуться назад</Button>
    </div>
  );
}
export default CartEmpty;
