import React from 'react'
import { connect } from 'react-redux'
import {fetchAllAlbums} from '../../actions/album_actions'
import {Link} from 'react-router-dom'
 
const msp = state => {
    let albums = Object.values(state.entities.albums)

    let artists;
    if (!albums.length) {
      artists = albums.map(album => state.entities.artists[album.id])
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
    
        //Object.values
        let albums = this.props.albums.map(album => {
            return (
                <Link to={`/album/${album.id}`} key={album.id}>
                    <div className="album-index-item">
                        <img className="album-index-img" src={album.photoUrl} alt="album_img" />
                        {album.name}
                    </div>
                </Link>
            )
        })
        return (
            
                <div className="album-index">
                    <h1 className="album-index-title">Albums</h1>
                    {albums}
                </div>
        
        )
    }
}

export default connect(msp, mdp)(AlbumsIndex)