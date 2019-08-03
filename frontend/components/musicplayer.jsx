import React from 'react'

class Musicplayer extends React.Component {
    render(){
        return (
            <>                    
            <br/>
                <div className="all-controls">
                <div className="audio-controls faded">
                    <div className="audio-control-buttons">
                        <div className="back-button">
                                <img className="audio-button-img" src={window.controls_spriteURL} alt="Controls Img" />
                        </div>
                        <div className="play-button">   
                                <img className="audio-button-img" src={window.controls_spriteURL} alt="Controls Img" /> 
                        </div>
                        <div className="forward-button">
                                <img className="audio-button-img" src={window.controls_spriteURL} alt="Controls Img" />
                        </div>
                    </div>
                </div>
                </div>
            </>
        ) 
    }
}
export default Musicplayer