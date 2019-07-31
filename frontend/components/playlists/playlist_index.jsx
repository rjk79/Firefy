import React from 'react'

class PlaylistIndex extends React.Component {

    componentDidMount(){
        this.props.fetchAllPlaylists()
    }
    render() {
    let playlists = this.props.playlists.map(playlist => (
        <li>{playlist.name}</li>
    ))
    return (
        <ul>
            {playlists}
        </ul>
    )
    }
}

export default PlaylistIndex