import {merge} from 'lodash'
import { RECEIVE_ALL_PLAYLISTS, RECEIVE_PLAYLIST, REMOVE_PLAYLIST } from '../actions/playlist_actions';

const playlistReducer = (state={}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            return action.playlists
        case RECEIVE_PLAYLIST:
            return merge({}, state, {[action.playlist.playlist.id]: action.playlist.playlist})
        case REMOVE_PLAYLIST:
            let newState = merge({}, state)
            delete newState[action.playlistId]
            return merge({}, newState)
        default:
          return state;
    }
}

export default playlistReducer