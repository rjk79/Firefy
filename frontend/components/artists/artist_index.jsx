import React from 'react'
import {connect} from 'react-redux'
import { fetchAllArtists } from '../../actions/artist_actions';

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
        debugger
        let artists = Object.values(this.props.artists).map(artist => {
            let unpackedArtist = artist.artist
            return (
                <li key={unpackedArtist.id}>
                    <img className="artist-index-img" src={unpackedArtist.photoUrl} alt="artist_img"/>
                    {unpackedArtist.name}
                </li>
            )
        })
        return (
            <>
            <h1>Artists</h1>
            <div className="artist-index">
                {artists}
            </div>
            </>
        )
    }
}

export default connect(msp, mdp)(ArtistsIndex)