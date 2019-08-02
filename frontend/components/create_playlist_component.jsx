import React from 'react'
import { openModal } from '../actions/modal_actions';
import { connect } from 'react-redux';

const mdp = dispatch => {
    return {
        openModal: (string) => dispatch(openModal(string))
    }
}

class CreatePlaylistComponent extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.props.openModal("createplaylist")
    }
    render(){
        return(
            <button className="invisbutton create-playlist-button" onClick={this.handleClick}>
                <div className="plusbutton faded">
                    +
                </div>
                Create Playlist
            </button>
        )
    }
}

export default connect(null, mdp)(CreatePlaylistComponent)