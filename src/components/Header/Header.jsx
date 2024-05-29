import React from "react";
import cn from "classnames";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center">
      <div className="d-flex align-center">
        <NavLink
          className={({ isActive }) =>
            cn(styles[""], { [styles.active]: isActive })
          }
          to="/"
        >
          <div className="d-flex align-center">
            <span className={cn(styles[""], "mr-5")}>HOME</span>
            <img className={styles["logo"]} src="/img/logo.png" alt="logo" />
          </div>
        </NavLink>
        <div>
          <h3 className="text-uppercase">Reactивные KEDы</h3>
          <p className="opacity-5">Магазин лучших KED-off</p>
        </div>
      </div>
      <ul className={cn(styles["headerRight"], "d-flex")}>
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <NavLink
            className={({ isActive }) =>
              cn(styles[""], { [styles.active]: isActive })
            }
            to="/orders"
          >
            <div className="d-flex">
              <span className={cn(styles[""], "mr-5")}>Cart</span>
              <img src="/img/cart.svg" alt="cart" />
              <span>{totalPrice} Br.</span>
            </div>
          </NavLink>
        </li>
        <li className="mr-20 cu-p">
          <NavLink
            className={({ isActive }) =>
              cn(styles[""], { [styles.active]: isActive })
            }
            to="/favorites"
          >
            <div className="d-flex">
              <span className={cn(styles[""], "mr-5")}>Favorites</span>
              <img src="/img/heart.svg" alt="favorites" />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              cn(styles[""], { [styles.active]: isActive })
            }
            to="/orders"
          >
            <div className="d-flex">
              <span className={cn(styles[""], "mr-5")}>Orders</span>
              <img src="/img/user.svg" alt="user" />
            </div>
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
