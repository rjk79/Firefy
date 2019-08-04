import React from 'react'
import { connect } from 'react-redux'
import {fetchAllAlbums} from '../../actions/album_actions'

const msp = state => {
    let albums = Object.values(state.entities.albums)

    let artists;
    if (!albums.length) {
      artists = albums.map(album => state.entities.artists[album.id].artist)
    }
    return {
        albums,
        artists
    }
}

const mdp = dispatch => {
    return {
        fetchAllAlbums: () => dispatch(fetchAllAlbums())
    }
}
// ===================================================================
class AlbumsIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAllAlbums()
    }
    render() {
        
        let albums = Object.values(this.props.albums).map(album => {
            let unpackedAlbum = album.album
            return (
                <li key={unpackedAlbum.id}>
                    <img className="album-index-img" src={unpackedAlbum.photoUrl} alt="album_img" />
                    {unpackedAlbum.name}
                </li>
            )
        })
        return (
            <>
                <h1>Albums</h1>
                <div className="album-index">
                    {albums}
                </div>
            </>
        )
    }
}

export default connect(msp, mdp)(AlbumsIndex)