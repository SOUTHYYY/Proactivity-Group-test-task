import React from 'react'
import styles from './Instruments.module.css'
import CompanyItem from './CompanyItem/CompanyItem'
import sort from '../../image/sort-down.svg'



const Instruments = (props) => {

    let pagesCount = Math.ceil(props.totalCompaniesCount / 20)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    let companyItems =
        props.companies.map(company =>
            <CompanyItem id={company.id}
                image={company.image}
                title={company.title}
                rate={company.rate}
                partnersCount={company.partnersCount}
                worksCount={company.worksCount}
                key={company.id}
                addFavoriteItem={props.addFavoriteItem}
                isFavorite={company.isFavorite}
                isFavoriteActionCreator={props.isFavoriteActionCreator} />)

    const sotrCompanysByRate = () => {
        if (props.isSortedByRate === false) {
            props.sotrCompanies('rate')
            props.getIsSortedByRate()
        }
        else {
            props.requestCompanies()
            props.getIsSortedByRate()
        }
    }
    const sotrCompanysByRateByWorkCount = () => {
        if (props.isSortedByWorksCount === false) {
            props.sotrCompanies('works_count')
            props.getIsSortedByWorksCount()
        }
        else {
            props.requestCompanies()
            props.getIsSortedByWorksCount()
        }
    }
    const sortCompanysByPartnersCount = () => {
        if (props.isSortedByPartnersCount === false) {
            props.sotrCompanies('partners_count')
            props.getIsSortedByPartnersCount()
        }
        else {
            props.requestCompanies()
            props.getIsSortedByPartnersCount()
        }
    }
    const onPageChanged = (p) => {
        debugger
        props.setCurrentPage(p)
        props.onPageChanged()
    }

    return (
        <div className={styles.Instruments}>
            <div className={styles.Instruments_header}>
                <div className={styles.Instruments_header__titles}>
                    Название
                </div>
                <div className={styles.Instruments_header__projects} activeClassName={styles.active} onClick={sotrCompanysByRateByWorkCount}>
                    Проекты
                    {props.isSortedByWorksCount ? <img src={sort} alt='sorted'></img> : null}
                </div>
                <div className={styles.Instruments_header__partners} onClick={sortCompanysByPartnersCount}>
                    Партнеры
                    {props.isSortedByPartnersCount ? <img src={sort} alt='sorted'></img> : null}
                </div>
                <div onClick={sotrCompanysByRate} className={styles.Instruments_header__rate}>
                    Оценка пользователей
                    {props.isSortedByRate ? <img src={sort} alt='sorted'></img> : null}
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
                        onClick={() => {onPageChanged(p)}}>{p}</span>
                })}
            </div>
        </div>
    )
}

export default Instruments