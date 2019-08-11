export const fetchUser = id => {
    return $.ajax({
        method: 'get',
        url: `api/users/${id}`
    })
}

// export const fetchAllUsers = () => {
//     return $.ajax({
//         method: 'get',
//         url: 'api/users'
//     })
// }
