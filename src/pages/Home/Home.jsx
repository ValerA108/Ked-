import Card from "../../components/Card/Card";
import styles from "../../App.module.scss";
import cn from "classnames";
import Slider from "../../components/Slider/Slider";

function Home({
  searchValue,
  onChangeSearchInput,
  setSearchValue,
  items,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(12)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        loading={isLoading}
        onPlus={(obj) => onAddToCart(obj)}
        onFavorite={(obj) => onAddToFavorite(obj)}
        {...item}
      />
    ));
  };

  return (
    <div className={cn(styles["content"], "p-40")}>
      <div className={cn(styles["slider_wrp"], "mb-40")}>
        <Slider />
      </div>
      <div className="d-flex align-center mb-40 justify-between">
        <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : "Все KEDы"}</h1>
        <div className={cn(styles["search-block"], "d-flex")}>
          <img src="/search.svg" alt="Search" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            type="text"
            placeholder="Поиск..."
          />
          {searchValue ? (
            <img
              src="/img/btn-remove.svg"
              alt="remove"
              onClick={() => setSearchValue("")}
            />
          ) : null}
        </div>
      </div>
      <div className="d-flex flex-wrap justify-between">{renderItems()}</div>
    </div>
  );
}

export default Home;
