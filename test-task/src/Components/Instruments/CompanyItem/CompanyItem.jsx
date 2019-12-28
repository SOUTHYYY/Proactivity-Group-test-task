import React from "react";
import styles from "./CompanyItem.module.css";
import emptyCheckBox from "../../../image/check-box-empty.svg";
import checkCheckBox from "../../../image/check-box-check.svg";
import default_company from '../../../image/default_company.png'

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

  const checkedImage = image === null ? default_company : image
  const addItemToFavorite = () => {
    let data = {
      title,
      worksCount,
      partnersCount,
      image: checkedImage,
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
    <tr>
      <th>
        <img src={checkedImage} alt="ajnj" />
        <p>{title}</p>
      </th>
      <th>{worksCount} проекта</th>
      <th>{partnersCount} партнера</th>
      <th>{rate}</th>
      <th className={styles.image}
          onClick={addItemToFavorite}>{checkbox}</th>
    </tr>
  );
};

export default CompanyItem;
