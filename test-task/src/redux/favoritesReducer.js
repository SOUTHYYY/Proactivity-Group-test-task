const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM'
const DELETE_FAVOROTE_ITEM = 'DELETE_FAVOROTE_ITEM'

export const initialState = {
    favoriteItems: [],
}

let updateItems = (arr, payload) => {
    let items = arr
    if (arr.findIndex(el => el.id === payload.id)){
        items = [
            ...items,
            payload
        ]
    }
    return items
}
let deleteElem = (arr, payload) => {
    let items = []
    arr.map(el => {
        if (el.id != payload.id) {
            items.push(el)
        }
    })
    return items
}

const setItemsToStorage = (arr) => {
    let favoriteItems = [arr]
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE_ITEM:{
            setItemsToStorage([...state.favoriteItems, action.payload])
            return {
                ...state,
                favoriteItems: updateItems(state.favoriteItems, action.payload)
            }
        }
        case DELETE_FAVOROTE_ITEM:
            return {
                ...state,
                favoriteItems: deleteElem(state.favoriteItems, action.payload)
            }

        default:
            return state
    }

}

export const addFavoriteItem = (payload) => {
    return {
        type: ADD_FAVORITE_ITEM,
        payload: payload
    }
}
export const deleteFavoriteItem = (payload) => ({ type: DELETE_FAVOROTE_ITEM, payload })





export default favoritesReducer