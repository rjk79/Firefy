import React from 'react'

const msp = (state, ownProps) => {
    let playlistId = ownProps.match.params.playlistId
    let playlist = state.entities.playlists[playlistId]
    return {
        playlist
    }
}

const mdp = dispatch => {
    return {

    }
}