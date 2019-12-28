import React from 'react';
import styles from './Panginator.module.css'


const Panginator = ({ totalCompaniesCount, handlePageChanged }) => {
    let pagesCount = Math.ceil(totalCompaniesCount / 20);
    let pages = [];
    // должно быть больше чем <= pagesCount
    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }

    return (
        <nav className={styles.panginator}>
            <ul>
                {pages.map(item => (
                    <li key={item}
                        onClick={() => handlePageChanged(item)}>
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Panginator