import { connect } from 'react-redux';

import { createPlaylisting, deletePlaylisting } from '../../actions/playlisting_actions'
import { fetchAllPlaylists } from '../../actions/playlist_actions';
import { createLike } from '../../actions/like_actions'
import { openMenu, closeMenu } from '../../actions/songmenu_actions'
import SongDragContainer from './song_drag_container'


const msp = (state, ownProps) => {
    let currSongId;
    let currentUserId = state.session.id

    if (state.musicplayer) { currSongId = state.musicplayer.currSongId || null }
    let playlists = Object.values(state.entities.playlists)
    playlists.sort((a, b) => {
        if (a.id < b.id) {
            return 1 //b comes first
        } else if (a.id > b.id) {
            return -1 //a comes first
        } else {
            return 0
        }
    })
    return {
        ...ownProps,
        playlists,
        currSongId,
        currentUserId,
        songmenu: state.ui.songmenu,
    }
}
const mdp = dispatch => {
    return {
        createPlaylisting: playlisting => dispatch(createPlaylisting(playlisting)),
        deletePlaylisting: (playlistId, songId) => dispatch(deletePlaylisting(playlistId, songId)),
        fetchAllPlaylists: () => dispatch(fetchAllPlaylists()),
        createLike: like => dispatch(createLike(like)),
        openMenu: menu => dispatch(openMenu(menu)),
        closeMenu: () => dispatch(closeMenu())
    }
}



export default connect(msp, mdp)(SongDragContainer);