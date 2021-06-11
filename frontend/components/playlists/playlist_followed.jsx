import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import PlaylistFollowedItem from './playlist_followed_item';

function FollowedPlaylists(props) {
//add conditional using history.push
    const [didMount, setDidMount] = useState(false);

    useEffect(() => {
        setDidMount(true)
    }, [])

    useEffect(() => {
        handleDidMount()
    }, [didMount])

    function handleDidMount(){
        props.fetchAllPlaylists()
        props.fetchUser(props.userId)
    }

    let playlistLinks = props.followedPlaylists.map(playlist => {
        return (
            <li key={playlist.id}
                className={`index-playlist-item lightup `}
            >
                <NavLink className="index-playlist-item-link" to={`/playlist/${playlist.id}`}>
                    <PlaylistFollowedItem playlist={playlist} />
                </NavLink>
            </li>
        )
    })
    return (
        <ul className={`followedlist`} >
            {playlistLinks}
        </ul>
    )
}

export default FollowedPlaylists;