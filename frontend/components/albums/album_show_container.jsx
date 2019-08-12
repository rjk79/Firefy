import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchAlbum } from '../../actions/album_actions';

import AlbumShow from './album_show';

const msp = (state, ownProps) => {
    let albumId = ownProps.match.params.albumId
    let album = state.entities.albums[albumId] || { name: "", artist_id: 0, photoUrl: "", song_ids: [] }
    let artist = state.entities.artists[album.artist_id] || {name: ""}
    let songs = []

    album.song_ids.forEach(song_id => {
        let song = state.entities.songs[song_id]
        
        if (typeof song !== 'undefined') {songs.push(song)}
        })
        
        
    return {
        album,
        artist,
        songs,
    }
}

const mdp = dispatch => {
    return {
        fetchAlbum: id => dispatch(fetchAlbum(id)),
        receiveQueue: (songs, currSongId) => dispatch(receiveQueue(songs, currSongId))
        
    }
}

export default withRouter(connect(msp, mdp)(AlbumShow))

