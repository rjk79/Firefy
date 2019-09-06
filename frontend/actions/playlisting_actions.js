import * as PlaylistingAPIUtil from '../util/playlisting_api_util'

export const RECEIVE_PLAYLISTING = 'RECEIVE_PLAYLISTING'
export const REMOVE_PLAYLISTING = 'REMOVE_PLAYLISTING'

const receivePlaylisting = playlisting => {
    return {
        type: RECEIVE_PLAYLISTING,
        playlisting
    }
}
 
const removePlaylisting = playlisting => {
    return {
        type: REMOVE_PLAYLISTING,
        playlisting,
    }
}

export const createPlaylisting = playlisting => dispatch => {
    return PlaylistingAPIUtil.createPlaylisting(playlisting)
        .then(playlisting => dispatch(receivePlaylisting(playlisting)))
}

export const deletePlaylisting = (playlistId, songId) => dispatch => {
    return PlaylistingAPIUtil.deletePlaylisting(playlistId, songId)
        .then(playlisting => dispatch(removePlaylisting(playlisting)))
}

