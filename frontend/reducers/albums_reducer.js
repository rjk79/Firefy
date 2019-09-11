import { merge } from 'lodash'
import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import {RECEIVE_ALL_SEARCHES} from '../actions/search_actions'
import {RECEIVE_USER_LIKES} from '../actions/user_actions'


const albumsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_ALBUMS:
            return action.albums
        case RECEIVE_ALBUM:
            return merge({}, state, { [action.album.id]: action.album })
        // for artists, DONE
        case RECEIVE_ARTIST:
            return merge({}, state, action.artist.albums)
        case RECEIVE_PLAYLIST:
            return merge({}, state, action.playlist.albums) //"playlist" is the payload. "albums" is the key
        case RECEIVE_ALL_SEARCHES:
            return merge({}, state, action.albums)
        case RECEIVE_USER_LIKES:
            return merge({}, state, action.albums)
        default:
            return state;
    }
}

export default albumsReducer