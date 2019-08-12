import * as UserAPIUtil from '../util/user_api_util'
export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'

const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }
}
 
// const receiveAllUsers = users => {
//     return {
//         type: RECEIVE_ALL_USERS,
//         users
//     }
// }

export const fetchUser = id => dispatch => {
    debugger
    return UserAPIUtil.fetchUser(id)
        .then(user => dispatch(receiveUser(user)))
}

// export const fetchAllUsers = () => dispatch => {
//     return UserAPIUtil.fetchAllUsers()
//         .then(users => dispatch(receiveAllUsers(users)))
// }