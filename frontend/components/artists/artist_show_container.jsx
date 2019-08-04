import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import { fetchArtist } from '../../actions/artist_actions';
import ArtistShow from './artist_show';

const msp = (state, ownProps) => {
    
    let artistId = ownProps.match.params.artistId
    let artist = state.entities.artists[artistId] || {name: "", photo_url: ""}
    return {
        artist
    }
}

const mdp = dispatch => {
    return {
        fetchArtist: id => dispatch(fetchArtist(id))
    }
}

export default withRouter(connect(msp, mdp)(ArtistShow))

