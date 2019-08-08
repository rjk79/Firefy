import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {createPlaylisting} from '../../actions/playlisting_actions'

const mdp = dispatch => {
    return {
        createPlaylisting: playlisting => dispatch(createPlaylisting(playlisting)),
        // handleClickPickSong: 
    }
} 

class SongComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            popupShowing: false,
        }
        this.toggleOpenPlaylists = this.toggleOpenPlaylists.bind(this)
        // this.handleClosePlaylists = this.handleClosePlaylists.bind(this)
    }
    toggleOpenPlaylists() {
        return this.setState({
            popupShowing: !this.state.popupShowing,
            // popupId: id
        })
    }
    handleClosePlaylists(){
        return this.setState({popupShowing: false,})
    }
    render(){
        // NEED TO PASS EVERYTHING EXCEPT createPlaylisting
        const { song, artist, album, handleClickPickSong, createPlaylisting } = this.props

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

        return(
            <>
                <img src={window.noteURL} onClick={handleClickPickSong(song.id)} />
                <div className="playlist-show-song-text">
                    <p onClick={handleClickPickSong(song.id)}>{song.title}</p>
                    <div className="songli-artist-album faded">
                        <Link to={`/artist/${artist.id}`} className="artist-album-li underlining">{artist.name}</Link>
                         &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                            <Link to={`/album/${album.id}`} className="artist-album-li underlining">{album.name}</Link>
                    </div>
                    <button className="songli-ell lightup" onClick={this.toggleOpenPlaylists}> + </button>
                        {popup}
                </div>
                    
                        
                    {/* {this.popUpFactory(song.id)} */}
            </>
        )
    }
}

export default connect(null, mdp)(SongComponent);