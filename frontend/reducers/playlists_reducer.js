import {merge} from 'lodash'
import { RECEIVE_ALL_PLAYLISTS, RECEIVE_PLAYLIST, REMOVE_PLAYLIST } from '../actions/playlist_actions';
import {RECEIVE_ALL_SEARCHES} from '../actions/search_actions'

const playlistReducer = (state={}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            return action.playlists
        case RECEIVE_PLAYLIST:
            return merge({}, state, {[action.playlist.id]: action.playlist})
        case REMOVE_PLAYLIST:
            let newState = merge({}, state)
            delete newState[action.playlistId]
            return merge({}, newState)
        case RECEIVE_ALL_SEARCHES:
            return merge({}, state, action.playlists)
        default:
          return state;
    }
}

export default playlistReducer