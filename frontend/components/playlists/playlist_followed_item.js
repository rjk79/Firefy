import React from 'react'
import { connect } from 'react-redux';
import { useDrop } from 'react-dnd'


const msp = (state, ownProps) => {
    return {
        ...ownProps,
        currentUserId: state.session.id,
    }
}
const mdp = dispatch => {
    return {
        createPlaylisting: playlisting => dispatch(createPlaylisting(playlisting)),
    }
}

function PlaylistFollowedItem({ playlist, createPlaylisting, currentUserId}) {
    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: 'song',
            drop: (item) => {
                createPlaylisting({ playlist_id: playlist.id, song_id: item.song.id })
            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver()
            }),
            canDrop: () => {
                return currentUserId === playlist.user_id
            }
        }),
        []
    )
    debugger
    return (
        <div ref={drop}
            className={`${isOver && currentUserId === playlist.user_id ? 'is-over' : ''}`}>
            {playlist.name}
        </div>

    );
}

export default connect(msp, mdp)(PlaylistFollowedItem);