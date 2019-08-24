import React from 'react'
// import SongComponent from './songs/song_component'
import { connect } from 'react-redux';
import { receiveQueue } from '../actions/musicplayer_actions';
import SongComponent from './songs/song_component'
const msp = state => {
    
    let songs = state.musicplayer.queue ? Object.values(state.musicplayer.queue) : []
    let albums = songs.map(song => {
        if (song) return state.entities.albums[song.album_id]
    }
    )
    let artists = albums.map(album => {
        if (album) return (state.entities.artists[album.artist_id])
    }
    )
    return {
        musicplayer: state.musicplayer,
        artists,
        albums
    }
}

const mdp = dispatch => {
    return {
        receiveQueue: (songs, currSongId) => dispatch(receiveQueue(songs, currSongId)),
    }
}

class QueueComponent extends React.Component {
    constructor(props){
        super(props)
        this.handlePickSong = this.handlePickSong.bind(this)
    }
    handlePickSong(songId) {
        this.props.receiveQueue(Object.values(this.props.musicplayer.queue), songId)
    } 
    render(){
        // debugger
        const {musicplayer, artists, albums} = this.props
        let songLis = musicplayer.queue && musicplayer.queue.length ? Object.values(musicplayer.queue).map((song, idx) => 
            <li className="queue-song" key={song.id}>
                <SongComponent
                    song = {song}
                    artist = {artists[idx]}
                    album = {albums[idx]}
                    handlePickSong = {this.handlePickSong}
                />
            </li>
            )
        : null
        return (
            <>
            <h1 className="queue-list-title">Play Queue</h1>
            <ul className="queue-list">
                {songLis}
            </ul>
            </>
        )
    }
}

export default connect(msp, mdp)(QueueComponent)