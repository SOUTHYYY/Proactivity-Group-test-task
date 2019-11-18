import React from 'react';
import styles from './FavoriteCompanyItem.module.css'


const FavoriteCompanyItem = (props) => {

    const deleteItems = () => {
        let data = {
            title: props.title,
            worksCount: props.worksCount,
            partnersCount: props.partnersCount,
            rate: props.rate,
            image: props.image,
            id: props.id
        }
        props.deleteFavoriteItem(data)
    }


    return (
        <tr className={styles.border_bottom}>
            <th>
                <img src={props.image} alt="logo" />
                <p>{props.title}</p>
            </th>
            <th>
                {props.worksCount} проекта
        </th>
            <th>
                {props.partnersCount} партнера
        </th>
            <th>
                {props.rate}
            </th>
            <th className={styles.FavoriteCompanyItem}>
                <button onClick={deleteItems}>Удалить</button>
            </th>
        </tr>
    )
}


export default FavoriteCompanyItem