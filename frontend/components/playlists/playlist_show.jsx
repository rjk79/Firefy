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
            <li key={idx} className="black-background songli medium">
                {song.title}
                <br/>
                <div className="songli-artist-album faded underlining">{song.artist}-{song.album}</div>
            </li>
        )}
        return (
            <div className="playlist-show">
              <div className="flex-col playlist-title-delete">
                <h2 className="playlist-show-name">{this.props.playlist.name}</h2>
                <button className="playlist-delete-button deleting" onClick={this.deletePlaylist}>
                    <span>...</span>
                </button>
              </div>
                <ul>
                    {songLis}
                </ul>
            </div>
        )
    }
}
export default withRouter(PlaylistShow)
