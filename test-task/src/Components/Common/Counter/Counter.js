const counter = (totalCompaniesCount) => {
    let pagesCount = Math.ceil(totalCompaniesCount / 20);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return pages
}

export default counter