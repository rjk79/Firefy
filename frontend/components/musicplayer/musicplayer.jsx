import React from 'react'
import {connect} from 'react-redux'
import { fetchSong } from '../../actions/song.actions';

const msp = (state, ownProps) => {
    
    let song = state.entities.songs[ownProps.currentSongId] || {audioUrl: ""}
    return {
        song
    }
}

const mdp = dispatch => {
    return {
        fetchSong: id => dispatch(fetchSong(id))
    }
}


class Musicplayer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            playStatus: false
        }
    }

    componentDidMount(){
        this.props.fetchSong(this.props.song.id)
    }


    componentDidUpdate(prevProps){
        debugger
        if (this.props.song != prevProps.song) {
            this.player.load()
            this.player.play()
        }
    }
    // handleClickPlayPause(){
    //     this.state.playing = !this.state.playing
    //     if (this.state.playing) {
    //         this.player.play()
    //     } else {
    //         this.player.pause()
    //     }
    // }
    // handleClickForward(){

    // }
    // handleClickBack(){

    // }
// type="audio/mpeg"
    // src = { song.audioUrl }
    render(){
        const {song} = this.props
        debugger
        return (
            <>                    
            <br/>
                <div className="all-controls">
                    <p className="player-song-title">{song.title}</p>
                <div className="audio-controls faded">
                    <div className="audio-control-buttons">
                        
                            <audio controls ref={ref => this.player = ref}>  
                                <source src={song.audioUrl}
                                />
                                Your browser does not support this file.
                            </audio>
                        <div className="back-button">
                                <img className="audio-button-img" src={window.controls_spriteURL} alt="Controls Img" />
                        </div>
                        <div className="play-button">   
                                <img className="audio-button-img" src={window.controls_spriteURL} alt="Controls Img" /> 
                        </div>
                        <div className="forward-button">
                                <img className="audio-button-img" src={window.controls_spriteURL} alt="Controls Img" />
                        </div>
                        {/* <div className="prog-bar-holder">
                            <div className="prog-bar"></div>
                        </div> */}

                    </div>
                    <p>current_play_time</p>
                    <input className="time-slider" type="slider"></input>
                    <p>total_play_time</p>

                    <input className="time-slider" type="slider"></input>

                </div>
                </div>
            </>
        ) 
    }
}
export default connect(msp, mdp)(Musicplayer)
