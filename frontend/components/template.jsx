import React from 'react'
import PlaylistIndexContainer from './playlists/playlist_index_container'
import {Switch, Route, NavLink} from 'react-router-dom'
import PlaylistShowContainer from './playlists/playlist_show_container'

const Template = props => {
    return (
        <div className="template">
            <div className="template-nav-display">
                <div className="template-navbar">
                    <div className="nav-links">
                        <ul>
                            <li className="app-name flicker">Firefy</li>
                            <li className="nav-link lightup small"><NavLink to="/home">Home</NavLink></li>
                            <li className="nav-link lightup small"><NavLink to="/search">Search</NavLink></li>
                            <li className="nav-link lightup small"><NavLink to="/library">Library</NavLink></li>
                            <li className="faded small centertext">Playlists</li>
                            <li className="lightup small"><button className="invisbutton small">+ Create Playlist</button></li>
                        </ul>
                        
                        
                        
                        
                        
                        {/* <PlaylistForm/> */}
                    </div>
                    <PlaylistIndexContainer className="playlist-index-container"/>
                </div>


                <div className="template-display">All the Songs
                    <Switch>
                        <Route path="/playlist/:playlistId" component={PlaylistShowContainer} />
                    </Switch>
                </div>
            </div>
           
                <div className="template-player">The audio player</div>
           
        </div>
    )
}

export default Template

    // < DisplayComponent /> 