import React from 'react'
import FollowedPlaylistsContainer from './playlists/playlist_followed_container'
import {Switch, NavLink, Link, Route} from 'react-router-dom'
import PlaylistShowContainer from './playlists/playlist_show_container'
import CreatePlaylistComponent from './create_playlist_component';
import ArtistShowComponent from './artists/artist_show_container';
import {ProtectedRoute} from '../util/route_util'
import AlbumShowComponent from './albums/album_show_container';
import HomeComponent from './home'
import MusicplayerComponent from './musicplayer/musicplayer'
import SearchComponent from './search'
import LibraryComponent from './liked_songs'
import QueueComponent from './queue'
import {connect} from 'react-redux'

const msp = state => {
    let sessionId
    if (state.session) sessionId = state.session.id
    
    return {
        sessionId
    }
}


class Template extends React.Component{
    constructor(props){
        super(props)
  
    }
  
    
    render(){
        
        return (
            <div className="template">
                <div className="template-nav-display">
                    <div className="template-navbar">
                        <div className="nav-links">
                            <ul>
                                <li className="app-name"><Link to="/home"><img className="navbar-firefy-logo" src={window.firefly_logoURL} alt="Logo Img" />Firefy</Link></li>
                                <li className="nav-link lightup small top-left-item bold">
                                    <NavLink className="navbar-top-item" to="/home"><img className="navbar-icon" src={window.navbar_homeURL} />Home</NavLink></li>
                                <li className="nav-link lightup small top-left-item bold">
                                    <NavLink className="navbar-top-item" to="/search"><img className="navbar-icon" src={window.navbar_searchURL} />Search</NavLink></li>
                                <li className="nav-link lightup small top-left-item bold">
                                    <NavLink className="navbar-top-item" to={`/users/${this.props.sessionId}/likes`}><img className="navbar-icon" src={window.navbar_libraryURL} />Your Library</NavLink></li>
                                <li className="faded playlists-label">Playlists</li>
                                <li className="lightup small create-playlist-holder">
                                    <CreatePlaylistComponent />
                                </li>
                            </ul>
                            
                        </div>
                        
                        <FollowedPlaylistsContainer className="playlist-index-container" userId={this.props.sessionId}/>
                    </div>


                    <div className="template-display">
                        <div className="spotlight-background"></div>
                        <Switch>
                            <ProtectedRoute  
                                            exact path="/playlist/:playlistId" 
                                            component={PlaylistShowContainer} />
                            <ProtectedRoute  
                                            exact path="/artist/:artistId" 
                                            component={ArtistShowComponent} />
                            <ProtectedRoute  
                                            exact path="/album/:albumId" 
                                            component={AlbumShowComponent} />
                            <ProtectedRoute  
                                            exact path="/search" 
                                            component={SearchComponent} />
                            <ProtectedRoute  
                                            exact path={`/users/${this.props.sessionId}/likes`}
                                            component={LibraryComponent} />
                            <ProtectedRoute  
                                            exact path="/queue" 
                                            component={QueueComponent} />
                            <Route path="/" component={HomeComponent} />
                        </Switch>
                    </div>
                </div>
            
                <div className="template-player"><MusicplayerComponent /></div>
                    
            </div>
        )
    }
}
export default connect(msp)(Template)
