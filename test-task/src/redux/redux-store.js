import { createStore, combineReducers, applyMiddleware } from 'redux'
import instrumentReducer from './instrumentReducer'
import favoritesReducer from './favoritesReducer'
import thunkMiddleeware from 'redux-thunk'
import { initialState } from './favoritesReducer'



var redusers = combineReducers({
    instrumentsPage: instrumentReducer,
    favoritesPage: favoritesReducer,
})

// if (localStorage.getItem('favoriteItems')) {
//     var favoriteItems = JSON.parse(localStorage.getItem('favoriteItems'))
// }

const store = createStore(
    redusers,
    // favoriteItems ? {favoritesPage: {...favoritesPage, favoriteItems : favoriteItems }}
    // : {favoritesPage:  initialState},
    applyMiddleware(thunkMiddleeware)
)

console.log(localStorage.getItem('favoriteItems'))
window.store = store

export default store