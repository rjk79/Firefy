import {merge} from 'lodash'
import { RECEIVE_ALL_PLAYLISTS, RECEIVE_PLAYLIST, REMOVE_PLAYLIST, RECEIVE_CREATED_PLAYLIST } from '../actions/playlist_actions';
import {RECEIVE_ALL_SEARCHES} from '../actions/search_actions'
import { RECEIVE_PLAYLISTING, REMOVE_PLAYLISTING } from '../actions/playlisting_actions';

const playlistReducer = (state={}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            return action.playlists
        case RECEIVE_PLAYLIST:
        case RECEIVE_CREATED_PLAYLIST: //fall thru => 'OR'
            return merge({}, state, {[action.playlist.id]: action.playlist})
        case REMOVE_PLAYLIST:
            let newState = merge({}, state)
            delete newState[action.playlistId]
            return merge({}, newState)
        case RECEIVE_ALL_SEARCHES:
            return merge({}, state, action.playlists)
        // case RECEIVE_PLAYLISTING:
        //     newState = merge({}, state)
        //     playlist = newState[action.playlisting.playlist_id]
        //     playlist.song_ids.push(action.playlisting.song_id)
        //     return merge({}, state, { [playlist.id]: playlist }) 
        case REMOVE_PLAYLISTING:
            newState = merge({}, state)
            
            let playlist = newState[action.playlisting.playlist_id]
            let idx = playlist.song_ids.indexOf(action.playlisting.song_id)
            playlist.song_ids.splice(idx, 1)
            return newState
        default:
          return state;
    }
}

export default playlistReducer