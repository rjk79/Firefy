import * as SessionAPIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'


const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

//errors is an array
export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

//user {}
export const login = (user) => dispatch => {
    return SessionAPIUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)),
               err => dispatch(receiveErrors(err.responseJSON))
        )
}


//user {}
export const signup = (user) => dispatch => {
    return SessionAPIUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)),
               err => dispatch(receiveErrors(err.responseJSON))
        )
}

export const logout = () => dispatch => {
    return SessionAPIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()),
             err => dispatch(receiveErrors(err.responseJSON))
        )
}
