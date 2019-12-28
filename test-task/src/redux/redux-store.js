import { createStore, combineReducers, applyMiddleware } from 'redux'
import instrumentReducer from './reducers/instrumentReducer'
import favoritesReducer from './reducers/favoritesReducer'
import thunkMiddleeware from 'redux-thunk'



let redusers = combineReducers({
    instrumentsPage: instrumentReducer,
    favoritesPage: favoritesReducer,
})

const store = createStore(
    redusers,
    applyMiddleware(thunkMiddleeware)
)
window.store = store

export default store