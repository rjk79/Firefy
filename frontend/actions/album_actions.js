import * as AlbumAPIUtil from '../util/album_api_util'

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM'
export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS'


const receiveAllAlbums = albums => {
    return {
        type: RECEIVE_ALL_ALBUMS,
        albums
    }
}

const receiveAlbum = album => {
    return {
        type: RECEIVE_ALBUM,
        album
    }
}


export const fetchAllAlbums = () => dispatch => {
    return AlbumAPIUtil.fetchAllAlbums()
        .then(albums => dispatch(receiveAllAlbums(albums)))
}

export const fetchAlbum = id => dispatch => {
    return AlbumAPIUtil.fetchAlbum(id)
        .then(album => dispatch(receiveAlbum(album)))
}