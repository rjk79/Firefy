import ArtistIndex from './artists/artist_index'
import AlbumIndex from './albums/album_index'
import React, {useState, useEffect} from 'react'
import { ProtectedRoute } from '../util/route_util'
import PlaylistIndex from './playlists/playlist_index'
import FriendIndex from './users/users_friends_index.jsx'

function HomeComponent (props) {
    const[tabName, setTabName] =  useState("artists")

    function handleClick(tabName){
        return () => setTabName(tabName)
    }


    let addClassArtist = tabName === 'artists' ?                "home-active" : ""
    let addClassAlbums = tabName === 'albums' ?                 "home-active" : ""
    let addClassPlaylists = tabName === 'followed playlists' ? "home-active" : ""
    let addClassFriends = tabName === 'friends' ?                "home-active" : ""
        
        
        let index;
        if (tabName === 'artists') {
            index = <ArtistIndex/>
        } 
        else if (tabName === 'followed playlists') {
            index = <PlaylistIndex/>
        }
        else if (tabName === 'friends') {
            index = <FriendIndex/>
        }
        else {
            index = <AlbumIndex />
        }
        return (
            <>
            <div className="home-options">
                <button id="home-artists" 
                        className={`lightup small home-button home-artists-button ${addClassArtist}`} 
                        onClick={handleClick("artists")}>Artists</button>     
                <button id="home-albums" 
                            className={`lightup small home-button home-albums-button ${addClassAlbums}`} 
                            onClick={handleClick("albums")}>Albums</button>     
                <button id="home-playlists" 
                        className={`lightup small home-button home-albums-button ${addClassPlaylists}`} 
                        onClick={handleClick("followed playlists")}>Playlists</button>     
                <button id="home-playlists" 
                        className={`lightup small home-button home-albums-button ${addClassFriends}`} 
                        onClick={handleClick("friends")}>Friends</button>     
            </div>
            {index}
        </>
        )
        
    }



export default HomeComponent