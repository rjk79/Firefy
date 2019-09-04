import React from 'react'
import {withRouter} from 'react-router-dom'
// import { Draggable } from 'react-beautiful-dnd';
import {Link} from 'react-router-dom'
import SongComponent from '../songs/song_component'
 
class PlaylistShow extends React.Component {
    constructor(props){
        super(props)

        this.state = { popupShowing: false,
            imageUrl: "",
            imageFile: null,
        }
        this.deletePlaylist = this.deletePlaylist.bind(this)
        this.handlePickSong = this.handlePickSong.bind(this)
        this.handleOpenPopup = this.handleOpenPopup.bind(this)
        this.handleChangePickArt = this.handleChangePickArt.bind(this)
        this.handleSubmitPickArt = this.handleSubmitPickArt.bind(this)
    }
    colorPicker (){
        let backColor1 = Math.floor(Math.random() * 255)
        let backColor2 = Math.floor(Math.random() * 255)
        let backColor3 = Math.floor(Math.random() * 255)
        document.getElementsByClassName("playlist-show")[0].style.background = `rgba(${backColor1}, ${backColor2}, ${backColor3}, .1)`
    }
    componentDidMount() {
        this.colorPicker()
        let playlistId = this.props.match.params.playlistId        
        this.props.fetchPlaylist(playlistId)  
        this.props.fetchUser(this.props.playlist.user_id)     
        // User clicks on playlist art => Choose File
        // onChange Event of input:file => Submit

        document.getElementsByClassName("playlist-artwork")[0].addEventListener('click', e => {
            document.getElementsByClassName("change-art-choose")[0].click()
        })  
        // document.getElementsByClassName("change-art-choose")[0].onchange => steals event listener?
    } 
    componentDidUpdate(prevProps){
        //switching between playlists
        if (this.props.match.params.playlistId !== prevProps.match.params.playlistId) {
            let playlistId = this.props.match.params.playlistId
            this.props.fetchPlaylist(playlistId)
            this.props.fetchUser(this.props.playlist.user_id)
            this.setState({imageUrl: "", imageFile: null})
            this.colorPicker()
        }
        if (this.props.playlist.user_id !== prevProps.playlist.user_id) {   
            this.props.fetchUser(this.props.playlist.user_id)
        }    
        // document.getElementsByClassName("change-art-submit")[0].submit()

    }
  
    deletePlaylist(e){
        e.preventDefault()
        this.props.deletePlaylist(this.props.playlist.id)
        this.props.history.push("/home")
    }
    handleChangePickArt(e) {
        const reader = new FileReader()
        const file = e.currentTarget.files[0]
        reader.onloadend = () => {
            this.setState({imageUrl: reader.result, imageFile: file})
            // document.getElementsByClassName("change-art-submit")[0].submit()
        }
        if (file){
            reader.readAsDataURL(file)
        } else {
            this.setState({imageUrl: "", imageFile: null})
        }
        
    }
    handleSubmitPickArt(e) {
        const {playlist, updatePlaylist} = this.props
        e.preventDefault()
        const formData = new FormData()
        formData.append('playlist[id]', playlist.id)
        formData.append('playlist[name]', playlist.name)
        formData.append('playlist[user_id]', playlist.user_id) //song ids already assoc
        
        if (this.state.imageUrl) {
            formData.append('playlist[photo]', this.state.imageFile)
        }
        updatePlaylist(formData, playlist.id)
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
       
         
        const { songs, albums, artists, currentUser, createFollow, playlist, match, deleteFollow, owner} = this.props
        let songLis;
        let followButton;
        let friendButton;
        // debugger

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
        if (this.props.songs && artists.length && albums.length){         

            songLis = songs.map((song, idx) =>
                <li key={idx} className="playlist-show-songli medium">
                    <SongComponent 
                                    song={song} 
                                    artist={artists[idx]} 
                                    album={albums[idx]} 
                                    handlePickSong={this.handlePickSong}
                    />
                </li>
        ) } 
        // || <p className="its-empty-title">It's a bit empty here....</p> <p>Let's find some songs for your playlist</p>
        let photoUrl;
        
        photoUrl = this.state.imageUrl || playlist.photoUrl || window.default_albumURL
        return (

            <div className="playlist-show" >
              <div className="flex-col playlist-title-delete">
                <div className="playlist-artwork-holder">
                    <img className="playlist-artwork" src={photoUrl} alt="PlaylistArt"/>
                </div>
                <form className="change-art" onSubmit={this.handleSubmitPickArt}>
                    <input type="file" onChange={this.handleChangePickArt} className="change-art-choose" />
                    <input type="submit" value="Save Image" className="change-art-submit lightup" />
                </form>
                
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
