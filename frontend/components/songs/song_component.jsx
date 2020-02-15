import React from 'react';
import {Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {createPlaylisting, deletePlaylisting} from '../../actions/playlisting_actions'
import { fetchAllPlaylists } from '../../actions/playlist_actions';
import {createLike} from '../../actions/like_actions'
import {openMenu, closeMenu} from '../../actions/songmenu_actions'
// import PlaylistMenu from './playlist_menu' 


const msp = state => {
    let currSongId;
    let currentUserId = state.session.id
    
    if (state.musicplayer) {currSongId = state.musicplayer.currSongId || null}
    let playlists = Object.values(state.entities.playlists)
    playlists.sort((a, b) => {
        if (a.id < b.id) {
            return 1 //b comes first
        } else if (a.id > b.id) {
            return -1 //a comes first
        } else {
            return 0
        }
    })
    return {
        playlists,
        currSongId,
        currentUserId,
        songmenu: state.ui.songmenu,
    }
}
const mdp = dispatch => {
    return {
        createPlaylisting: playlisting => dispatch(createPlaylisting(playlisting)),
        deletePlaylisting: (playlistId, songId) => dispatch(deletePlaylisting(playlistId, songId)),
        fetchAllPlaylists: ()=> dispatch(fetchAllPlaylists()),
        createLike: like => dispatch(createLike(like)),
        openMenu: menu => dispatch(openMenu(menu)),
        closeMenu: () => dispatch(closeMenu())
    }
} 

class SongComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // popupShowing: false,
            // duration: 0,
        }
        this.toggleOpenPlaylists = this.toggleOpenPlaylists.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        // let audio = new Audio()
        // audio.src = this.props.song.audioUrl 
        // audio.onloadedmetadata = () => { 
        //     
        // }
    }
   
    
    componentDidMount(){
    }
    componentWillUnmount(){
        this.props.closeMenu()
    }
    toggleOpenPlaylists(e) {
        
        e.preventDefault()
        if (this.props.songmenu === this.props.song.id){
            this.props.closeMenu()
        } else {
            this.props.fetchAllPlaylists()
            this.props.openMenu(this.props.song.id)
            
        }
    }

    handleRemove(){
        this.props.closeMenu()

        const {song, deletePlaylisting} = this.props
        deletePlaylisting(this.props.match.params.playlistId, song.id)
    }
    render(){
        
        // NEED TO PASS EVERYTHING            EXCEPT createPlaylisting
        const { song, artist, album, handlePickSong, createPlaylisting } = this.props
        
        // 
        let playlists = this.props.playlists.map((playlist, idx) => (
            <p onClick={() => {
                this.props.closeMenu()
                return createPlaylisting({playlist_id: playlist.id, song_id: song.id})
                }
            } className="lightup darken playlist-popup-item" key={idx}>{playlist.name}</p>
        )
        )
        let deletePlaylisting = this.props.match.params.playlistId ? 
            <button className="remove-button lightup darken" 
                    onClick={this.handleRemove}>Remove from this Playlist</button>
                    : null
        // let likeButton = <button onClick={this.props.createLike}>Add to Library</button>
        let popup = 
            <div className={`song-playlist-show-popup ${this.props.songmenu === song.id ? "":"hide"}`} >
            {deletePlaylisting}
            <div className="add-title">Add to Playlist:</div>
            {playlists}
        </div> 

        let flashing;
        flashing = this.props.currSongId === song.id ? "flashing-true" : ""
        //  
        // 
        let artistId = artist ? artist.id : null
        let albumId = album ? album.id : null
        let artistName = artist ? artist.name : null
        let albumName = album ? album.name : null
        return(
            <>
                <div className="songcomponent">
                    <img className="lightup" src={window.noteURL} onClick={()=>handlePickSong(song.id)} />
                    <div className="playlist-show-song-text">
                        <p className={`${flashing} song-component-title`} 
                           onClick={() => handlePickSong(song.id)}>
                           {song.title}
                        </p>
                        <div className={`songli-artist-album faded`}>
                            <Link to={`/artist/${artistId}`} className="artist-album-li underlining">{artistName}</Link>
                            {artistName && albumName ? "  -  " : ""}
                            <Link to={`/album/${albumId}`} className="artist-album-li underlining">{albumName}</Link>
                        </div>


                        <button className="songli-ell lightup" onClick={this.toggleOpenPlaylists}> ... </button>
                        {/* <button className="songli-ell lightup" onClick={this.handleRemoveFromPlaylist}> - </button> */}
                            {popup}
                    </div>
                </div>
            </>
        )
    }
}

export default connect(msp, mdp)(withRouter(SongComponent));