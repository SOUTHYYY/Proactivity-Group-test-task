import React from 'react';
import styles from './FavoriteCompanyItem.module.css'


const FavoriteCompanyItem = ({image, title, worksCount, partnersCount, rate, id, deleteFavoriteItem}) => {

    const deleteItems = () => {
        let data = {
            title: title,
            worksCount: worksCount,
            partnersCount: partnersCount,
            rate: rate,
            image: image,
            id: id
        }
        deleteFavoriteItem(data)
    }


    return (
        <tr className={styles.border_bottom}>
            <th>
                <img src={image} alt="logo" />
                <p>{title}</p>
            </th>
            <th>
                {worksCount} проекта
        </th>
            <th>
                {partnersCount} партнера
        </th>
            <th>
                {rate}
            </th>
            <th className={styles.FavoriteCompanyItem}>
                <button onClick={deleteItems}>Удалить</button>
            </th>
        </tr>
    )
}


export default FavoriteCompanyItem