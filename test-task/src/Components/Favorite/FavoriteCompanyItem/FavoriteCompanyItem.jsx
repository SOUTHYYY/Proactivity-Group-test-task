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


    return(
        <div className={styles.FavoriteCompanyItem}>
            <div className={styles.FavoriteCompanyItem_info}>
                <img src={props.image} alt="ajnj" />
                <p>{props.title}</p>
            </div>
            <div className={styles.FavoriteCompanyItem_worksCount}>
                <div className={styles.FavoriteCompanyItem_worksCount__item}>
                    {props.worksCount} проекта
                </div>
            </div>
            <div>
                {props.partnersCount} партнера
            </div>
            <div className={styles.FavoriteCompanyItem_rate}>
                {props.rate}
            </div>
            <div>
                <button onClick={deleteItems}>Удалить</button>
            </div>
        </div>
    )
}


export default FavoriteCompanyItem