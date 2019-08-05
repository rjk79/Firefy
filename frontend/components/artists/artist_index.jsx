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
            
            return (
                <Link to={`/artist/${artist.id}`} key={artist.id}>
                    <div className="artist-index-item" >
                        <img className="artist-index-img" src={artist.photoUrl} alt="artist_img"/>
                        {artist.name}
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