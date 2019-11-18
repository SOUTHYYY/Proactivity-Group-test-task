import React from 'react';
import Favorites from './Favorites';
import {connect} from 'react-redux'
import {addFavoriteItem, deleteFavoriteItem} from '../../redux/favoritesReducer'

class FavoritesContainer extends React.Component {
    render(){
        return(
        <Favorites addFavoriteItem={this.props.addFavoriteItem}
        favoriteItems={this.props.favoriteItems}
        deleteFavoriteItem={this.props.deleteFavoriteItem}/>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        favoriteItems: state.favoritesPage.favoriteItems
    }
}
export default connect(mapStateToProps, {addFavoriteItem, deleteFavoriteItem})(FavoritesContainer)