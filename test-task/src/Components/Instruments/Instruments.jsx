import React from 'react'
import styles from './Instruments.module.css'
import CompanyItem from './CompanyItem/CompanyItem'
import sort from '../../image/sort-down.svg'



const Instruments = ({companies, addFavoriteItem, isFavoriteActionCreator, isSortedByRate,
    totalCompaniesCount, sotrCompanies, getIsSortedByRate,
    requestCompanies, isSortedByWorksCount, getIsSortedByWorksCount,
    isSortedByPartnersCount, getIsSortedByPartnersCount, setCurrentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalCompaniesCount / 20)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    let companyItems =
        companies.map(company =>
            <CompanyItem id={company.id}
                image={company.image}
                title={company.title}
                rate={company.rate}
                partnersCount={company.partnersCount}
                worksCount={company.worksCount}
                key={company.id}
                addFavoriteItem={addFavoriteItem}
                isFavorite={company.isFavorite}
                isFavoriteActionCreator={isFavoriteActionCreator} />)

    const sotrCompanysByRate = () => {
        if (isSortedByRate === false) {
            sotrCompanies('rate')
            getIsSortedByRate()
        }
        else {
            requestCompanies()
            getIsSortedByRate()
        }
    }
    const sotrCompanysByRateByWorkCount = () => {
        if (isSortedByWorksCount === false) {
            sotrCompanies('works_count')
            getIsSortedByWorksCount()
        }
        else {
            requestCompanies()
            getIsSortedByWorksCount()
        }
    }
    const sortCompanysByPartnersCount = () => {
        if (isSortedByPartnersCount === false) {
            sotrCompanies('partners_count')
            getIsSortedByPartnersCount()
        }
        else {
            requestCompanies()
            getIsSortedByPartnersCount()
        }
    }
    const handlePageChanged = (p) => {
        setCurrentPage(p)
        onPageChanged()
    }

    return (
        <div className={styles.Instruments}>
            <div className={styles.Instruments_header}>
                <div className={styles.Instruments_header__titles}>
                    Название
                </div>
                <div className={styles.Instruments_header__projects} activeClassName={styles.active} onClick={sotrCompanysByRateByWorkCount}>
                    Проекты
                    {isSortedByWorksCount ? <img src={sort} alt='sorted'></img> : null}
                </div>
                <div className={styles.Instruments_header__partners} onClick={sortCompanysByPartnersCount}>
                    Партнеры
                    {isSortedByPartnersCount ? <img src={sort} alt='sorted'></img> : null}
                </div>
                <div onClick={sotrCompanysByRate} className={styles.Instruments_header__rate}>
                    Оценка пользователей
                    {isSortedByRate ? <img src={sort} alt='sorted'></img> : null}
                </div>
                <div>
                    Сравнить
                </div>
            </div>
            <div className={styles.Instruments_items}>
                <table>
                    {companyItems}
                </table>
            </div>
            <div className={styles.pages}>
                {pages.map(p => {
                    return <span className={styles.currentPage && styles.selectedPage}
                        onClick={() => {handlePageChanged(p)}}>{p}</span>
                })}
            </div>
        </div>
    )
}

export default Instruments