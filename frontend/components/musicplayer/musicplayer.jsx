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
        if (this.props.song != prevProps.song) {
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

    render(){
        const {song} = this.props
        return (
            <>                    
            <br/>
                <div className="all-controls">
                    <p className="player-song-title">{song.title}</p>
                <div className="audio-controls faded">
                    <div className="audio-control-buttons">
                        
                            <audio controls ref={ref => this.player = ref}>  
                                <source src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2…e6223bff378231a5b00de3677/death_of_a_bachelor.mp3"
                                        type="audio/mpeg"
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
