import React from 'react'
import styles from './CompanyItem.module.css'
import emptyCheckBox from '../../../image/check-box-empty.svg'
import checkCheckBox from '../../../image/check-box-check.svg'

const CompanyItem = ({title, worksCount, partnersCount, rate, image, id, isFavorite,
    addFavoriteItem, isFavoriteActionCreator}) => {

    const addItemToFavorite = () => {
        let data = {
            title: title,
            worksCount: worksCount,
            partnersCount: partnersCount,
            rate: rate,
            image: image,
            id: id,
            isFavorite: isFavorite
        }
        addFavoriteItem(data)
        isFavoriteActionCreator(id)
    }
    return <tr className={styles.border_bottom}>
        <th>
            <img src={image} alt="ajnj" />
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
        <th onClick={addItemToFavorite}>
            {isFavorite ?
                <img src={checkCheckBox} alt="favotite" />
                :
                <img src={emptyCheckBox} alt="favorite" />
            }
        </th>
    </tr>
}



export default CompanyItem