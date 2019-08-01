import { merge } from 'lodash'
import { RECEIVE_PLAYLIST, RECEIVE_ALL_PLAYLISTS } from '../actions/playlist_actions';

const songsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        // case RECEIVE_ALL_PLAYLISTS:

            // return merge({}, state, action.playlists.songs ) //WIP
        case RECEIVE_PLAYLIST:
            
            return merge({}, state, action.playlist.songs )
        default:
            return state;
    }
}

export default songsReducer