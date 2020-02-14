import * as PlaylistAPIUtil from '../util/playlist_api_util'

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS'
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST'
export const RECEIVE_CREATED_PLAYLIST = 'RECEIVE_CREATED_PLAYLIST' //for auto following
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
const receiveCreatedPlaylist = playlist => {
    return {
        type: RECEIVE_CREATED_PLAYLIST,
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
        .then(playlist => dispatch(receiveCreatedPlaylist(playlist)))
}

export const updatePlaylist = (formData, playlistId) => dispatch => {
    
    return PlaylistAPIUtil.updatePlaylist(formData, playlistId)
        .then(playlist => dispatch(receivePlaylist(playlist)))
}

export const deletePlaylist = id => dispatch => {
    return PlaylistAPIUtil.deletePlaylist(id)
        .then(playlist => dispatch(removePlaylist(playlist)))
}