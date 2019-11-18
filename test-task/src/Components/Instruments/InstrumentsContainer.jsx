import React from 'react';
import {connect} from 'react-redux'
import {requestCompanies, getIsSortedByRate, getIsSortedByWorksCount,
    getIsSortedByPartnersCount, isFavoriteActionCreator, sotrCompanies} from '../../redux/instrumentReducer'
import {addFavoriteItem} from '../../redux/favoritesReducer'
import Instruments from './Instruments';
import Preloader from '../Common/Preloader/Preloader';

class instrumentReduser extends React.Component {
    componentWillMount() {
        this.props.requestCompanies('cms', 1)
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
    }
}
export default connect(mapStateToProps,{
    requestCompanies, getIsSortedByRate, getIsSortedByWorksCount,
    addFavoriteItem, isFavoriteActionCreator, sotrCompanies,
    getIsSortedByPartnersCount})(instrumentReduser)