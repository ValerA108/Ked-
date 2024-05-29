import React from "react";
import { useContext } from "react";
import AppContext from "../../context";
import cn from "classnames";
import styles from "./InfoEmpty.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Info = ({ title, description, image }) => {
  const { setCartOpened } = useContext(AppContext);

  return (
    <div
      className={cn(
        styles["cartEmpty"],
        "d-flex align-center justify-center flex-column flex"
      )}
    >
      <img
        className="mb-20"
        width={70}
        height={70}
        src={image}
        alt="empty cart"
      />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <Link to="/">
        <button>Вернуться назад</button>
      </Link>
    </div>
  );
};

export default Info;
