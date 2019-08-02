import React from 'react'
import {connect} from 'react-redux'
import PlaylistForm from './playlist_form';
import { createPlaylist } from '../../actions/playlist_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = state => {
    return {
        playlist: {name: ""}
    }
}

const mdp = dispatch => {
    return {
        processForm: playlist => dispatch(createPlaylist(playlist)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(PlaylistForm)