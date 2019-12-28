import { CompaniesAPI } from '../../API/api'
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


const setIsLoading = (payload) => ({ type: SET_IS_LOADING, payload })
const getIsSortedByRate = () => ({ type: GET_IS_SORTED_BY_RATE })
const getIsSortedByWorksCount = () => ({ type: GET_IS_SORTED_BY_WORKS_COUNT })
const getIsSortedByPartnersCount = () => ({ type: GET_IS_SORTED_BY_PARTNERS_COUNT })
const setCurrentSort = (sort) => (dispatch) => {
    if (sort === "works_count") {
        dispatch(getIsSortedByWorksCount())
    } else if (sort === "partners_count") {
        dispatch(getIsSortedByPartnersCount())
    } else if (sort === "rate") {
        dispatch(getIsSortedByRate())
    }
}
export const setCurrentPage = (payload) => ({ type: SET_CURRENT_PAGE, payload })
export const isFavoriteActionCreator = (companyId) => ({ type: IS_FAVORITE, companyId })
export const setTotalCompaniesCount = (totalCount) => ({ type: SET_TOTAL_COMPANIES_COUNT, totalCount })
export const setCompanies = (data) => ({ type: SET_COMPANIES, data })
export const requestCompanies = (instrumentTypeCode, currentPage) => async (dispatch) => {
    dispatch(setIsLoading(true))
    await CompaniesAPI.getCompanies(instrumentTypeCode, currentPage)
        .then(data => {
            console.log(data)
            dispatch(setCompanies(data.data))
            dispatch(setTotalCompaniesCount(data.totalCount))
            dispatch(setIsLoading(false))
        })
}

export const sortCompanies = (sort) => async dispatch => {
    dispatch(setIsLoading(true))
    dispatch(setCurrentSort(sort))
    await CompaniesAPI.getCompaniesBySort(sort)
        .then(data => {
            dispatch(setCompanies(data))
            dispatch(setIsLoading(false))
        })
}