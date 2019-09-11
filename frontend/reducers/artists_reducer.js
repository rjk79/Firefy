import { merge } from 'lodash'
import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST } from '../actions/artist_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';
import {RECEIVE_ALL_SEARCHES} from '../actions/search_actions'
import {RECEIVE_USER_LIKES} from '../actions/user_actions'


const artistsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_ARTISTS:
            return action.artists
        case RECEIVE_ARTIST:
            return merge({}, state, { [action.artist.id]: action.artist })
        case RECEIVE_PLAYLIST:
            return merge({}, state, action.playlist.artists)
        case RECEIVE_ALBUM:
            return merge({}, state, { [action.album.artist_id]: action.album.artist[action.album.artist_id]})
        case RECEIVE_ALL_SEARCHES:
            return merge({}, state, action.artists)
        case RECEIVE_USER_LIKES:
            return merge({}, state, action.artists)
        default:
            return state;
    }
}

export default artistsReducer