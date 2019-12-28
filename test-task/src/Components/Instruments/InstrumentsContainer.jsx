import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  requestCompanies,
  isFavoriteActionCreator,
  sortCompanies,
  getTotalCompaniesCount,
  setCurrentPage
} from "../../redux/actions/instruments-actions";
import { addFavoriteItem } from "../../redux/actions/favorites-actions";
import Instruments from "./Instruments";
import Preloader from "../Common/Preloader/Preloader";

const InstrumentContainer = props => {
  useEffect(() => {
    props.requestCompanies("cms", props.currentPage);
  }, [props.currentPage]);

  if (props.loading) {
    return <Preloader />;
  }
  return (
    <>
      <Instruments
        companies={props.companies}
        isSortedByRate={props.isSortedByRate}
        requestCompanies={props.requestCompanies}
        isSortedByWorksCount={props.isSortedByWorksCount}
        isSortedByPartnersCount={props.isSortedByPartnersCount}
        addFavoriteItem={props.addFavoriteItem}
        isFavoriteActionCreator={props.isFavoriteActionCreator}
        sortCompanies={props.sortCompanies}
        totalCompaniesCount={props.totalCompaniesCount}
        setCurrentPage={props.setCurrentPage}
        currentPage={props.currentPage}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    companies: state.instrumentsPage.companies,
    isSortedByRate: state.instrumentsPage.isSortedByRate,
    isSortedByWorksCount: state.instrumentsPage.isSortedByWorksCount,
    isSortedByPartnersCount: state.instrumentsPage.isSortedByPartnersCount,
    totalCompaniesCount: state.instrumentsPage.totalCompaniesCount,
    currentPage: state.instrumentsPage.currentPage,
    loading: state.instrumentsPage.loading
  };
};
export default connect(mapStateToProps, {
  requestCompanies,
  addFavoriteItem,
  isFavoriteActionCreator,
  sortCompanies,
  setCurrentPage
})(InstrumentContainer);
