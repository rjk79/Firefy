import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllPlaylists } from '../../actions/playlist_actions';

const msp = state => {
    let playlists = Object.values(state.entities.playlists)
    return {
        playlists,
    }
}

const mdp = dispatch => {
    return {
        fetchAllPlaylists: () => dispatch(fetchAllPlaylists())
    }
}

class PlaylistIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAllPlaylists()
    }
    render() {
    
    const {playlists} = this.props
    let playlistLis = playlists.map(playlist => (
        <li  key={playlist.id}>
            <Link className="album-index-item" to={`/playlist/${playlist.id}`}>
                <img className="album-photo" src={playlist.photoUrl}/>
                {playlist.name}
            </Link>
        </li>
    ))
        return (
            <div className="playlist-index-list">
               {playlistLis}
            </div>
        )
    }
}

export default connect(msp, mdp)(PlaylistIndex)