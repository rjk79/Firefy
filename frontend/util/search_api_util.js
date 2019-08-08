export const fetchAllSearches = (query) => {
    return $.ajax({
        method: 'get',
        url: 'api/searches',
        data: { query },
    })
}

// export const deleteAllSearches = () => {
//     return $.ajax({
//         method: 'delete',
//         url: 'api/searches'
//     })
// }
