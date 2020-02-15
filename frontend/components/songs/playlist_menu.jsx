// import React from 'react'


// const msp = state => {

//     let playlists = Object.values(state.entities.playlists)
//     playlists.sort((a, b) => {
//         if (a.id < b.id) {
//             return 1 //b comes first
//         } else if (a.id > b.id) {
//             return -1 //a comes first
//         } else {
//             return 0
//         }
//     })
//     return {
//         playlists,
//     }
// }
// const mdp = dispatch => {
//     return {
//         fetchAllPlaylists: () => dispatch(fetchAllPlaylists()),
//         openMenu: menu => dispatch(openMenu(menu)),
//         closeMenu: () => dispatch(closeMenu())
//     }
// } 

// class PlaylistMenu extends React.Component {
//     componentDidMount(){
//         fetchAllPlaylists
//     }
//     render(){
//         return (
                
//         )
//     }
// }

// export default connect(msp, mdp)(withRouter(PlaylistMenu));