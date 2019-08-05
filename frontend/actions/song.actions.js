import * as SongAPIUtil from '../util/song_api_util'
export const RECEIVE_SONG = 'RECEIVE_SONG'
export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS'

const receiveAllSongs = songs => {
    return {
        type: RECEIVE_ALL_SONGS,
        songs,
    }
}

const receiveSong = song => {
    return {
        type: RECEIVE_SONG,
        song,

    }
}


export const fetchAllSongs = () => dispatch => {
    return SongAPIUtil.fetchAllSongs()
        .then(songs => dispatch(receiveAllSongs(songs)))
}

export const fetchSong = id => dispatch => {
    return SongAPIUtil.fetchSong(id)
        .then(song => dispatch(receiveSong(song)))
}
