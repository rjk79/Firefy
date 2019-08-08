import * as PlaylistingAPIUtil from '../util/playlisting_api_util'

export const RECEIVE_PLAYLISTING = 'RECEIVE_PLAYLISTING'
export const REMOVE_PLAYLISTING = 'REMOVE_PLAYLISTING'

const receivePlaylisting = playlisting => {
    return {
        type: RECEIVE_PLAYLISTING,
        playlisting
    }
}

// const removePlaylisting = playlisting => {
//     return {
//         type: REMOVE_PLAYLISTING,
//         playlistingId: playlisting.id
//     }
// }

export const createPlaylisting = playlisting => dispatch => {
    return PlaylistingAPIUtil.createPlaylisting(playlisting)
        .then(playlisting => dispatch(receivePlaylisting(playlisting)))
}

// export const deletePlaylisting = (songId, playlistId) => dispatch => {
//     return PlaylistingAPIUtil.deletePlaylisting(songId, playlistId)
//         .then(playlisting => dispatch(removePlaylisting(songId, playlistId)))
// }

