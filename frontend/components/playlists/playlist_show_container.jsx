import {fetchPlaylist, deletePlaylist} from '../../actions/playlist_actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PlaylistShow from './playlist_show'
import {createFollow, deleteFollow} from '../../actions/follow_actions'
import { receiveQueue } from '../../actions/musicplayer_actions';
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

    let albums = songs.map(song =>{
        if (song) return state.entities.albums[song.album_id]}
    ) 

    let artists = albums.map(album =>{
        if (album) return (state.entities.artists[album.artist_id])  }  
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
        deleteFollow: id => dispatch(deleteFollow(id)),
        receiveQueue: (songs, currSongId) => dispatch(receiveQueue(songs, currSongId))
    }
}

export default withRouter(connect(msp, mdp)(PlaylistShow))