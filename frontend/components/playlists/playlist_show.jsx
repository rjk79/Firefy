import React from 'react'


class PlaylistShow extends React.Component {
    componentDidMount() {
        let playlistId = this.props.match.params.playlistId
        this.props.fetchPlaylist(playlistId)
    }

    render() {
        let songs = this.props.songs || []
        let playlist = this.props.playlist || { name: "" }
        let songLis = songs.map(song =>
            <li>{song.title}</li>
        )
        return (
            <>
                <h1>{playlist.name}</h1>
                <ul>
                    {songLis}
                </ul>
            </>
        )
    }
}
export default PlaylistShow
