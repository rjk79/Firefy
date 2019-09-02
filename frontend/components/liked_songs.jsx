import { connect } from 'react-redux'
import { fetchUserLikes } from '../actions/user_actions';
import React, {useEffect} from 'react'
import { receiveQueue } from '../actions/musicplayer_actions'
import SongComponent from './songs/song_component'

// import { fetchAllSongs } from '../../actions/playlist_actions';

const msp = (state, ownProps) => {
   
    let sessionId = state.session.id
    let liked_song_ids
    liked_song_ids = state.entities.users[sessionId].liked_song_ids
    let songs = Object.values(state.entities.songs)
    let likedSongs = songs.filter(song => liked_song_ids.includes(song.id))
    return {
        likedSongs,
        sessionId,
    }
}

const mdp = dispatch => {
    return {
        fetchUserLikes: id => dispatch(fetchUserLikes(id)),
        fetchUser: id => dispatch(fetchUser(id)),
        receiveQueue: (songs, currSongId) => dispatch(receiveQueue(songs, currSongId)),
    }
}

export default connect(msp, mdp)(LikedSongs)

function LikedSongs (props) {
    useEffect(() => {props.fetchUserLikes(props.sessionId)}, [])

    function handlePickSong(songId) {
        props.receiveQueue(props.likedSongs, songId)
    }

    let songLis = props.likedSongs.map(song => (
        <SongComponent key={song.id}
            song={song}
            album={{ name: "" }}
            artist={{ name: "" }}
            handlePickSong={handlePickSong}
        />
    ))

    return (
        <>
            <p className="song-index-title">Liked Songs</p>
            <ul>
                {songLis}
            </ul>
        </>
    )
}