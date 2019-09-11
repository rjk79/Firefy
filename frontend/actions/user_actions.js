import * as UserAPIUtil from '../util/user_api_util'
export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'
export const RECEIVE_USER_LIKES = 'RECEIVE_USER_LIKES'

const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }
}
 
const receiveAllUsers = users => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
}

const receiveUserLikes = likes => {
    return {
        type: RECEIVE_USER_LIKES,
        songs: likes.songs,
        artists: likes.artists,
        albums: likes.albums,
    }
}

export const fetchUser = id => dispatch => {
    
    return UserAPIUtil.fetchUser(id)
        .then(user => dispatch(receiveUser(user)))
}

export const fetchAllUsers = () => dispatch => {
    return UserAPIUtil.fetchAllUsers()
        .then(users => dispatch(receiveAllUsers(users)))
}

export const fetchUserLikes = id => dispatch => {
    return UserAPIUtil.fetchUserLikes(id)
        .then(likes => dispatch(receiveUserLikes(likes)))
}