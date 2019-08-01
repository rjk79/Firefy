import * as PlaylistAPIUtil from '../util/playlist_api_util'

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS'
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST'
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST'

const receiveAllPlaylists = playlists => {
    return {
        type: RECEIVE_ALL_PLAYLISTS,
        playlists
    }
}

const receivePlaylist = playlist => {
    
    return {
        type: RECEIVE_PLAYLIST,
        playlist
    }
}

const removePlaylist = playlist => {
    return {
        type: REMOVE_PLAYLIST,
        playlistId: playlist.id
    }
}

export const fetchAllPlaylists = () => dispatch => {
    return PlaylistAPIUtil.fetchAllPlaylists()
        .then(playlists => dispatch(receiveAllPlaylists(playlists)))
}

export const fetchPlaylist = id => dispatch => {
    return PlaylistAPIUtil.fetchPlaylist(id)
        .then(playlist => dispatch(receivePlaylist(playlist)))
}

export const createPlaylist = playlist => dispatch => {
    return PlaylistAPIUtil.createPlaylist(playlist)
        .then(playlist => dispatch(receivePlaylist(playlist)))
}

export const updatePlaylist = playlist => dispatch => {
    return PlaylistAPIUtil.updatePlaylist(playlist)
        .then(playlist => dispatch(receivePlaylist(playlist)))
}

export const deletePlaylist = id => dispatch => {
    return PlaylistAPIUtil.deletePlaylist(id)
        .then(playlist => dispatch(removePlaylist(playlist)))
}