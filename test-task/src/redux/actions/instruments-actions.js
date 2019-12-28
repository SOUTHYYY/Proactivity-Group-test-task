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


const setIsLoading = (payload) => ({ type: SET_IS_LOADING, payload})
export const setCurrentPage = (payload) => ({ type: SET_CURRENT_PAGE, payload })
export const isFavoriteActionCreator = (companyId) => ({ type: IS_FAVORITE, companyId })
export const getIsSortedByRate = () => ({ type: GET_IS_SORTED_BY_RATE })
export const getIsSortedByWorksCount = () => ({ type: GET_IS_SORTED_BY_WORKS_COUNT })
export const setTotalCompaniesCount = (totalCount) => ({ type: SET_TOTAL_COMPANIES_COUNT, totalCount })
export const getIsSortedByPartnersCount = () => ({ type: GET_IS_SORTED_BY_PARTNERS_COUNT })
export const setCompanies = (data) => ({ type: SET_COMPANIES, data })
export const requestCompanies = (instrumentTypeCode, currentPage) => async (dispatch) => {
    debugger
    console.log(currentPage)
    dispatch(setIsLoading(true))
    await CompaniesAPI.getCompanies(instrumentTypeCode, currentPage)
        .then(data => {
            dispatch(setCompanies(data))
            dispatch(setIsLoading(false))
        })
}
export const getTotalCompaniesCount = () => async (dispatch) => {
    let totalCompaniesCount = await CompaniesAPI.getTotalCount()
    dispatch(setTotalCompaniesCount(totalCompaniesCount))
}
export const sotrCompanies = (sort) => async dispatch => {
        dispatch(setIsLoading(true))
        await CompaniesAPI.getCompaniesBySort(sort)
        .then(data => {
            dispatch(setCompanies(data))
            dispatch(setIsLoading(false))
        })
    }