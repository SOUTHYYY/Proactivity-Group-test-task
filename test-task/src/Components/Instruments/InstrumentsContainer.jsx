import React from 'react';
import {connect} from 'react-redux'
import {requestCompanies, getIsSortedByRate, getIsSortedByWorksCount,
    getIsSortedByPartnersCount, isFavoriteActionCreator, sotrCompanies,
    getTotalCompaniesCount, setCurrentPage} from '../../redux/instrumentReducer'
import {addFavoriteItem} from '../../redux/favoritesReducer'
import Instruments from './Instruments';
import Preloader from '../Common/Preloader/Preloader';

class InstrumentContainer extends React.Component {
    componentWillMount() {
        this.props.requestCompanies('cms', 1)
        this.props.getTotalCompaniesCount()
    }
    onPageChanged = () => {
        debugger
        this.props.requestCompanies('cms',this.props.currentPage)
    }


        render() {
            return <>
                {this.props.isFetching ? <Preloader /> : null}
                <Instruments companies={this.props.companies}
                isSortedByRate={this.props.isSortedByRate} 
                requestCompanies={this.props.requestCompanies}
                getIsSortedByRate={this.props.getIsSortedByRate}
                getIsSortedByWorksCount={this.props.getIsSortedByWorksCount}
                isSortedByWorksCount={this.props.isSortedByWorksCount}
                getIsSortedByPartnersCount={this.props.getIsSortedByPartnersCount}
                isSortedByPartnersCount={this.props.isSortedByPartnersCount}
                addFavoriteItem={this.props.addFavoriteItem}
                isFavoriteActionCreator={this.props.isFavoriteActionCreator}
                sotrCompanies={this.props.sotrCompanies}
                totalCompaniesCount={this.props.totalCompaniesCount}
                setCurrentPage={this.props.setCurrentPage}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                /> 
            </>
        }
}

const mapStateToProps = (state) => {
    return {
        companies: state.instrumentsPage.companies,
        isSortedByRate: state.instrumentsPage.isSortedByRate,
        isSortedByWorksCount: state.instrumentsPage.isSortedByWorksCount,
        isSortedByPartnersCount: state.instrumentsPage.isSortedByPartnersCount,
        totalCompaniesCount: state.instrumentsPage.totalCompaniesCount,
        currentPage: state.instrumentsPage.currentPage
    }
}
export default connect(mapStateToProps,{
    requestCompanies, getIsSortedByRate, getIsSortedByWorksCount,
    addFavoriteItem, isFavoriteActionCreator, sotrCompanies,
    getIsSortedByPartnersCount, getTotalCompaniesCount, setCurrentPage})(InstrumentContainer)