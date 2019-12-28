import {
    SET_COMPANIES,
    GET_IS_SORTED_BY_RATE,
    GET_IS_SORTED_BY_WORKS_COUNT,
    GET_IS_SORTED_BY_PARTNERS_COUNT,
    IS_FAVORITE,
    SET_TOTAL_COMPANIES_COUNT,
    SET_CURRENT_PAGE,
    SET_IS_LOADING
} from '../consts/instrumentConsts'

let initialState = {
    companies: [],
    isSortedByRate: false,
    isSortedByWorksCount: false,
    isSortedByPartnersCount: false,
    currentPage: 1,
    totalCompaniesCount: null,
    loading: false,
}
const isFavoriteSort = (arr, companyId) => {
    const newArray = arr.map(el => {
        if (el.id === companyId) {
            if (el.isFavorite === false) {
                el = { ...el, isFavorite: true }
            }
            else { el = { ...el, isFavorite: false } }
        }
        return el
    })
    return newArray
}

const instrumentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMPANIES:
            return {
                ...state,
                companies: action.data
            }
        case GET_IS_SORTED_BY_RATE:
            return {
                ...state,
                isSortedByRate: state.isSortedByRate === false ? true : false,
                isSortedByPartnersCount: false,
                isSortedByWorksCount: false,
            }
        case GET_IS_SORTED_BY_WORKS_COUNT:
            return {
                ...state,
                isSortedByWorksCount: state.isSortedByWorksCount === false ? true : false,
                isSortedByPartnersCount: false,
                isSortedByRate: false,

            }
        case GET_IS_SORTED_BY_PARTNERS_COUNT:
            return {
                ...state,
                isSortedByPartnersCount: state.isSortedByPartnersCount === false ? true : false,
                isSortedByRate: false,
                isSortedByWorksCount: false,
            }
        case IS_FAVORITE:
            return {
                ...state,
                companies: isFavoriteSort(state.companies, action.companyId)
            }
        case SET_TOTAL_COMPANIES_COUNT:
            return {
                ...state,
                totalCompaniesCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            debugger
            return {
                ...state,
                currentPage: action.payload
            }
        case SET_IS_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}
export default instrumentsReducer