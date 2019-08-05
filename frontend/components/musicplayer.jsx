import React from 'react'
import {connect} from 'react-redux'



class Musicplayer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentSongId: this.props.currentSongId,
            playStatus: false
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
        return (
            <>                    
            <br/>
                <div className="all-controls">
                <div className="audio-controls faded">
                    <div className="audio-control-buttons">
                        
                            <audio controls ref={ref => this.player = ref}>
                                {/* <source src={this.state.currentSongId  */}
                                />
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
                </div>
                </div>
            </>
        ) 
    }
}
export default Musicplayer
