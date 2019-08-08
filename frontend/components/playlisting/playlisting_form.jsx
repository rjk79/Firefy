// import React from 'react'
// import {withRouter} from 'react-router-dom'

// const msp = (state, ownProps) => {
//     return {

//     }
// }

// const mdp = dispatch => {
//     return {
//         fetchAllPlaylists: () => dispatch(fetchAllPlaylists())

//     }
// }


// class PlaylistingForm extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     handleSubmit(e) {
//         e.preventDefault()
//         this.props.processForm(this.state)
//         this.props.closeModal()
//     }

//     render() {
//         return (
//             <>
//                 <div className="modal-big-x" onClick={this.handleClickforCancel}>x</div>
//                 <div className="modal-title-create">Create new playlist</div>

//                 <div className="playlist-form-div">
//                     <form onSubmit={this.handleSubmit}>
//                         <div className="playlist-form">
//                             <label htmlFor="name" className="small playlist-name-input-label">Playlist Name</label>
//                             <input id="name"
//                                 className="playlist-name-input"
//                                 type="text" value={this.state.name}
//                                 onChange={this.handleChange("name")}
//                                 placeholder="New Playlist"
//                                 autofocus
//                             />
//                             <br />
//                         </div>
//                         <input className="session-button playlist-form-button long-padding"
//                             type="submit"
//                             value="Submit"
//                             placeholder="Playlist Name" />
//                     </form>
//                     <button className="cancel-button long-padding" onClick={this.handleClickforCancel}>Cancel</button>
//                 </div>
//             </>
//         )
//     }
// }

// export default withRouter(connect(msp, mdp)(PlaylistingForm))