import {fetchPlaylist, deletePlaylist} from '../../actions/playlist_actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PlaylistShow from './playlist_show'
import {createFollow, deleteFollow} from '../../actions/follow_actions'
// import { openModal } from '../../actions/modal_actions';
//msp => mdp => didMount => other didMount

const msp = (state, ownProps) => {
    let currentUserId = state.session.id


    let playlistId = ownProps.match.params.playlistId //grab the ID
    
    let playlist = state.entities.playlists[playlistId] || {name: "", song_ids: []}//get the playlist within the state

    let songs = playlist.song_ids.map(id => 
        state.entities.songs[id] 
        ) 
    songs = songs.filter(el => el != null)

    let albums = songs.map(song =>
        state.entities.albums[song.album_id]
    ) 

    let artists = albums.map(album =>
        state.entities.artists[album.artist_id]    
    )
    let playlists = Object.values(state.entities.playlists)
        
    return {
        playlist,
        songs,
        albums,
        artists,
        playlists,
        currentUserId,

    }
}

const mdp = dispatch => {
    return {
        fetchPlaylist: id => dispatch(fetchPlaylist(id)),
        deletePlaylist: id => dispatch(deletePlaylist(id)),
        // openModal: string => dispatch(openModal(string))
        createFollow: follow => dispatch(createFollow(follow)),
        deleteFollow: id => dispatch(deleteFollow(id))
    }
}

export default withRouter(connect(msp, mdp)(PlaylistShow))