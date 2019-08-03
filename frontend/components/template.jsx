import React from 'react'
import PlaylistIndexContainer from './playlists/playlist_index_container'
import {Switch, Route, NavLink, Link} from 'react-router-dom'
import PlaylistShowContainer from './playlists/playlist_show_container'
import MusicplayerComponent from './musicplayer'
import CreatePlaylistComponent from './create_playlist_component';

const Template = props => {
    return (
        <div className="template">
            <div className="template-nav-display">
                <div className="template-navbar">
                    <div className="nav-links">
                        <ul>
                            <li className="app-name flicker"><Link to="/home"><img src="assets/firefly_logo.png" alt="Logo Img" />Firefy</Link></li>
                            <li className="nav-link lightup small top-left-item bold"><NavLink to="/home">Home</NavLink></li>
                            <li className="nav-link lightup small top-left-item bold"><NavLink to="/search">Search</NavLink></li>
                            <li className="nav-link lightup small top-left-item bold"><NavLink to="/library">Library</NavLink></li>
                            <li className="faded playlists-label">Playlists</li>
                            <li className="lightup small create-playlist-holder">
                                <CreatePlaylistComponent />
                            </li>
                        </ul>
                        
                        {/* <PlaylistForm/> */}
                    </div>
                    <PlaylistIndexContainer className="playlist-index-container"/>
                </div>


                <div className="template-display">
                <div className="template-display-spacer"></div>
                    <Switch>
                        <Route path="/playlist/:playlistId" component={PlaylistShowContainer} />
                    </Switch>
                </div>
            </div>
           
                <div className="template-player"><MusicplayerComponent/></div>
                
        </div>
    )
}

export default Template

    // < DisplayComponent /> 