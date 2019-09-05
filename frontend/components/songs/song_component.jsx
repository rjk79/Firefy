import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {createPlaylisting} from '../../actions/playlisting_actions'
import { fetchAllPlaylists } from '../../actions/playlist_actions';
 
const msp = state => {
    let currSongId;
    
    if (state.musicplayer) {currSongId = state.musicplayer.currSongId || null}
    return {
        playlists: Object.values(state.entities.playlists),
        currSongId
    }
}
const mdp = dispatch => {
    return {
        createPlaylisting: playlisting => dispatch(createPlaylisting(playlisting)),
        deletePlaylisting: (songId, playlistId) => dispatch(removePlaylisting(songId, playlistId)),
        fetchAllPlaylists: ()=> dispatch(fetchAllPlaylists())
    }
} 

class SongComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            popupShowing: false,
            // duration: 0,
        }
        this.toggleOpenPlaylists = this.toggleOpenPlaylists.bind(this)
        // let audio = new Audio()
        // audio.src = this.props.song.audioUrl 
        // audio.onloadedmetadata = () => {
        //     
        // }
    }
    componentDidMount(){
    }
    toggleOpenPlaylists() {
        this.props.fetchAllPlaylists()

        return this.setState({
            popupShowing: !this.state.popupShowing,
        })
    }
    handleClosePlaylists(){
        return this.setState({popupShowing: false,})
    }
    render(){
        // debugger
        // NEED TO PASS EVERYTHING            EXCEPT createPlaylisting
        const { song, artist, album, handlePickSong, createPlaylisting } = this.props
        
        // 
        let playlists = this.props.playlists.map((playlist, idx) => (
            <p onClick={() => {
                this.setState({popupShowing: false})
                return createPlaylisting({playlist_id: playlist.id, song_id: song.id})
                }
            } className="lightup" key={idx}>{playlist.name}</p>
        )
        )
            
        let popup = this.state.popupShowing ?
            <div className="song-playlist-show-popup hideable">
                    {playlists}
            </div>
            : null

            let flashing;
            flashing = this.props.currSongId === song.id ? "flashing-true" : ""
            //  
            // debugger
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


                        <button className="songli-ell lightup" onClick={this.toggleOpenPlaylists}> + </button>
                        {/* <button className="songli-ell lightup" onClick={this.handleRemoveFromPlaylist}> - </button> */}
                            {popup}
                    </div>
                </div>
            </>
        )
    }
}

export default connect(msp, mdp)(SongComponent);