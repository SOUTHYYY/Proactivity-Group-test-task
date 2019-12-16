import React from "react";
import styles from "./CompanyItem.module.css";
import emptyCheckBox from "../../../image/check-box-empty.svg";
import checkCheckBox from "../../../image/check-box-check.svg";

const CompanyItem = ({ item, addFavoriteItem, isFavoriteActionCreator }) => {
  const {
    title,
    worksCount,
    partnersCount,
    rate,
    image,
    id,
    isFavorite
  } = item;

  const addItemToFavorite = () => {
    let data = {
      title,
      worksCount,
      partnersCount,
      image,
      id,
      isFavorite
    };
    addFavoriteItem(data);
    isFavoriteActionCreator(id);
  };
  const checkbox = isFavorite ? (
    <img src={checkCheckBox} alt="favotite" />
  ) : (
    <img src={emptyCheckBox} alt="favorite" />
  );
  return (
    <tr className={styles.border_bottom}>
      <th>
        <img src={image} alt="ajnj" />
        <p>{title}</p>
      </th>
      <th>{worksCount} проекта</th>
      <th>{partnersCount} партнера</th>
      <th>{rate}</th>
      <th onClick={addItemToFavorite}>{checkbox}</th>
    </tr>
  );
};

export default CompanyItem;
