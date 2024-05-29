import React from "react";
import cn from "classnames";
import styles from "./Card.module.scss";
import { useState } from "react";
import ContentLoader from "react-content-loader";
import { useContext } from "react";
import AppContext from "../../context";

function Card({
  id,
  image,
  title,
  price,
  onFavorite,
  onPlus,
  favored = false,
  loading = false,
}) {
  const { isItemAdded } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favored);
  const obj = { id, parentId: id, title, image, price };

  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      {loading ? (
        <div className={cn(styles["card-wrap"], "d-flex")}>
          <div className={cn(styles["card"])}>
            <ContentLoader
              speed={2}
              width={210}
              height={265}
              viewBox="0 0 210 265"
              backgroundColor="#fdeaef"
              foregroundColor="#dbfddf"
            >
              <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
              <rect x="0" y="115" rx="5" ry="5" width="150" height="15" />
              <rect x="0" y="150" rx="5" ry="5" width="120" height="15" />
              <rect x="0" y="200" rx="8" ry="8" width="80" height="25" />
              <rect x="120" y="195" rx="8" ry="8" width="32" height="32" />
            </ContentLoader>
          </div>
        </div>
      ) : (
        <div className={cn(styles["card-wrap"], "d-flex")}>
          <div className={cn(styles["card"])}>
            {onPlus && (
              <div className={cn(styles["favorite"])} onClick={onFavorite}>
                <img
                  onClick={onClickFavorite}
                  src={isFavorite ? "/img/liked.svg" : "/img/heart.svg"}
                  alt="heart"
                />
              </div>
            )}
            <img className={cn(styles["card-img"])} src={image} alt="img" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div>
                <span>Цена: </span>
                <b>{price} Br.</b>
              </div>
              {onPlus && (
                <button
                  className={cn(styles["card-btn"])}
                  onClick={onClickPlus}
                >
                  <img
                    width="100%"
                    height="100%"
                    className={styles["plus-icon"]}
                    src={
                      isItemAdded(id)
                        ? "/img/btn-checked.svg"
                        : "/img/btn-plus.svg"
                    }
                    alt="plus"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
