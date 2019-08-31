import {connect} from 'react-redux'
import React, {useEffect} from 'react' 
import { fetchAllSongs } from '../actions/song.actions';
import { receiveQueue } from '../actions/musicplayer_actions'
import SongComponent from './songs/song_component'

const msp = state => {
    
    let songs = Object.values(state.entities.songs) 
    return {
        songs,
    }
}
const mdp = dispatch => {
    return {
        fetchAllSongs: () => dispatch(fetchAllSongs()),
        receiveQueue: (songs, currSongId) => dispatch(receiveQueue(songs, currSongId)),

    }
}

export default connect(msp, mdp)(SongIndex)

function SongIndex (props) {
    useEffect(() => {props.fetchAllSongs()}, [] )
//    [] => not watching any variables
// [songs] => pass in args (like state vars from useState )to the array if you want to
    function handlePickSong (songId) {
        props.receiveQueue(props.songs, songId)
    }
    let songLis = props.songs.map(song => (
        <SongComponent key={song.id}
            song={song}
            album={{ name: "" }}
            artist={{ name: "" }}
            handlePickSong={handlePickSong}
        />
    ))
    
    return (
        <>
        <p className="song-index-title">Songs</p>
        <ul>
            {songLis}
        </ul>
        </>
    )
}