import React from 'react'
import {withRouter} from 'react-router-dom'


class PlaylistShow extends React.Component {
    componentDidMount() {
        let playlistId = this.props.match.params.playlistId        
        this.props.fetchPlaylist(playlistId)
        this.deletePlaylist = this.deletePlaylist.bind(this)
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

    render() {
        let songLis;
        if (this.props.songs){         
            songLis = this.props.songs.map((song, idx) =>
            <li key={idx} className="songli medium">
                {song.title}
                <br/>
                <div className="songli-artist-album faded underlining">{song.artist} - {song.album}</div>
                <button className="songli-ell lightup">...</button>
            </li>
        )}
        return (
            <div className="playlist-show">
              <div className="flex-col playlist-title-delete">
                <img className="playlist-artwork" src="assets/playlist_artwork.jpg" alt="Playlist Artwork"/>
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
