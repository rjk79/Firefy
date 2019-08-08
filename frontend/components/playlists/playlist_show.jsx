import React from 'react'
import {withRouter} from 'react-router-dom'
// import { Draggable } from 'react-beautiful-dnd';
import {Link} from 'react-router-dom'
import SongComponent from '../songs/song_component'


class PlaylistShow extends React.Component {
    constructor(props){
        super(props)
        this.deletePlaylist = this.deletePlaylist.bind(this)
        this.state = {
        }
        // WORK IN PROGRESS ^
        // this.popUpFactory = this.popUpFactory.bind(this)
    }
    componentDidMount() {
        let playlistId = this.props.match.params.playlistId        
        this.props.fetchPlaylist(playlistId)
        // document.getElementByClassName("hideable").addEventListener("click", ());

    }
    componentDidUpdate(prevProps){
        if (this.props.match.params.playlistId != prevProps.match.params.playlistId) {
            let playlistId = this.props.match.params.playlistId
            this.props.fetchPlaylist(playlistId)
        }
    }

    deletePlaylist(e){
        e.preventDefault()
        this.props.deletePlaylist(this.props.playlist.id)
        this.props.history.push("/home")
    }
    
    // WORK IN PROGRESS ^

    // popUpFactory(id) {
    //     id === (this.state.popupId && this.state.popupShowing) ?
    //     return () => (
    //         <div className="playlist-show-popup">
    //             <ul>
    //                 {playlists}
    //             </ul>
    //         </div>
    //         : null
    //     )
    // }
    render() {
        

        const { songs, albums, artists, handleClickPickSong, playlists, currentUserId, createFollow, playlist} = this.props
        let songLis;
        if (this.props.songs){         

            songLis = songs.map((song, idx) =>
                <li key={idx} className="playlist-show-songli medium">
                    <SongComponent currPlaylistId={playlist.id}
                                    playlists={playlists} 
                                    song={song} 
                                    artist={artists[idx]} 
                                    album={albums[idx]} 
                                    handleClickPickSong={handleClickPickSong}
                    />
                </li>
        )}
        // onClick={this.handleClickforSong(song.id)}
        return (

            <div className="playlist-show">
              <div className="flex-col playlist-title-delete">
                    <img className="playlist-artwork" src={window.playlist_artworkURL} alt="Playlist Artwork"/>
                    <button className="follow-button lightup" onClick={() => createFollow({ user_id: currentUserId, playlist_id: playlist.id})}>Follow</button>

                <h2 className="playlist-show-name">{this.props.playlist.name}</h2>
                <p className="song-quantity faded">{this.props.songs.length} songs</p>
                <button className="playlist-delete-button deleting" onClick={this.deletePlaylist}>
                    <span>...</span>
                </button>
                {/* <button className="invisbutton" onClick={() => openModal("add to playlist")}>Rename</button> */}
              </div>
                <ul className="playlist-songlist">
                    {songLis}
                </ul>
            </div>
        )
    }
}
export default withRouter(PlaylistShow)
