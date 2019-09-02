import { merge } from "lodash";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {RECEIVE_USER, RECEIVE_ALL_USERS} from '../actions/user_actions'
import { REMOVE_FOLLOW, RECEIVE_FOLLOW } from "../actions/follow_actions";
import { RECEIVE_FRIENDSHIP, REMOVE_FRIENDSHIP } from "../actions/friendship_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

export default (state = {}, action) => {
    Object.freeze(state)
    let newState;
    let user;
    let user1;
    let user2
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return action.users
        case RECEIVE_USER:
            return merge({}, state, {[action.user.id]: action.user})
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.id]: action.currentUser })
        case RECEIVE_FOLLOW:
             newState = merge({}, state)
            // find the user 
            user = newState[action.follow.user_id]
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
             newState = merge({}, state)
            
            user1 = newState[action.friendship.user1_id]
            user2 = newState[action.friendship.user2_id]
            user1.friend_ids.push(action.friendship.user2_id)
            user2.friend_ids.push(action.friendship.user1_id)
            return merge({}, state, { [user1.id]: user1, [user2.id]: user2 }) 
        case REMOVE_FRIENDSHIP: 
            
            newState = merge({}, state)
            user1 = newState[action.friendship.user1_id]
            user2 = newState[action.friendship.user2_id]

            let idx1 = user1.friend_ids.indexOf(action.friendship.user2_id)
            let idx2 = user2.friend_ids.indexOf(action.friendship.user1_id)
            user1.friend_ids.splice(idx1, 1)
            user2.friend_ids.splice(idx2, 1)
            return newState
        case RECEIVE_LIKE:
            newState = merge({}, state)
            // find the user 
            user = newState[action.like.user_id]
            user.liked_song_ids.push(action.like.song_id)
            return merge({}, state, { [user.id]: user })
        case REMOVE_LIKE:
            
            newState = merge({}, state)
            // find the user           
            user = newState[action.like.user_id]
            //find the index of the song inside of the users likes
            let idx3 = user.liked_song_ids.indexOf(action.like.song_id)
            user.liked_song_ids.splice(idx3, 1)
            return newState
        default:
            return state;
    }
}