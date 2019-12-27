import React from "react";
import styles from "./Instruments.module.css";
import CompanyItem from "./CompanyItem/CompanyItem";
import sort from "../../image/sort-down.svg";
import counter from "../Common/Counter/Counter";

const Instruments = ({
  companies,
  addFavoriteItem,
  isFavoriteActionCreator,
  isSortedByRate,
  totalCompaniesCount,
  sotrCompanies,
  getIsSortedByRate,
  requestCompanies,
  isSortedByWorksCount,
  getIsSortedByWorksCount,
  isSortedByPartnersCount,
  getIsSortedByPartnersCount,
  setCurrentPage,
  onPageChanged
}) => {
  let companyItems = companies.map(item => {
    const { id } = item;
    return (
      <CompanyItem
        item={item}
        key={id}
        addFavoriteItem={addFavoriteItem}
        isFavoriteActionCreator={isFavoriteActionCreator}
      />
    );
  });

  const sotrCompanysByRate = () => {
    if (isSortedByRate === false) {
      sotrCompanies("rate");
      getIsSortedByRate();
    } else {
      requestCompanies();
      getIsSortedByRate();
    }
  };
  const sotrCompanysByRateByWorkCount = () => {
    if (isSortedByWorksCount === false) {
      sotrCompanies("works_count");
      getIsSortedByWorksCount();
    } else {
      requestCompanies();
      getIsSortedByWorksCount();
    }
  };
  const sortCompanysByPartnersCount = () => {
    if (isSortedByPartnersCount === false) {
      sotrCompanies("partners_count");
      getIsSortedByPartnersCount();
    } else {
      requestCompanies();
      getIsSortedByPartnersCount();
    }
  };
  const handlePageChanged = p => {
    setCurrentPage(p);
    onPageChanged();
  };
  const panginator = counter(totalCompaniesCount).map(p => {
    return (
      <span
        key={p}
        className={styles.currentPage && styles.selectedPage}
        onClick={() => {
          handlePageChanged(p);
        }}
      >
        {p}
      </span>
    );
  });
  const projectsImage = isSortedByWorksCount ? (
    <img src={sort} alt="sorted"></img>
  ) : null;
  const partnersImage = isSortedByPartnersCount ? (
    <img src={sort} alt="sorted"></img>
  ) : null;
  const rateImage = isSortedByRate ? <img src={sort} alt="sorted"></img> : null;

  return (
    <div className={styles.Instruments}>
      <div className={styles.Instruments_header}>
        <div className={styles.Instruments_header__titles}>Название</div>
        <div
          className={styles.Instruments_header__projects}
          onClick={sotrCompanysByRateByWorkCount}
        >
          Проекты
          {projectsImage}
        </div>
        <div
          className={styles.Instruments_header__partners}
          onClick={sortCompanysByPartnersCount}
        >
          Партнеры
          {partnersImage}
        </div>
        <div
          onClick={sotrCompanysByRate}
          className={styles.Instruments_header__rate}
        >
          Оценка пользователей
          {rateImage}
        </div>
        <div>Сравнить</div>
      </div>
      <div className={styles.Instruments_items}>
        <table>
          <tbody>{companyItems}</tbody>
        </table>
      </div>
      <div className={styles.pages}>{panginator}</div>
    </div>
  );
};

export default Instruments;
