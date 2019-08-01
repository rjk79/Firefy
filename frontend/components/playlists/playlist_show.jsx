import React from 'react'


class PlaylistShow extends React.Component {
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

    render() {
        let songLis;
        if (this.props.songs){         
            songLis = this.props.songs.map((song, idx) =>
            <li key={idx} className="black-background songli medium">
                {song.title}<br/><div className="songli-artist-album faded underlining">{song.artist}-{song.album}</div>
            </li>
        )}
        return (
            <div className="playlist-show">
                <h2 className="slogan">{this.props.playlist.name}</h2>
                <ul>
                    {songLis}
                </ul>
            </div>
        )
    }
}
export default PlaylistShow
