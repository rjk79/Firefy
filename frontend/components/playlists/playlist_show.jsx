import React from 'react'
import {withRouter} from 'react-router-dom'
// import { Draggable } from 'react-beautiful-dnd';
import {Link} from 'react-router-dom'


class PlaylistShow extends React.Component {
    constructor(props){
        super(props)
        this.deletePlaylist = this.deletePlaylist.bind(this)
        this.state = {
            popupShowing: false
        }
        // WORK IN PROGRESS ^
    }
    componentDidMount() {
        let playlistId = this.props.match.params.playlistId        
        this.props.fetchPlaylist(playlistId)
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
    handleClickOnEllipses() {
        return this.setState({
            popupShowing: !this.state.popupShowing
        })
    }
    // WORK IN PROGRESS ^


    render() {
        const { songs, albums, artists, handleClickPickSong} = this.props
        let songLis;
        if (this.props.songs){         

            songLis = songs.map((song, idx) =>
                <li key={idx} className="playlist-show-songli medium" onClick={handleClickPickSong(song.id)}>
                    <img src={window.noteURL}/>
                    <div className="playlist-show-song-text">
                        {song.title}
                        <div className="songli-artist-album faded">
                            <Link to={`/artist/${artists[idx].id}`} className="underlining">{artists[idx].name}</Link>
                            - 
                            <Link to={`/album/${albums[idx].id}`} className="underlining">{albums[idx].name}</Link>
                        </div>
                        <button className="songli-ell lightup">...</button>
                    </div>
                </li>
        )}
        return (
            <div className="playlist-show">
              <div className="flex-col playlist-title-delete">
                    <img className="playlist-artwork" src={window.playlist_artworkURL} alt="Playlist Artwork"/>
                <h2 className="playlist-show-name">{this.props.playlist.name}</h2>
                <p className="song-quantity faded">{this.props.songs.length} songs</p>
                <button className="playlist-delete-button deleting" onClick={this.deletePlaylist}>
                    <span>...</span>
                </button>
              </div>
                <ul className="playlist-songlist">
                    {songLis}
                </ul>
            </div>
        )
    }
}
export default withRouter(PlaylistShow)
