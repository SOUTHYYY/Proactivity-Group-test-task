import React, { useState, useEffect } from 'react';
import styles from './Favorite.module.css'
import FavoriteCompanyItem from './FavoriteCompanyItem/FavoriteCompanyItem'



const Favorites = (props) => {

    const EMPTY_LIST = 'К сожалению ваш список пуст, пожалуйста выберите нужные вам инструменты'
    const [favoriteItems, setFavoriteItems] = useState(props.favoriteItems)

    useEffect(() => {
        setFavoriteItems(props.favoriteItems)
    }, [props.favoriteItems])
    console.log('favoriteItems', favoriteItems)

    let favorite = favoriteItems.map(item =>
        <FavoriteCompanyItem title={item.title}
            id={item.id}
            key={item.id}
            rate={item.rate}
            partnersCount={item.partnersCount}
            worksCount={item.worksCount}
            image={item.image}
            deleteFavoriteItem={props.deleteFavoriteItem} />
    )
    return <div className={styles.Favorites}>
        <h1>Выбранные компании:</h1>
        {favoriteItems.length ?
            <div className={styles.Favorites_items}>
                {favoriteItems.length ? favorite : EMPTY_LIST}
            </div>
            :
            <div className={styles.EmptyList}>
                <p>{EMPTY_LIST}</p>
            </div>

        }
    </div>
}

export default Favorites