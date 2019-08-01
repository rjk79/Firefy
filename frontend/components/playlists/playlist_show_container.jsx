import {fetchPlaylist, deletePlaylist} from '../../actions/playlist_actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PlaylistShow from './playlist_show'
//msp => mdp => didMount => other didMount
const msp = (state, ownProps) => {
    let playlistId = ownProps.match.params.playlistId //grab the ID
    
    let playlist = state.entities.playlists[playlistId] || {name: "", song_ids: []}//get the playlist within the state

    let songs = playlist.song_ids.map(id => 
        state.entities.songs[id] 
        ) 
    songs = songs.filter(el => el != null)

    return {
        playlist,
        songs
    }
}

const mdp = dispatch => {
    return {
        fetchPlaylist: id => dispatch(fetchPlaylist(id)),
        deletePlaylist: id => dispatch(deletePlaylist(id))
    }
}

export default withRouter(connect(msp, mdp)(PlaylistShow))