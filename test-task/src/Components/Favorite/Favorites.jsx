import React, { useState, useEffect } from "react";
import styles from "./Favorite.module.css";
import FavoriteCompanyItem from "./FavoriteCompanyItem/FavoriteCompanyItem";

const Favorites = ({ favoriteItems, deleteFavoriteItem }) => {
  const EMPTY_LIST =
    "К сожалению ваш список пуст, пожалуйста выберите нужные вам инструменты";
  const [favotiteCompanies, setFavotiteCompanies] = useState(favoriteItems);

  useEffect(() => {
    setFavotiteCompanies(favoriteItems);
  }, [favoriteItems]);

  let favorite = favotiteCompanies.map(item => {
    const { id } = item;
    return (
      <FavoriteCompanyItem
        item={item}
        key={id}
        deleteFavoriteItem={deleteFavoriteItem}
      />
    );
  });
  const items = favotiteCompanies.length ? (
    <div className={styles.Favorites_items}>
      {favotiteCompanies.length ? (
        <table>
          <tbody>{favorite}</tbody>
        </table>
      ) : (
        EMPTY_LIST
      )}
    </div>
  ) : (
    <div className={styles.EmptyList}>
      <p>{EMPTY_LIST}</p>
    </div>
  );

  return (
    <div className={styles.Favorites}>
      <h1>Выбранные компании:</h1>
      {items}
    </div>
  );
};

export default Favorites;
