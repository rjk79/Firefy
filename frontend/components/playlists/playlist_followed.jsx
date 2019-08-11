import React from 'react'
import {NavLink} from 'react-router-dom'
 
class FollowedPlaylists extends React.Component {
//add conditional using history.push
    componentDidMount(){
        this.props.fetchAllPlaylists()
        this.props.fetchUser(this.props.userId)
    }
    render() {
        
    
    
    let playlistLinks = this.props.followedPlaylists.map(playlist => {
        return (
            <li key={playlist.id} className="index-playlist-item lightup">
                <NavLink className="list-padding index-playlist-item-link " to={`/playlist/${playlist.id}`}>
                    {playlist.name}
                </NavLink>
            </li>
        )
    })
    return (
        <ul className="songlist">
            {playlistLinks}
        </ul>
    )
            }
    }

export default FollowedPlaylists