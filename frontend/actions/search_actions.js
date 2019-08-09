import * as SearchAPIUtil from '../util/search_api_util'
export const RECEIVE_ALL_SEARCHES = 'RECEIVE_ALL_SEARCHES'
export const REMOVE_ALL_SEARCHES = 'REMOVE_ALL_SEARCHES'

const receiveAllSearches = searches => {
    return {
        type: RECEIVE_ALL_SEARCHES,
        searches: {artistIds: searches.artistIds,
                    albumIds: searches.albumIds,
                    songIds: searches.songIds,
                    playlistIds: searches.playlistIds,
                    },
        artists: searches.artists,
        albums: searches.albums,
        playlists: searches.playlists,
        songs: searches.songs
    }
}

const removeAllSearches = () => {
    // debugger
    return {
        type: REMOVE_ALL_SEARCHES,
    }
}


export const fetchAllSearches = (query) => dispatch => {
    return SearchAPIUtil.fetchAllSearches(query)
        .then(searches => dispatch(receiveAllSearches(searches)))
}

export const deleteAllSearches = () => dispatch => {
    // debugger
    return () => dispatch(removeAllSearches())
}

