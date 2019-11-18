import { CompaniesAPI } from '../API/api'

const SET_COMPANIES = 'SET_COMPANIES'
const GET_IS_SORTED_BY_RATE = 'GET_IS_SORTED_BY_RATE'
const GET_IS_SORTED_BY_WORKS_COUNT = 'GET_IS_SORTED_BY_WORKS_COUNT'
const GET_IS_SORTED_BY_PARTNERS_COUNT = 'GET_IS_SORTED_BY_PARTNERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const IS_FAVORITE = 'IS_FAVORITE'


let initialState = {
    companies: [],
    isSortedByRate: false,
    isSortedByWorksCount: false,
    isSortedByPartnersCount: false,
    isFetching: false,
    currentPage: null
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
                companies: (action.data)
            }
        case GET_IS_SORTED_BY_RATE:
            return {
                ...state,
                isSortedByRate: state.isSortedByRate === false ? true : false
            }
        case GET_IS_SORTED_BY_WORKS_COUNT:
            return {
                ...state,
                isSortedByWorksCount: state.isSortedByWorksCount === false ? true : false
            }
        case GET_IS_SORTED_BY_PARTNERS_COUNT:
            return {
                ...state,
                isSortedByPartnersCount: state.isSortedByPartnersCount === false ? true : false
            }
        case IS_FAVORITE:
            return {
                ...state,
                companies: isFavoriteSort(state.companies, action.companyId)
            }
        default:
            return state
    }
}

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const isFavoriteActionCreator = (companyId) => ({ type: IS_FAVORITE, companyId })
export const getIsSortedByRate = () => ({ type: GET_IS_SORTED_BY_RATE })
export const getIsSortedByWorksCount = () => ({ type: GET_IS_SORTED_BY_WORKS_COUNT })
export const getIsSortedByPartnersCount = () => ({ type: GET_IS_SORTED_BY_PARTNERS_COUNT })
export const setCompanies = (data) => ({ type: SET_COMPANIES, data })
export const requestCompanies = (instrumentTypeCode, currentPage) => async (dispatch) => {
    let data = await CompaniesAPI.getCompanies(instrumentTypeCode, currentPage)
    dispatch(setCompanies(data))
}
export const getCompaniesByRate = (instrumentTypeCode, currentPage, sort_direction, sort) =>
    async (dispatch) => {
        toggleIsFetching(true)
        let data = await CompaniesAPI.getCompaniesByRate(instrumentTypeCode, currentPage, sort_direction, sort)
        toggleIsFetching(false)
        dispatch(setCompanies(data))
    }
export const getCompaniesByWorksCount = (instrumentTypeCode, currentPage, sort_direction, sort) =>
    async (dispatch) => {
        toggleIsFetching(true)
        let data = await CompaniesAPI.getCompaniesByWorksCount(instrumentTypeCode, currentPage, sort_direction, sort)
        toggleIsFetching(false)
        dispatch(setCompanies(data))
    }
export const getCompaniesByPartnersCount = (instrumentTypeCode, currentPage, sort_direction, sort) =>
    async dispatch => {
        toggleIsFetching(true)
        let data = await CompaniesAPI.getCompaniesByPartnersCount(instrumentTypeCode, currentPage, sort_direction, sort)
        toggleIsFetching(false)
        dispatch(setCompanies(data))
    }

export const sotrCompanies = (sort) =>
    async dispatch => {
        toggleIsFetching(true)
        let data = await CompaniesAPI.getCompaniesBySort(sort)
        dispatch(setCompanies(data))
    }
export default instrumentsReducer