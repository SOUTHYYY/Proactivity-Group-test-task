import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.cmsmagazine.ru/v1/'
})

let transformData = (arr) => {
    const newArr = arr.map(el => {return {...el, isFavorite: false}})
    return newArr
}

export const CompaniesAPI = {
    getCompanies(instrumentTypeCode = 'cms', currentPage = '1') {
        return instance.get(`instrumentsList?instrument_type_code=${instrumentTypeCode}&page=${currentPage}`)
            .then(response => {
                return {
                    data: transformData(response.data.data),
                    totalCount: response.data.total,
                }
            })
    },
    getCompaniesBySort(sort = 'partners_count', instrumentTypeCode = 'cms', sortDirection = 'desc', currentPage = '1'){
        return instance.get(`instrumentsList?instrument_type_code=${instrumentTypeCode}&sort_direction=${sortDirection}&sort=${sort}&page=${currentPage}`)
            .then(response => {
                return transformData(response.data.data)
            })
    },
}