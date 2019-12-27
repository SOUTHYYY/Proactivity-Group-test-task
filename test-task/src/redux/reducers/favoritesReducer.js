import {
    ADD_FAVORITE_ITEM,
    DELETE_FAVOROTE_ITEM
} from '../consts/favoriteConsts'

export const initialState = {
    favoriteItems: [],
}

let updateItems = (arr, payload) => {
    let items = arr
    if (arr.findIndex(el => el.id === payload.id)) {
        items = [
            ...items,
            payload
        ]
    }
    return items
}

const deleteElem = (arr, payload) => {
    return arr.filter(item => item.id !== payload.id)
}


const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE_ITEM:
            return {
                ...state,
                favoriteItems: updateItems(state.favoriteItems, action.payload)
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





export default favoritesReducer