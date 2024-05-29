import Card from "../../components/Card/Card";
import styles from "../../App.module.scss";
import cn from "classnames";
import { useContext } from "react";
import AppContext from "../../context";
import InfoEmpty from "../../components/InfoEmpty/InfoEmpty";

function Favorites() {
  const { favorites, onAddToFavorite } = useContext(AppContext);

  return (
    <div className={cn(styles["content"], "p-40")}>
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Favorites</h1>
      </div>
      {favorites.length > 0 ? (
        <div className={cn(styles["content-favorites"], "d-flex flex-wrap")}>
          {favorites.map((item, index) => {
            return (
              <Card
                key={index}
                onFavorite={onAddToFavorite}
                favored={true}
                onPlus={(obj) => onAddToCart(obj)}
                // onFavorite={(obj) => onAddToFavorite(obj)}
                {...item}
              />
            );
          })}
        </div>
      ) : (
        <div className="fav__wrap">
          <InfoEmpty
            title={"Закладок нет :("}
            description={"Вы ничего не добавляли в закладки"}
            image={"/img/empty-favorites.png"}
          />
        </div>
      )}
    </div>
  );
}

export default Favorites;
