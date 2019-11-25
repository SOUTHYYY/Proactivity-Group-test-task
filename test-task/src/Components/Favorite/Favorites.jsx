import React, { useState, useEffect } from 'react';
import styles from './Favorite.module.css'
import FavoriteCompanyItem from './FavoriteCompanyItem/FavoriteCompanyItem'



const Favorites = ({favoriteItems, deleteFavoriteItem}) => {
    debugger

    const EMPTY_LIST = 'К сожалению ваш список пуст, пожалуйста выберите нужные вам инструменты'
    const [favotiteCompanies, setFavotiteCompanies] = useState(favoriteItems)

    useEffect(() => {
        setFavotiteCompanies(favoriteItems)
    }, [favoriteItems])
    console.log('favoriteItems', favoriteItems)

    let favorite = favotiteCompanies.map(item =>
        <FavoriteCompanyItem title={item.title}
            id={item.id}
            key={item.id}
            rate={item.rate}
            partnersCount={item.partnersCount}
            worksCount={item.worksCount}
            image={item.image}
            deleteFavoriteItem={deleteFavoriteItem} />
    )
    return <div className={styles.Favorites}>
        <h1>Выбранные компании:</h1>
        {favotiteCompanies.length ?
            <div className={styles.Favorites_items}>
                {favotiteCompanies.length ? 
                <table>
                    {favorite}
                </table>
                 : EMPTY_LIST}
            </div>
            :
            <div className={styles.EmptyList}>
                <p>{EMPTY_LIST}</p>
            </div>

        }
    </div>
}

export default Favorites