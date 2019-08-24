import React from 'react'
import {withRouter} from 'react-router-dom'
// import { Draggable } from 'react-beautiful-dnd';
import {Link} from 'react-router-dom'
import SongComponent from '../songs/song_component'

class PlaylistShow extends React.Component {
    constructor(props){
        super(props)
        this.state = { popupShowing: false }
        this.deletePlaylist = this.deletePlaylist.bind(this)
        this.handlePickSong = this.handlePickSong.bind(this)
        this.handleOpenPopup = this.handleOpenPopup.bind(this)
    }
    componentDidMount() {
        let playlistId = this.props.match.params.playlistId        
        this.props.fetchPlaylist(playlistId)         
    } 
    componentDidUpdate(prevProps){
   
        if (this.props.match.params.playlistId != prevProps.match.params.playlistId) {
            let playlistId = this.props.match.params.playlistId
            this.props.fetchPlaylist(playlistId)
            this.props.fetchUser(this.props.playlist.user_id)
        }
        if (this.props.playlist.user_id !== prevProps.playlist.user_id)
    {     this.props.fetchUser(this.props.playlist.user_id)
}    }
  
    deletePlaylist(e){
        e.preventDefault()
        this.props.deletePlaylist(this.props.playlist.id)
        this.props.history.push("/home")
    }

    handlePickSong(songId){
        this.props.receiveQueue(this.props.songs, songId)
    } 

    handleAddFriend(friendship){
        return () => this.props.createFriendship(friendship)
    }
    handleOpenPopup(){
        this.setState({ popupShowing: !this.state.popupShowing })
    }

    render() {
       
        // 
        const { songs, albums, artists, currentUser, createFollow, playlist, match, deleteFollow, owner} = this.props
        let songLis;
        let followButton;
        let friendButton;
        // 
        followButton = !currentUser.follow_ids.includes(parseInt(match.params.playlistId)) ? 
            <button className="follow-button lightup" onClick={() => createFollow({ user_id: currentUser.id, playlist_id: playlist.id })}>FOLLOW</button> :
            <button className="follow-button lightup" onClick={() => deleteFollow(playlist.id)}>UNFOLLOW</button>
        friendButton = !currentUser.friend_ids.includes(owner.id) && currentUser.id !== owner.id?
            <button className="addfriend-button lightup" onClick={this.handleAddFriend({ user1_id: currentUser.id, user2_id: owner.id })}>ADD FRIEND</button> :
            <button className="addfriend-button lightup">FRIENDS &#x2714;</button>

        let popup = this.state.popupShowing ?
            <div className="playlist-show-popup" >
                <button className="playlist-delete-button lightup" onClick={this.deletePlaylist}>Delete</button>
            </div>
            : null
        if (this.props.songs){         

            songLis = songs.map((song, idx) =>
                <li key={idx} className="playlist-show-songli medium">
                    <SongComponent 
                                    song={song} 
                                    artist={artists[idx]} 
                                    album={albums[idx]} 
                                    handlePickSong={this.handlePickSong}
                    />
                </li>
        )} 
        let photoUrl;
        photoUrl = playlist.photoUrl || window.default_albumURL
        return (

            <div className="playlist-show">
              <div className="flex-col playlist-title-delete">
                <img className="playlist-artwork" src={photoUrl} alt="PlaylistArt"/>
                
                <h2 className="playlist-show-name">{playlist.name}</h2>
                <p className="center playlist-owner faded">By: {owner.username}</p>
                <p className="song-quantity faded">{songs.length} songs</p>
                    <span className="playlist-show-ellipses" onClick={this.handleOpenPopup}>
                        ...
                        {popup}
                    </span>
                {followButton}
                {friendButton}
              </div>
                <ul className="playlist-songlist">
                    {songLis}
                </ul>
            </div>
        )
    }
}
export default withRouter(PlaylistShow)
