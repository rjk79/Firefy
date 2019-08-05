import React from 'react'
import PlaylistIndexContainer from './playlists/playlist_index_container'
import {Switch, NavLink, Link, Route} from 'react-router-dom'
import PlaylistShowContainer from './playlists/playlist_show_container'
import MusicplayerComponent from './musicplayer'
import CreatePlaylistComponent from './create_playlist_component';
import ArtistShowComponent from './artists/artist_show_container';
import {ProtectedRoute} from '../util/route_util'
import AlbumShowComponent from './albums/album_show_container';
import HomeComponent from './home'
// class Template extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             currentSong: null
//         }
//     }
//     handleClicktoSetSong(songTitle){
//         this.setState({currentSong: songTitle})
//     }
//     render(){

//     }
// }

const Template = props => {
    return (
        <div className="template">
            <div className="template-nav-display">
                <div className="template-navbar">
                    <div className="nav-links">
                        <ul>
                            <li className="app-name flicker"><Link to="/home"><img className="navbar-firefy-logo" src={window.firefly_logoURL} alt="Logo Img" />Firefy</Link></li>
                            <li className="nav-link lightup small top-left-item bold"><NavLink to="/home">Home</NavLink></li>
                            <li className="nav-link lightup small top-left-item bold"><NavLink to="/search">Search</NavLink></li>
                            <li className="nav-link lightup small top-left-item bold"><NavLink to="/library">Library</NavLink></li>
                            <li className="faded playlists-label">Playlists</li>
                            <li className="lightup small create-playlist-holder">
                                <CreatePlaylistComponent />
                            </li>
                        </ul>
                        
                    </div>
                    
                    <PlaylistIndexContainer className="playlist-index-container"/>
                </div>


                <div className="template-display">
                    <img className="spotlight-background" src={window.spotlight_backgroundURL} alt="splash-img"/>
                    
                    <Switch>
                        <ProtectedRoute exact path="/playlist/:playlistId" component={PlaylistShowContainer} />
                        <ProtectedRoute exact path="/artist/:artistId" component={ArtistShowComponent} />
                        <ProtectedRoute exact path="/album/:albumId" component={AlbumShowComponent} />
                        <Route path="/" component={HomeComponent} />
                    </Switch>
                </div>
            </div>
           
            <div className="template-player"><MusicplayerComponent/></div>
                
        </div>
    )
}

export default Template

