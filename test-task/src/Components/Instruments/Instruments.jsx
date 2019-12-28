import React from "react";
import styles from "./Instruments.module.css";
import CompanyItem from "./CompanyItem/CompanyItem";
import sort from "../../image/sort-down.svg";
import Panginator from "../Common/Counter/Counter";
import { NavLink } from "react-router-dom";

const Instruments = ({
  companies,
  addFavoriteItem,
  isFavoriteActionCreator,
  isSortedByRate,
  totalCompaniesCount,
  sortCompanies,
  isSortedByWorksCount,
  isSortedByPartnersCount,
  setCurrentPage
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
  console.log(isSortedByRate)

  const setCurrentSotr = sotrType => {
    sortCompanies(sotrType)
  }
  const handlePageChanged = p => {
    setCurrentPage(p);
  };
  const projectsImage = isSortedByWorksCount ? (
    <img src={sort} alt="sorted"></img>
  ) : null;
  const partnersImage = isSortedByPartnersCount ? (
    <img src={sort} alt="sorted"></img>
  ) : null;
  const rateImage = isSortedByRate ? <img src={sort} alt="sorted"></img> : null;
  return (
    <div className={styles.Instruments}>
      <table>
        <thead>
          <tr>
            <th>
              <div>Название</div>
            </th>
            <th>
              <NavLink  to='/' onClick={() => setCurrentSotr('works_count')}>
                Проекты
                {projectsImage}
              </NavLink>
            </th>
            <th>
              <div onClick={() => setCurrentSotr('partners_count')}>
                Партнеры
                {partnersImage}
              </div>
            </th>
            <th>
              <div
                onClick={() => setCurrentSotr('rate')}
              >
                Рейтинг
                {rateImage}
              </div>
            </th>
            <th>
              <div>Сравнить</div>
            </th>
          </tr>
        </thead>
        <tbody>{companyItems}</tbody>
      </table>
      <Panginator
        totalCompaniesCount={totalCompaniesCount}
        handlePageChanged={handlePageChanged}
      />
    </div>
  );
};

export default Instruments;
