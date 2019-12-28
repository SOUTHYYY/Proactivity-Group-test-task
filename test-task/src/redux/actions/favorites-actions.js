
import {
    ADD_FAVORITE_ITEM,
    DELETE_FAVOROTE_ITEM
} from '../consts/favoriteConsts'

export const addFavoriteItem = (payload) => {
    return {
        type: ADD_FAVORITE_ITEM,
        payload: payload
    }
}
export const deleteFavoriteItem = (payload) => ({ type: DELETE_FAVOROTE_ITEM, payload })