import { merge } from 'lodash'
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ALL_SEARCHES } from '../actions/search_actions';


const songsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
       
        case RECEIVE_PLAYLIST:
            return merge({}, state, action.playlist.songs )
        case RECEIVE_ARTIST:
            return merge({}, state, action.artist.songs )
        case RECEIVE_ALBUM:
            return merge({}, state, action.album.songs)
        case RECEIVE_ALL_SEARCHES:
            return merge({}, state, action.songs)
        default:
            return state;
    }
}

export default songsReducer