import React from 'react';
import {Link, withRouter } from 'react-router-dom'

// import PlaylistMenu from './playlist_menu'

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
        const { song, artist, album, handlePickSong, createPlaylisting, currentUserId, playlists } = this.props

        //
        let playlistLis = this.props.playlists.filter(playlist => currentUserId === playlist.user_id)
            .map((playlist, idx) => {

                return (<p onClick={() => {
                            this.props.closeMenu()
                            return createPlaylisting({playlist_id: playlist.id, song_id: song.id})
                    }
                } className="lightup darken playlist-popup-item" key={idx}>{playlist.name}</p>)
        }
        )

        let deletePlaylisting = this.props.match.params.playlistId //looking at a playlist
            && playlists.filter(playlist => playlist.user_id === currentUserId) //owned playlists
                    .map(el => el.id)
                    .includes(parseInt(this.props.match.params.playlistId))?
            <button className="remove-button lightup darken"
                    onClick={this.handleRemove}>Remove from this Playlist</button>
                    : null
        // let likeButton = <button onClick={this.props.createLike}>Add to Library</button>
        let popup =
            <div className={`song-playlist-show-popup ${this.props.songmenu === song.id ? "" : "not-open"}`} >
            {deletePlaylisting}
            <div className="add-title">Add to Playlist:</div>
            {playlistLis}
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

export default withRouter(SongComponent);