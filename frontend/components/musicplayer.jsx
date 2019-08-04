import React from 'react'

class Musicplayer extends React.Component {

    handleClickPlay(){

    }
    render(){
        return (
            <>                    
            <br/>
                <div className="all-controls">
                <div className="audio-controls faded">
                    <div className="audio-control-buttons">
                        
                            <audio controls>
                                <source src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBQQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b9f7931618c68e706bc505344e66131be79865f4/sweater_weather.mp3" 
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
                    </div>
                </div>
                </div>
            </>
        ) 
    }
}
export default Musicplayer