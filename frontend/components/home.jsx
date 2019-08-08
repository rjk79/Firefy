import ArtistIndex from './artists/artist_index'
import AlbumIndex from './albums/album_index'
import React from 'react'
import { ProtectedRoute } from '../util/route_util'
import FollowedPlaylistsIndex from './playlists/followed_playlists_index'

class HomeComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = ({ tabName:"artists" })
    }
    componentDidMount(){
    }

    handleClick(tabName){
        return () => this.setState({tabName})
    }

    render(){
        let addClassArtist = this.state.tabName === 'artists' ?                "home-active" : ""
        let addClassAlbums = this.state.tabName === 'albums' ?                 "home-active" : ""
        let addClassPlaylists = this.state.tabName === 'followed playlists' ? "home-active" : ""
        
        
        let index;
        if (this.state.tabName === 'artists') {
            index = <ArtistIndex/>
        } 
        else if (this.state.tabName === 'followed playlists') {
            index = <FollowedPlaylistsIndex/>
        }
        else {
            index = <AlbumIndex />
        }
        return (
            <>
            <div className="home-options">
                <button id="home-artists" className={`lightup small home-button home-artists-button ${addClassArtist}`} onClick={this.handleClick("artists")}>Artists</button>     
                    <button id="home-albums" className={`lightup small home-button home-albums-button ${addClassAlbums}`} onClick={this.handleClick("albums")}>Albums</button>     
                <button id="home-playlists" className={`lightup small home-button home-albums-button ${addClassPlaylists}`} onClick={this.handleClick("followed playlists")}>Follows</button>     
            </div>
            {index}
        </>
        )
        
    }

}

export default HomeComponent