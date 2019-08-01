import React from 'react'
import {Link} from 'react-router-dom'

class PlaylistIndex extends React.Component {
//add conditional using history.push
    componentDidMount(){
        this.props.fetchAllPlaylists()
    }
    render() {
        
    let playlists = Object.values(this.props.playlists)
    let playlistLinks = playlists.map(playlist => {
        return (
            <li key={playlist.id} className="index-playlist lightup"><Link to={`playlist/${playlist.id}`}>{playlist.name}</Link></li>
        )
    })
    return (
        <ul>
            {playlistLinks}
        </ul>
    )
            }
    }

export default PlaylistIndex