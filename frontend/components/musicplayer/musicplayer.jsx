import React from 'react'
import {connect} from 'react-redux'
import { fetchSong } from '../../actions/song.actions';
import {Link} from 'react-router-dom'
import { receiveCurrentSongId } from '../../actions/musicplayer_actions';

const msp = (state) => {
    
    let song 
    if (state.musicplayer && state.musicplayer.queue && state.musicplayer.currSongId) {
    // let song = state.musicplayer.queue && state.musicplayer.queue[0] || {id: null, audioUrl: ""}
        song = state.entities.songs[state.musicplayer.currSongId]
    }
    else {
        song= { id: null, audioUrl: "" }
    } 
    
    let album = state.entities.albums[song.album_id] || {id: null}
    let artist = state.entities.artists[album.artist_id] || {}
    
    let currSongId;
    if (state.musicplayer) { currSongId = state.musicplayer.currSongId || null }
    let songqueue;
    if (state.musicplayer) {songqueue = state.musicplayer.songqueue || []}
    return {
        song,
        album,
        artist,
        currSongId,
        songqueue,
    }
}
  
const mdp = dispatch => {
    return {
        fetchSong: id => dispatch(fetchSong(id)),
        receiveCurrentSongId: id => dispatch(receiveCurrentSongId(id))
    }
}


class Musicplayer extends React.Component {
    constructor(props){
        // debugger
        super(props)
        this.state = {
            isPlaying: false,
            currTime: 0,
            volume: .1,
            duration: 0,
            looping: false,
            currentSongId: null,
        }
        this.handleClickPlayPause = this.handleClickPlayPause.bind(this)
        this.handleTimeChange = this.handleTimeChange.bind(this)
        this.handleVolumeChange = this.handleVolumeChange.bind(this)
        this.handleMute = this.handleMute.bind(this)
        this.handleBack = this.handleBack.bind(this)
        this.handleForward = this.handleForward.bind(this)
        this.handleToggleLoop = this.handleToggleLoop.bind(this)
    } 
    componentDidMount(){
        // window.addEventListener('keypress', (e) => {
        //     let key = e.which || e.keyCode; 
        //     if (key === 32) {
        //         this.handleClickPlayPause()
        //     }
        // });
        this.player.onended = ()=>{
            // this.setState({currTime: 0})
            return clearTimeout(this.timer)
        }
            // stops the timer and itll stop updating state
                                      
        document.getElementsByClassName('time-slider-wrapper')[0].addEventListener('mouseenter', () => {
            document.getElementsByClassName('time-slider-wrapper')[0].classList.add("green-bar")
            document.getElementsByClassName('fake-thumb')[0].style.display = "inherit"
        })                                        
        document.getElementsByClassName('time-slider-wrapper')[0].addEventListener('mouseleave', () => {
            document.getElementsByClassName('time-slider-wrapper')[0].classList.remove("green-bar")
            document.getElementsByClassName('fake-thumb')[0].style.display = "none"
        })
        this.player.ontimeupdate = e => {
            document.getElementsByClassName('fake-thumb')[0].style.left = `${Math.floor(this.state.currTime * 100 /this.state.duration)}%`;
        }      
        // VOLUME
        document.getElementsByClassName('volume-slider-wrapper')[0].addEventListener('mouseenter', () => {
            document.getElementsByClassName('volume-slider-wrapper')[0].classList.add("green-bar")
            document.getElementsByClassName('fake-volume-thumb')[0].style.display = "inherit"
        })                                        
        document.getElementsByClassName('volume-slider-wrapper')[0].addEventListener('mouseleave', () => {
            document.getElementsByClassName('volume-slider-wrapper')[0].classList.remove("green-bar")
            document.getElementsByClassName('fake-volume-thumb')[0].style.display = "none"
        })
        this.player.onvolumechange = e => {
            document.getElementsByClassName('fake-volume-thumb')[0].style.left = `${Math.floor(this.state.volume * 100 / 1.0)}%`;
        }      


        // find find which idx corresp to the curr song. 
        // if the idx is not the last one
        this.player.onended = e => {
            let currentIdx = this.props.songqueue.find(song => {
                debugger
                return song.id === this.state.currentSongId})
            if (currentIdx !== songqueue.length - 1) {
                currentIdx ++
                debugger
                this.setState({currentSongId: this.props.songqueue[currentIdx].id})
                receiveCurrentSongId(this.state.currentSongId)
            }

        }
        // this.player.ended => 


        // this.player.ontimeupdate = e => {
        //     this.setState({
        //         currentTime: e.target.currentTime,
        //         duration: e.target.duration,
        //     })
        // }
    }
    componentWillUnmount(){
        let oldEl = document.getElementsByClassName('time-slider-wrapper')[0]
        let newEl = oldEl.cloneNode(true)
        oldEl.parentNode.replaceChild(newEl, oldEl)

        let oldEl2 = document.getElementsByClassName('volume-slider-wrapper')[0]
        let newEl2 = oldEl.cloneNode(true)
        oldEl2.parentNode.replaceChild(newEl2, oldEl2)

    }
    componentDidUpdate(prevProps, prevState) {
        //NEW SONG
        
        if ((this.props.song.id !== prevProps.song.id) && (this.props.song.audioUrl)) {
            
            this.setState({currentSongId: this.props.currSongId})
            this.player.load()
            this.player.play()
            this.setState({ isPlaying: true })
            this.resetTimer()
            this.setState({queue: this.props.songqueue})
        }
        if (!isNaN(this.player.duration) && prevState.duration != this.state.duration) this.setState({ duration: this.player.duration })
    }
    formatTime(secs) {
        // debugger
        let seconds = parseInt(secs)
        let minutes = Math.floor(seconds / 60)
        let netSeconds = seconds % 60
        minutes = isNaN(minutes) ? "0" : minutes
        netSeconds = isNaN(netSeconds) ? "0" : netSeconds
    
        if (netSeconds < 10) {
            return `${minutes}:0${netSeconds}`
        }
        else {
            return `${minutes}:${netSeconds}`
        }
    }
    handleMute() {
        this.player.muted = !this.player.muted
        if (this.player.muted) {this.state.volume = 0 }
        else {this.state.volume = .5}
        //if volume is not 0
    }
    //opposites ^v
    handleVolumeChange(e) {
        return this.setState({ volume: e.target.value }, () => {
            this.player.volume = this.state.volume
            if (this.state.volume === 0) {
                this.player.muted = true
            }
        })
    }
    handleClickPlayPause() {
        if (this.player.currentSrc){
            this.setState({ isPlaying: !this.state.isPlaying })
            if (this.state.isPlaying) {
                this.player.pause()
                clearTimeout(this.timer)

            } else if (this.player.currentSrc && this.player.ended){
                this.player.load()
                this.player.play()
                this.resetTimer()
                //will play the song again if you push the button but the song ended
                // this.handleClickPlay()

            } 
            else {
                this.player.play()
                clearTimeout(this.timer)
                this.timer = setInterval(
                    () => {
                        return this.setState({ currTime: parseFloat(this.state.currTime) + .5 })
                    }
                    , 500)
            }}
    } 
    handleToggleLoop(){
        this.player.loop = !this.player.loop
        this.state.looping = !this.state.looping
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

    // SLIDERS
      handleTimeChange(e){
            
        return this.setState({ currTime: e.target.value }, ()=> {
            this.player.currentTime = this.state.currTime 
        })  
    }

    handleForward(){
        const {songqueue, receiveCurrentSongId} = this.props
        if (this.player.currentSrc){
            // debugger
            this.player.currentTime = this.state.duration - 1
            this.state.currTime = 0
            // let currentIdx = songqueue.find(song => {
                // debugger
            //     return song.id === this.state.currentSongId})
            // if (currentIdx !== -1 && currentIdx !== songqueue.length - 1) {
            //     currentIdx ++
            //     debugger
            //     this.setState({currentSongId: this.songqueue[currentIdx].id})
            //     receiveCurrentSongId(this.songqueue[currentIdx].id)
            // }
            // debugger
            
        }
        return 
    }
    handleBack(){
        if (this.player.currentSrc) {
            this.player.load()
            this.player.play()
            this.resetTimer()
        }
        return 
    }

    render(){
        // debugger
        const {song, album, artist} = this.props
        
        let checkedVolumeUrl;
        let loopImg;

        if (this.player){
            loopImg = this.player.loop ? <img className="loop-img" src={window.loopURL} alt="loop" /> : <img className="loop-img morefaded" src={window.loopURL} alt="loop" />
            checkedVolumeUrl = (this.player.muted || this.state.volume === 0) ? window.volume_muteURL : window.volumeURL
        }
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
                                    File not supported.
                                </audio>
                            <div className="back-button" onClick={this.handleBack}>
                                    <img className="audio-button-img" src={window.controls_spriteURL} alt="Controls Img" />
                            </div>
                            <div className="play-button" onClick={this.handleClickPlayPause}>   
                                <img className={playpause} src={window.controls_spriteURL} alt="playImg" />                             
                            </div>
                            <div className="forward-button">
                            <img className="audio-button-img" onClick={this.handleForward} src={window.controls_spriteURL} alt="Controls Img" />
                            </div>
                            <div className="loop-container" onClick={this.handleToggleLoop}>
                                {loopImg}
                            </div>
                            {/* <div className="prog-bar-holder">
                                <div className="prog-bar"></div>
                            </div> */}
                        </div>
                    <div className="musicplayer-2-bottom">
                        <p className="time-label">{this.formatTime(this.state.currTime)}</p>
                        {/* <p>current_play_time {this.player.currentTime}</p> */}
                        <div className="time-slider-wrapper">
                            <div className="fake-thumb"></div>
                        <input className="time-slider mouse" 
                               min="0"
                               max={this.state.duration || ""}
                               type="range"
                               value={this.state.currTime}
                               onChange={this.handleTimeChange}
                               step=".5"
                               id="mouse"
                        />
                        </div>
                        {/* <div className="seekbar-container"></div> */}
                        <p className="time-label">{this.formatTime(this.state.duration)}</p>
                    </div>
                </div>

                <div className="musicplayer-3">
                    <img className="vol-img lightup" onClick={this.handleMute} src={checkedVolumeUrl} alt="vol"/> 
                    <div className="volume-slider-wrapper">
                        <div className="fake-volume-thumb"></div>
                    <input className="volume-slider" 
                            type="range"
                            min="0"
                            max="1"
                            step=".1"
                            value={this.state.volume}
                            onChange={this.handleVolumeChange}
                    />
                    </div>
                    {/* Volume icon doesnt auto when manually drag bar and state.currTime doesnt reset upon loop trigger */}
                </div>
            </>
        ) 
    }
}
export default connect(msp, mdp)(Musicplayer)
