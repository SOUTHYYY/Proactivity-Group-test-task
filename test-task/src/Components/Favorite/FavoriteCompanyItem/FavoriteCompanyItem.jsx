import React from "react";
import styles from "./FavoriteCompanyItem.module.css";

const FavoriteCompanyItem = ({ item, deleteFavoriteItem }) => {
  const { image, title, rate, id, worksCount, partnersCount } = item;

  const deleteItems = () => {
    let data = {
      title,
      worksCount,
      partnersCount,
      rate,
      image,
      id
    };
    deleteFavoriteItem(data);
  };

  return (
    <tr className={styles.border_bottom}>
      <th>
        <img src={image} alt="logo" />
        <p>{title}</p>
      </th>
      <th>{worksCount} проекта</th>
      <th>{partnersCount} партнера</th>
      <th>{rate}</th>
      <th className={styles.FavoriteCompanyItem}>
        <button onClick={deleteItems}>Удалить</button>
      </th>
    </tr>
  );
};

export default FavoriteCompanyItem;
