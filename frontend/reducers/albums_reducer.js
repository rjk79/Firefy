import { merge } from 'lodash'
import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';

const albumsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_ALBUMS:
            return action.albums
        case RECEIVE_ALBUM:
            return merge({}, state, { [action.album.album.id]: action.album.album })
        // for artists, DONE
        case RECEIVE_ARTIST:
            return merge({}, state, action.artist.albums)
        case RECEIVE_PLAYLIST:
            return merge({}, state, action.playlist.albums) //"playlist" is the payload. "albums" is the key
        default:
            return state;
    }
}

export default albumsReducer