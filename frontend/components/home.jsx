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
    handleClick(tabName){
        return () => this.setState({tabName})
    }

    render(){
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
                <button className="lightup small home-button home-artists-button" onClick={this.handleClick("artists")}>Artists</button>     
                <button className="lightup small home-button home-albums-button" onClick={this.handleClick("albums")}>Albums</button>     
                <button className="lightup small home-button home-albums-button" onClick={this.handleClick("followed playlists")}>Followed Playlists</button>     
            </div>
            {index}
        </>
        )
        
    }

}

export default HomeComponent