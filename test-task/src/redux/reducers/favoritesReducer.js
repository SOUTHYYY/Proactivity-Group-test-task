import {
    ADD_FAVORITE_ITEM,
    DELETE_FAVOROTE_ITEM
} from '../consts/favoriteConsts'

export const initialState = {
    favoriteItems: [],
}

let updateItems = (arr, payload) => {
    let items = [...arr]
    const item = items.find(el => el.id === payload.id)
    if (item === undefined) {
        items = [...items, payload]
    } else {
        const itemIndex = items.findIndex(el => el.id === item.id)
        return [
            ...items.slice(0, itemIndex),
            ...items.slice(itemIndex + 1)
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