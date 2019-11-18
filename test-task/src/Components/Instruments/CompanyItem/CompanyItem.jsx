import React from 'react'
import styles from './CompanyItem.module.css'
import emptyCheckBox from '../../../image/check-box-empty.svg'
import checkCheckBox from '../../../image/check-box-check.svg'

// const CompanyItem = (props) => {

//     const addItemToFavorite = () => {
//         let data = {
//             title: props.title,
//             worksCount: props.worksCount,
//             partnersCount: props.partnersCount,
//             rate: props.rate,
//             image: props.image,
//             id: props.id
//         }
//         props.addFavoriteItem(data)
//         debugger
//     }

//     return (
//         <div className={styles.CompanyItem}>
//             <div className={styles.CompanyItem_info}>
//                 <img src={props.image} alt="ajnj" />
//                 <p>{props.title}</p>
//             </div>
//             <div className={styles.CompanyItem_worksCount}>
//                 <div className={styles.CompanyItem_worksCount_item}>
//                     {props.worksCount} проекта
//                 </div>
//             </div>
//             <div>
//                 {props.partnersCount} партнера
//             </div>
//             <div className={styles.CompanyItem_rate}>
//                 {props.rate}
//             </div>
//             <div onClick={addItemToFavorite}>
//                 <input type="checkbox" />
//             </div>
//         </div>
//     )
// }



const CompanyItem = (props) => {

    const addItemToFavorite = () => {
        let data = {
            title: props.title,
            worksCount: props.worksCount,
            partnersCount: props.partnersCount,
            rate: props.rate,
            image: props.image,
            id: props.id,
            isFavorite: props.isFavorite
        }
        props.addFavoriteItem(data)
        props.isFavoriteActionCreator(props.id)
    }
    return <tr className={styles.border_bottom}>
        <th>
            <img src={props.image} alt="ajnj" />
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
        <th onClick={addItemToFavorite}>
            {props.isFavorite ?
                <img src={checkCheckBox} alt="" />
                :
                <img src={emptyCheckBox} alt="" />
            }
        </th>
    </tr>
}



export default CompanyItem