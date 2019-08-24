import {fetchPlaylist, deletePlaylist} from '../../actions/playlist_actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PlaylistShow from './playlist_show'
import {createFollow, deleteFollow} from '../../actions/follow_actions'
import { receiveQueue } from '../../actions/musicplayer_actions';
import { fetchUser } from '../../actions/user_actions';
import { createFriendship } from '../../actions/friendship_actions';
//msp => mdp => didMount => other didMount
  
const msp = (state, ownProps) => {   
    let currentUser = state.entities.users[state.session.id]
    let playlistId = ownProps.match.params.playlistId //grab the ID   
    let playlist = state.entities.playlists[playlistId] || {name: "", song_ids: [], user_id: 0}//get the playlist within the state
    let owner 
    owner = state.entities.users[playlist.user_id] || { username: " " }
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
        currentUser,
        owner,
    }
}

const mdp = dispatch => {
    return {
        fetchPlaylist: id => dispatch(fetchPlaylist(id)),
        deletePlaylist: id => dispatch(deletePlaylist(id)),
        createFollow: follow => dispatch(createFollow(follow)),
        deleteFollow: playlistId => dispatch(deleteFollow(playlistId)),
        receiveQueue: (songs, currSongId) => dispatch(receiveQueue(songs, currSongId)),
        fetchUser: id => dispatch(fetchUser(id)),
        createFriendship: friendship => dispatch(createFriendship(friendship)),
    }
}

export default withRouter(connect(msp, mdp)(PlaylistShow))