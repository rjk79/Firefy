import React from 'react'
import {connect} from 'react-redux'
import { fetchAllArtists } from '../../actions/artist_actions';
import {Link} from 'react-router-dom'

const msp = state => {
    let artists = Object.values(state.entities.artists)
    return {
        artists
    }
}

const mdp = dispatch => {
    return {
        fetchAllArtists: () => dispatch(fetchAllArtists())
    }
}

class ArtistsIndex extends React.Component {
    componentDidMount(){
        this.props.fetchAllArtists()
    }
    render(){
        
        let artists = Object.values(this.props.artists).map(artist => {
            let unpackedArtist = artist.artist
            return (
                <Link to={`/artist/${unpackedArtist.id}`}>
                    <div className="artist-index-item" key={unpackedArtist.id}>
                        <img className="artist-index-img" src={unpackedArtist.photoUrl} alt="artist_img"/>
                        {unpackedArtist.name}
                    </div>
                </Link>
            )
        })
        return (
            <>
            <div className="artist-index">
                <h1 className="artist-index-title">Artists</h1>
                {artists}
            </div>
            </>
        )
    }
}

export default connect(msp, mdp)(ArtistsIndex)