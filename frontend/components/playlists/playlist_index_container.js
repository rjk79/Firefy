import {connect} from 'react-redux'
import { fetchAllPlaylists } from '../../actions/playlist_actions';
import PlaylistIndex from './playlist_index'

const msp = state => {
    return {
        playlists: Object.values(state.entities.playlists)
    }
}

const mdp = dispatch => {
    return {
        fetchAllPlaylists: () => dispatch(fetchAllPlaylists())
    }
}

export default connect(msp, mdp)(PlaylistIndex)