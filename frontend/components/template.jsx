import React from 'react'
import PlaylistIndexContainer from './playlists/playlist_index_container'
import {Switch, NavLink, Link, Route} from 'react-router-dom'
import PlaylistShowContainer from './playlists/playlist_show_container'
import CreatePlaylistComponent from './create_playlist_component';
import ArtistShowComponent from './artists/artist_show_container';
import {ProtectedRoute} from '../util/route_util'
import AlbumShowComponent from './albums/album_show_container';
import HomeComponent from './home'
import MusicplayerComponent from './musicplayer/musicplayer'
import SearchComponent from './search'

class Template extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentSongId: null, 
            songQueue: [],
        }
        this.handleClickPickSong = this.handleClickPickSong.bind(this)
    }
    handleClickPickSong(songId, songArray){
        // debugger
        return () => this.setState({
            currentSongId: songId,
            songQueue: songArray,
        })
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
                                    <NavLink className="navbar-top-item" to="/library"><img className="navbar-icon" src={window.navbar_libraryURL} />Your Library</NavLink></li>
                                <li className="faded playlists-label">Playlists</li>
                                <li className="lightup small create-playlist-holder">
                                    <CreatePlaylistComponent />
                                </li>
                            </ul>
                            
                        </div>
                        
                        <PlaylistIndexContainer className="playlist-index-container"/>
                    </div>


                    <div className="template-display">
                        <div className="spotlight-background"></div>
                        <Switch>
                            <ProtectedRoute handleClickPickSong={this.handleClickPickSong} 
                                            exact path="/playlist/:playlistId" 
                                            component={PlaylistShowContainer} />
                            <ProtectedRoute handleClickPickSong={this.handleClickPickSong} 
                                            exact path="/artist/:artistId" 
                                            component={ArtistShowComponent} />
                            <ProtectedRoute handleClickPickSong={this.handleClickPickSong} 
                                            exact path="/album/:albumId" 
                                            component={AlbumShowComponent} />
                            <ProtectedRoute handleClickPickSong={this.handleClickPickSong} 
                                            exact path="/search" 
                                            component={SearchComponent} />
                            <Route path="/" component={HomeComponent} />
                        </Switch>
                    </div>
                </div>
            
                <div className="template-player"><MusicplayerComponent currentSongId={this.state.currentSongId} /></div>
                    
            </div>
        )
    }
}

export default Template

