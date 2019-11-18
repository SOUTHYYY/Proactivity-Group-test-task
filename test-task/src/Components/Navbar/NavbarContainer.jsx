import React from 'react';
import {connect} from 'react-redux'
import Navbar from './Navbar';

class NavbarContainer extends React.Component {
        render() {
            return <>
                <Navbar favoriteItems={this.props.favoriteItems}/>
            </>
        }
}

const mapStateToProps = (state) => {
    return {
        favoriteItems: state.favoritesPage.favoriteItems
    }
}
export default connect(mapStateToProps,{})(NavbarContainer)