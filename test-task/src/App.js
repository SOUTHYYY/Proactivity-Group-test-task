import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import InstrumentsContainer from './Components/Instruments/InstrumentsContainer';
import FavoritesContainer from './Components/Favorite/FavoritesContainer';
import NavbarContainer from './Components/Navbar/NavbarContainer';


class App extends React.Component {
  render() {
    return (
      <div className='app-wrapper'>
        <div className="main-wrapper">
          <NavbarContainer />
          <div className='content'>
            <Route path='/instruments' render={ () => <InstrumentsContainer />}/>
            <Route path='/favorites' render={() => <FavoritesContainer />}/>
          </div>
        </div>
        <div className='footer'>
            <Footer />
        </div>
      </div>

    )
  }
}

export default App;
