// import React from 'react'
// import { openModal } from '../../actions/modal_actions';
// import { connect } from 'react-redux';

// const mdp = dispatch => {
//     return {
//         openModal: (string) => dispatch(openModal(string))
//     }
// }

// class CreatePlaylistingComponent extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick() {
//         this.props.openModal("add to playlist")
//     }
//     render() {
//         return (
//             <button className="invisbutton create-playlisting-button" onClick={this.handleClick}>
//                 <div className="plusbutton faded">
//                     +
//                 </div>
//             </button>
//         )
//     }
// }

// export default connect(null, mdp)(CreatePlaylistingComponent)