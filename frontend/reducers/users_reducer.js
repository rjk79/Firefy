import { merge } from "lodash";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {RECEIVE_USER, RECEIVE_ALL_USERS} from '../actions/user_actions'
import { REMOVE_FOLLOW, RECEIVE_FOLLOW } from "../actions/follow_actions";
import { RECEIVE_FRIENDSHIP, REMOVE_FRIENDSHIP } from "../actions/friendship_actions";

export default (state = {}, action) => {
    Object.freeze(state)
    let newState;
    let user;
    switch (action.type) {
        case RECEIVE_USER:
            return merge({}, state, {[action.user.id]: action.user})
        // case RECEIVE_ALL_USERS:
        //     return action.users
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.id]: action.currentUser })
        case RECEIVE_FOLLOW:
            newState = merge({}, state)
            // find the user 
            user = newState[action.follow.user_id]
            //find the index of the playlist inside of the users follows
            user.follow_ids.push(action.follow.playlist_id)
            return merge({}, state, { [user.id]: user }) 
        case REMOVE_FOLLOW:
            newState = merge({}, state)
            // find the user           
            user = newState[action.follow.user_id]
            //find the index of the playlist inside of the users follows
            let idx = user.follow_ids.indexOf(action.follow.playlist_id)
            user.follow_ids.splice(idx, 1)  
            return newState
        case RECEIVE_FRIENDSHIP:
        case REMOVE_FRIENDSHIP: 
        default:
            return state;
    }
}