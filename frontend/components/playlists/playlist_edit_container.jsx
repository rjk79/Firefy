import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import PlaylistForm from './playlist_form';
import { closeModal } from '../../actions/modal_actions';


const msp = (state, ownProps) => {
    let playlistId = ownProps.match.params.playlistId
    let playlist = state.entities.playlist[playlistId]
    return {
        playlist
    }
}

const mdp = dispatch => {
    return {
        fetchPlaylist: id => dispatch(fetchPlaylist(id)),
        processForm: playlist => dispatch(createPlaylist(playlist)),
        closeModal: () => dispatch(closeModal())
    }
}

class EditPlaylistForm extends React.Component {
    componentDidMount(){
        let playlistId = this.props.match.params.playlistId
        this.props.fetchPlaylist(playlistId)
    }
    render(){
        return(
            <>
                <PlaylistForm playlist={this.props.playlist} processForm={this.props.processForm} />
            </>
        )
    }
}


export default withRouter(connect(msp, mdp)(EditPlaylistForm))