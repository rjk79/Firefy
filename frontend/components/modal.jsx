import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import CreatePlaylistContainer from './playlists/playlist_create_container'
import EditPlaylistContainer from './playlists/playlist_edit_container'
// import CreatePlaylistingComponent from './playlisting/create_playlisting_modal'

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    
    switch (modal) {
        case 'createplaylist':
            component = <CreatePlaylistContainer />;
            break;
        case 'editplaylist':
            component = <EditPlaylistContainer/>;
            break;
        case 'add to playlist':
            // component = CreatePlaylistingComponent
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
    //sometimes component will be existent, other times null
}
//gives access to a string which is the type of modal
const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);