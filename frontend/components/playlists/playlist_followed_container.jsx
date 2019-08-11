import {connect} from 'react-redux'
import { fetchAllPlaylists } from '../../actions/playlist_actions';
import FollowedPlaylists from './playlist_followed'
import {fetchUser} from '../../actions/user_actions' 

const msp = (state, ownProps) => {
    let playlists = state.entities.playlists
    playlists = Object.values(playlists)
    
    let followed_ids
    followed_ids = state.entities.users[ownProps.userId].follow_ids

    let followedPlaylists = playlists.filter(playlist => followed_ids.includes(playlist.id))
    return {
        followedPlaylists,
    }
}

const mdp = dispatch => {
    return {
        fetchAllPlaylists: () => dispatch(fetchAllPlaylists()),
        fetchUser: id => dispatch(fetchUser(id))
    }
}

export default connect(msp, mdp)(FollowedPlaylists)