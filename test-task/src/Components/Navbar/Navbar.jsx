import React from 'react';
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import star from '../../image/star.svg'
import find from '../../image/find.svg'
import enter from '../../image/enter.svg'

const Navbar = ({favoriteItems}) => {
    return (
        <div>
            <div className={styles.Navbar_wrapper}>
                <div className={styles.Navbar_logo}>
                    <div className={styles.Navbar_logo__box}>
                        CMS
                    </div>
                    <div className={styles.Navbar_logo__text}>
                        <div>magazine</div>
                        <div>все о digital</div>
                    </div>
                </div>
                <div className={styles.Navbar_items}>
                    <div className={styles.Navbar_items__item}>
                        <p>Журнал</p>
                    </div>
                    <div className={styles.Navbar_items__item}>
                        <p>Агенства</p>
                    </div>
                    <div className={styles.Navbar_items__item}>
                        <NavLink to='/instruments' activeClassName={styles.activeLink}>
                            <p>Инструменты</p>
                        </NavLink>
                    </div>
                </div>
                <div className={styles.Navbar_instruments}>
                    <div className={styles.Navbar_instruments__item}>
                        <NavLink to='/favorites' activeClassName={styles.activeLink}>
                            <div className={styles.Navbar_instruments__itemInfo}>
                                <img src={star} alt="избранное" />
                                <p>Избранное</p>
                            </div>
                            <div>
                            {favoriteItems.length ?
                                <div className={styles.Navbar_instruments__favoriteLength}>
                                    {favoriteItems.length}
                                </div>
                                :
                                null}
                            </div>   
                        </NavLink>
                    </div>
                    <div className={styles.Navbar_instruments__item}>
                        <img src={find} alt="" />
                        <p>Поиск</p>
                    </div>
                    <div className={styles.Navbar_instruments__item}>
                        <img src={enter} alt="" />
                        <p>Кабинет агенства</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar