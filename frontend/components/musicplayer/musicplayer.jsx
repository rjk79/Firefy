import React from 'react'
import {connect} from 'react-redux'
import { fetchSong } from '../../actions/song.actions';
import {Link} from 'react-router-dom'

const msp = (state, ownProps) => {
    
    let song = state.entities.songs[ownProps.currentSongId] || {id: null, audioUrl: ""}
    let album = state.entities.albums[song.album_id] || {id: null}
    let artist = state.entities.artists[album.artist_id] || {}
    return {
        song,
        album,
        artist
    }
}

const mdp = dispatch => {
    return {
        fetchSong: id => dispatch(fetchSong(id)),
    }
}


class Musicplayer extends React.Component {
    constructor(props){
        // debugger
        super(props)
        this.state = {
            isPlaying: false,
            currTime: 0,
            volume: .5,
            duration: 0
        }
        this.handleClickPlayPause = this.handleClickPlayPause.bind(this)
        this.handleTimeChange = this.handleTimeChange.bind(this)
        this.handleVolumeChange = this.handleVolumeChange.bind(this)
        this.handleMute = this.handleMute.bind(this)
    }
    componentDidMount(){
        // debugger
    }
    componentDidUpdate(prevProps, prevState){
        if ((this.props.song.id !== prevProps.song.id) && (this.props.song.audioUrl)) {
            // debugger

            this.player.load()
            this.player.play()
            this.setState({isPlaying: true})
            this.resetTimer()
        }
        if (!isNaN(this.player.duration) && prevState.duration != this.state.duration) this.setState({duration: this.player.duration})
    }
     formatTime (secs) {
        // debugger
        let seconds = parseInt(secs)
        let minutes = Math.floor(seconds / 60)
        let netSeconds = seconds % 60
        if (netSeconds < 10) {
            return `${minutes}:0${netSeconds}`
        }
        else {
            return `${minutes}:${netSeconds}`
        }
    }

    resetTimer() {
        // debugger
        this.setState({ currTime: 0,
                        duration: this.player.duration })

        if (this.timer) clearTimeout(this.timer)
        this.timer = setInterval(
            () => {
                
                return this.setState({ currTime: parseFloat(this.state.currTime) + .2 })
            }
            , 200)
    }
    //DONE??
    handleClickPlayPause(){
        
        this.setState({isPlaying: !this.state.isPlaying})
        if (this.state.isPlaying) {
            this.player.pause()
            clearTimeout(this.timer)

        } else {
            this.player.play()  

            clearTimeout(this.timer)
            this.timer = setInterval(
                () => {
                    return this.setState({ currTime: parseFloat(this.state.currTime) + .5 })
                }
                , 500)  
        }
       
    } 
    handleMute(){
        debugger
        return this.player.muted = !this.player.muted
    }
    // SLIDERS
    handleVolumeChange(e){
        
        return this.setState({ volume: e.target.value }, () => {
            this.player.volume = this.state.volume
            if (this.state.volume === 0) this.player.muted = true
        })
    }
  
    handleTimeChange(e){
            
        return this.setState({ currTime: e.target.value }, ()=> {
            this.player.currentTime = this.state.currTime 
            if (this.player.ended) {
            //     debugger
                // this.handleClickPlayPause()  
            }
            // if (this.player.currentTime = this.player.duration) clearTimeout(this.timer)
        })  
    }

    handleForward(){
        return 
    }
    handleBack(){
        return 
    }
// type="audio/mpeg"





    render(){
        // debugger
        const {song, album, artist} = this.props
        
        const playpause = (this.state.isPlaying || (typeof this.props.song.id === 'undefined')) ? "audio-button-img pause-button-img" :"audio-button-img play-button-img" 

        
        return (
            <>                    
                <div className="musicplayer-1">
                    <Link to={`artist/${artist.id}`}><img className="player-album-art" src={album.photoUrl} alt="" /></Link>
                    {/* {albumArt} */}
                    <div className="player-song-artist">
                        <Link to={`album/${album.id}`}><p className="player-song-title underlining">{song.title}</p></Link>
                        <Link to={`artist/${artist.id}`}><p className="player-artist-name underlining">{artist.name}</p></Link>
                    </div> 
                </div>

                <div className="musicplayer-2">
                        
                    <div className="musicplayer-2-top faded">
                            
                                <audio  controls 
                                        ref={el => this.player = el}
                                        >  
                                    <source src={song.audioUrl}
                                    />
                                    Your browser does not support this file.
                                </audio>
                            <div className="back-button" onClick={this.handleBack()}>
                                    <img className="audio-button-img" src={window.controls_spriteURL} alt="Controls Img" />
                            </div>
                            <div className="play-button" onClick={this.handleClickPlayPause}>   
                                <img className={playpause} src={window.controls_spriteURL} alt="playImg" />                             
                            </div>
                            <div className="forward-button">
                            <img className="audio-button-img" onClick={this.handleForward()} src={window.controls_spriteURL} alt="Controls Img" />
                            </div>
                            {/* <div className="prog-bar-holder">
                                <div className="prog-bar"></div>
                            </div> */}
                        </div>
                    <div className="musicplayer-2-bottom">
                        <p className="time-label">{this.formatTime(this.state.currTime)}</p>
                        {/* <p>current_play_time {this.player.currentTime}</p> */}
                        <input className="time-slider" 
                               min="0"
                               max={this.state.duration || ""}
                               type="range"
                               value={this.state.currTime}
                               onChange={this.handleTimeChange}
                               step=".5"
                        />
                        <p className="time-label">{this.formatTime(this.state.duration)}</p>
                    </div>
                </div>

                <div className="musicplayer-3">
                    <img className="vol-img lightup" onClick={this.handleMute} src={window.volumeURL} alt="vol"/> 
                    <input className="volume-slider" 
                            type="range"
                            min="0"
                            max="1"
                            step=".1"
                            value={this.state.volume}
                            onChange={this.handleVolumeChange}
                    />
                </div>
            </>
        ) 
    }
}
export default connect(msp, mdp)(Musicplayer)
