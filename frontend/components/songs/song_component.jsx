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
        }
        this.toggleOpenPlaylists = this.toggleOpenPlaylists.bind(this)
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
        // NEED TO PASS EVERYTHING            EXCEPT createPlaylisting
        const { song, artist, album, handlePickSong, createPlaylisting } = this.props
        // debugger
        let playlists = this.props.playlists.map((playlist, idx) => (
            <p onClick={() => {
                this.setState({popupShowing: false})
                return createPlaylisting({playlist_id: playlist.id, song_id: song.id})
                }
            } className="lightup" key={idx}>{playlist.name}</p>
        )
        )
            
        let popup = this.state.popupShowing ?
            <div className="playlist-show-popup hideable">
                    {playlists}
            </div>
            : null

            let flashing;
            flashing = this.props.currSongId === song.id ? "flashing-true" : ""
            // debugger 
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
                            <Link to={`/artist/${artist.id}`} className="artist-album-li underlining">{artist.name}</Link>
                            {artist.name && album.name ? "  -  " : ""}
                            <Link to={`/album/${album.id}`} className="artist-album-li underlining">{album.name}</Link>
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