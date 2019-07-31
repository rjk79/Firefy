import React from 'react'
import PlaylistIndexContainer from './playlists/playlist_index_container'

const Template = props => {
    return (
        <div className="template">
            <div className="template-navbar"><PlaylistIndexContainer/></div>
            <div className="template-display">All the Songs</div>
            <div className="template-player">The audio player</div>
        </div>
    )
}

export default Template

    // < DisplayComponent /> 