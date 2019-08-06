import React from 'react'
import {connect} from 'react-redux'
import { fetchSong } from '../../actions/song.actions';

const msp = (state, ownProps) => {
    
    let song = state.entities.songs[ownProps.currentSongId] || {id: null, audioUrl: ""}
    let album = state.entities.albums[song.id] || {id: null}
    let artist = state.entities.artists[album.id] || {}
    return {
        song,
        album,
        artist
    }
}

const mdp = dispatch => {
    return {
        fetchSong: id => dispatch(fetchSong(id)),
        // fetchAlbum: id => dispatch(fetchAlbum(id)),
        // fetchArtist: id => dispatch(fetchArtist(id)),
    }
}


class Musicplayer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isPlaying: false,
            currTime: 0
        }
        this.handleClickPlayPause = this.handleClickPlayPause.bind(this)
    }

    componentDidMount(){
        this.props.fetchSong(this.props.song.id)
    }


    componentDidUpdate(prevProps){
        // debugger
        if (this.props.song != prevProps.song) {
            this.player.load()
            this.player.play()
        }
    }
    handleClickPlayPause(){
        this.state.isPlaying = !this.state.isPlaying
        if (this.state.isPlaying) {
            this.player.pause()
            this.setState({isPlaying: false})
        } else {
            this.player.play()
            this.setState({isPlaying: true})
        }
    }
    handleChange(){
        return
    }
    handleClickForward(){

    }
    handleClickBack(){

    }
// type="audio/mpeg"
    render(){
        // let albumArt;
        // if (album.photoUrl) {
        //     albumArt = typeof album.photoUrl !== 'undefined' ?
        //         <img className="player-album-art" src={album.photoUrl} alt="_" />:
        //         <div></div>
        // }
        const {song, album, artist} = this.props
        debugger
        // debugger
        
        return (
            <>                    
                <div className="musicplayer-1">
                    <img className="player-album-art" src={album.photoUrl} alt=""/>
                    {/* {albumArt} */}
                    <div className="player-song-artist">
                        <p className="player-song-title">{song.title}</p>
                        <p className="player-artist-name">{artist.name}</p>
                    </div>
                </div>

                <div className="musicplayer-2">
                        
                    <div className="musicplayer-2-top faded">
                            
                                <audio controls ref={el => this.player = el}>  
                                    <source src={song.audioUrl}
                                    />
                                    Your browser does not support this file.
                                </audio>
                            <div className="back-button" onClick={this.handleHandleBack("back")}>
                                    <img className="audio-button-img" src={window.controls_spriteURL} alt="Controls Img" />
                            </div>
                            <div className="play-button" onClick={this.handleClickPlayPause}>   
                                    <img className="audio-button-img" src={window.controls_spriteURL} alt="Controls Img" /> 
                            </div>
                            <div className="forward-button">
                            <img className="audio-button-img" onClick={this.handleClickForward("forward")} src={window.controls_spriteURL} alt="Controls Img" />
                            </div>
                            {/* <div className="prog-bar-holder">
                                <div className="prog-bar"></div>
                            </div> */}
                        </div>
                    <div className="musicplayer-2-bottom">
                        {/* <p>current_play_time {this.player.currentTime}</p> */}
                        <input className="time-slider" 
                               type="range"
                               value={this.state.currTime}
                        />
                        {/* <p>total_play_time{this.player.duration}</p> */}
                    </div>
                </div>

                <div className="musicplayer-3">
                    <input className="time-slider" 
                            type="range"
                            min="0"
                            max="100"
                            value="50"
                    />
                </div>
            </>
        ) 
    }
}
export default connect(msp, mdp)(Musicplayer)

{/* <div className="all-buttons">

</div> */}