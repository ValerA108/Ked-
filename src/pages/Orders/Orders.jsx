import Card from "../../components/Card/Card";
import styles from "../../App.module.scss";
import cn from "classnames";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import AppContext from "../../context";
import InfoEmpty from "../../components/InfoEmpty/InfoEmpty";

function Orders() {
  const { onAddToCart, onAddToFavorite } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("https://ked-api.onrender.com/orders");
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе заказов");
        console.error(error);
      }
    })();
  }, []);
  return (
    <div className={cn(styles["content"], "p-40")}>
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои заказы</h1>
      </div>
      {orders.length > 0 ? (
        <div className={cn(styles["content-favorites"], "d-flex flex-wrap")}>
          {(isLoading ? [...Array(12)] : orders).map((item, index) => (
            <Card key={index} loading={isLoading} {...item} />
          ))}
        </div>
      ) : (
        <div className="ord__wrap">
          <InfoEmpty
            title={"У вас нет заказов"}
            description={"Оформите хотя бы один заказ."}
            image={"/img/empty-orders.png"}
          />
        </div>
      )}
    </div>
  );
}

export default Orders;
