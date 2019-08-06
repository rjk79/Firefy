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
            isPlaying: false
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
    // handleClickForward(){

    // }
    // handleClickBack(){

    // }
// type="audio/mpeg"
    // src = { song.audioUrl }
    render(){
        const {song} = this.props
        // debugger
        return (
            <>                    
                <div className="musicplayer-1"><p className="player-song-title">{song.title}</p></div>

                <div className="musicplayer-2">
                        
                    <div className="musicplayer-2-top faded">
                            
                                <audio controls ref={el => this.player = el}>  
                                    {/* <source src={song.audioUrl} */}
                                    />
                                    Your browser does not support this file.
                                </audio>
                            <div className="back-button">
                                    <img className="audio-button-img" src={window.controls_spriteURL} alt="Controls Img" />
                            </div>
                            <div className="play-button" onClick={this.handleClickPlayPause}>   
                                    <img className="audio-button-img" src={window.controls_spriteURL} alt="Controls Img" /> 
                            </div>
                            <div className="forward-button">
                                    <img className="audio-button-img" src={window.controls_spriteURL} alt="Controls Img" />
                            </div>
                            {/* <div className="prog-bar-holder">
                                <div className="prog-bar"></div>
                            </div> */}
                        </div>
                    <div className="musicplayer-2-bottom">
                        {/* <p>current_play_time {this.player.currentTime}</p> */}
                        <input className="time-slider" type="range"></input>
                        {/* <p>total_play_time{this.player.duration}</p> */}
                    </div>
                </div>

                <div className="musicplayer-3">
                    Volume
                    <input className="time-slider" type="range"></input>
                </div>
            </>
        ) 
    }
}
export default connect(msp, mdp)(Musicplayer)

{/* <div className="all-buttons">

</div> */}