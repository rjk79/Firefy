import React from 'react'
import { useDrag } from 'react-dnd'
import SongComponent from './song_component'

function SongContainer(props) {
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: "song",
        item: props,
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            className={`song-component-container ${isDragging ? 'is-dragging' : ''}`}
            ref={drag}
        >
            <SongComponent {...props} />
        </div>
    );
}

export default SongContainer;