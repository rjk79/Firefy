import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {RECEIVE_USER, RECEIVE_ALL_USERS} from '../actions/user_actions'
import { merge } from "lodash";

export default (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_USER:
            return merge({}, state, {[action.user.id]: action.user})
        // case RECEIVE_ALL_USERS:
        //     return action.users
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.id]: action.currentUser })
        default:
            return state;
    }
}