import React from 'react'
import {connect} from 'react-redux'
import { fetchSong } from '../../actions/song.actions';
import {Link} from 'react-router-dom'
import { receiveCurrentSongId } from '../../actions/musicplayer_actions';
import {createLike, deleteLike} from '../../actions/like_actions'

const msp = (state) => {
    let currentUser = state.entities.users[state.session.id]

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
    let queue;
    if (state.musicplayer) {queue = state.musicplayer.queue || []}
    return {
        song,
        album,
        artist,

        currSongId,
        queue,
        currentUser,
    }
}

const mdp = dispatch => {
    return {
        fetchSong: id => dispatch(fetchSong(id)),
        receiveCurrentSongId: id => dispatch(receiveCurrentSongId(id)),
        createLike: like => dispatch(createLike(like)),
        deleteLike: id => dispatch(deleteLike(id))
    }
}


class Musicplayer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isPlaying: false,
            currTime: 0,
            duration: 0,
            volume: .1,
            currentSongId: null,
            looping: false,
            shuffling: false,
        }
        this.handleClickPlayPause = this.handleClickPlayPause.bind(this)
        this.handleTimeChange = this.handleTimeChange.bind(this)
        this.handleVolumeChange = this.handleVolumeChange.bind(this)
        this.handleMute = this.handleMute.bind(this)
        this.handleBack = this.handleBack.bind(this)
        this.handleForward = this.handleForward.bind(this)
        this.handleToggleLoop = this.handleToggleLoop.bind(this)
        this.handleToggleShuffle = this.handleToggleShuffle.bind(this)
        this.handleCreateLike = this.handleCreateLike.bind(this)
    }
    componentDidMount(){

        // window.addEventListener('keypress', (e) => {
        //     let key = e.which || e.keyCode;
        //     if (key === 32) {
        //         this.handleClickPlayPause()
        //     }
        // });

            // stops the timer and itll stop updating state

        // TIME
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


        this.player.onended = () => {
            const {queue, receiveCurrentSongId} = this.props
            clearTimeout(this.timer)
            let currentIdx = this.props.queue.findIndex(song => song.id === this.state.currentSongId)
            if (currentIdx !== this.props.queue.length - 1) {
                if (!this.state.shuffling) {
                    currentIdx++
                    this.setState({ currentSongId: this.props.queue[currentIdx].id }, () => this.props.receiveCurrentSongId(this.state.currentSongId))
                }
                else { //shuffling
                    currentIdx = Math.floor(Math.random() * this.props.queue.length)//not keeping track of what was already shuffled thru
                    this.setState({ currentSongId: this.props.queue[currentIdx].id }, () => this.props.receiveCurrentSongId(this.state.currentSongId))
                }
            }
            //if it is the last song
            else if (currentIdx === this.props.queue.length - 1 && this.state.looping) {
                this.setState({ currentSongId: this.props.queue[0].id }, () => this.props.receiveCurrentSongId(this.state.currentSongId))
            }
        };

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
            const notActivated = ["shuffle-button", "back-button", "play-button", "forward-button", "loop-container", "time-slider-wrapper", "queue-link", "time-label"]
            for (let i = 0;i< notActivated.length;i++){
                let currClass = notActivated[i]
                if (currClass !== "time-label"){
                    document.getElementsByClassName(currClass)[0].classList.remove("hidden")
                } else {
                    document.getElementsByClassName(currClass)[0].classList.remove("hidden")
                    document.getElementsByClassName(currClass)[1].classList.remove("hidden")
                }
            }
            document.getElementsByClassName("time-slider")[0].disabled = false
            document.getElementsByClassName("like-button")[0].style.pointerEvents = "auto"
            this.setState({currentSongId: this.props.currSongId})
            this.player.load()
            this.player.play()
            this.setState({ isPlaying: true })
            this.resetTimer()
            this.setState({queue: this.props.queue})
        }
        if (!isNaN(this.player.duration) && prevState.duration != this.state.duration) this.setState({ duration: this.player.duration })

    }
    formatTime(secs) {
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
        if (this.player.muted) {this.setState({volume: 0})}
        else {this.setState({volume: .5})}
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
                // will play the song again if you push the button but the song ended
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
        this.setState({looping: !this.state.looping})
    }
    handleToggleShuffle(){
        this.setState({shuffling: !this.state.shuffling})
    }


    resetTimer() {
        //
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
        this.setState({ currTime: e.target.value }, ()=> {
            this.player.currentTime = this.state.currTime
        })
    }

    handleForward(){

        if (this.player.currentSrc){
            //
            this.player.currentTime = this.state.duration - 1
            this.state.currTime = 0
            // let currentIdx = songqueue.find(song => {
                //
            //     return song.id === this.state.currentSongId})
            // if (currentIdx !== -1 && currentIdx !== songqueue.length - 1) {
            //     currentIdx ++
            //
            //     this.setState({currentSongId: this.songqueue[currentIdx].id})
            //     receiveCurrentSongId(this.songqueue[currentIdx].id)
            // }
            //

        }
        return
    }
    handleBack(){
        const { queue, receiveCurrentSongId } = this.props
        if (this.state.currTime === 0) {
            let currentIdx = queue.findIndex(song => song.id === this.state.currentSongId)


            if (currentIdx !== 0) {
                currentIdx --
                this.setState({ currentSongId: queue[currentIdx].id },
                    () => receiveCurrentSongId(this.state.currentSongId))
            }
        }

        else if (this.player.currentSrc) {
            this.player.load()
            this.player.play()
            this.resetTimer()
        }
        return
    }
    handleCreateLike(){
        this.props.createLike({ user_id: this.props.currentUser.id, song_id: this.state.currentSongId })
        document.getElementsByClassName("liked-popup")[0].style.display = "flex"
        document.getElementsByClassName("liked-popup")[0].innerText = "Added to Your Library"
        setTimeout(() => { document.getElementsByClassName("liked-popup")[0].style.display = "none"}, 2000)
    }

    render(){
        //
        const {song, album, artist, createLike, deleteLike, currentUser} = this.props

        let checkedVolumeUrl;
        let loopImg;
        let shuffleImg

        if (this.player){
            loopImg = this.state.looping ? <img className="loop-img" src={window.loopURL} alt="loop" />
                                         : <img className="loop-img morefaded" src={window.loopURL} alt="loop" />
            shuffleImg = this.state.shuffling ? <img className="shuffle-img" src={shuffleURL} alt="shuffle" />
                                         : <img className="shuffle-img morefaded" src={shuffleURL} alt="shuffle" />
            checkedVolumeUrl = (this.player.muted || this.state.volume === 0) ? window.volume_muteURL : window.volumeURL
        }

        const playpause = (this.state.isPlaying || (typeof song.id === 'undefined')) ? "audio-button-img pause-button-img" :"audio-button-img play-button-img"

        let likeButton;

        likeButton = !currentUser.liked_song_ids.includes(this.state.currentSongId) ?
            <img src={likeURL} className={`like-button mostfaded ${this.state.currentSongId ? "":"hidden"}`} onClick={this.handleCreateLike}/> :
            <img src={likeURL} className={`like-button ${this.state.currentSongId ? "" : "hidden"}`} onClick={() => deleteLike(this.state.currentSongId)}/>

        return (
            <>
                <div className="liked-popup"></div>
                <div className="musicplayer-1">
                    <Link to={`/artist/${artist.id}`}><img className="player-album-art" src={album.photoUrl} alt="" /></Link>
                    {/* {albumArt} */}
                    <div className="player-song-artist">
                        <Link to={`/album/${album.id}`}><p className="player-song-title underlining">{song.title}</p></Link>
                        <Link to={`/artist/${artist.id}`}><p className="player-artist-name underlining">{artist.name}</p></Link>
                    </div>
                    {likeButton}
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

                            <div className="shuffle-button hidden" onClick={this.handleToggleShuffle}>
                                {shuffleImg}
                            </div>
                            <div className="back-button hidden" onClick={this.handleBack}>
                                    <img className="audio-button-img" src={window.controls_spriteURL} alt="Controls Img" />
                            </div>
                            <div className="play-button hidden" onClick={this.handleClickPlayPause}>
                                <img className={playpause} src={window.controls_spriteURL} alt="playImg" />
                            </div>
                            <div className="forward-button hidden">
                            <img className="audio-button-img" onClick={this.handleForward} src={window.controls_spriteURL} alt="Controls Img" />
                            </div>
                            <div className="loop-container hidden" onClick={this.handleToggleLoop}>
                                {loopImg}
                            </div>
                            {/* <div className="prog-bar-holder">
                                <div className="prog-bar"></div>
                            </div> */}
                        </div>
                    <div className="musicplayer-2-bottom">
                        <p className="time-label hidden">{this.formatTime(this.state.currTime)}</p>
                        {/* <p>current_play_time {this.player.currentTime}</p> */}
                        <div className="time-slider-wrapper hidden">
                            <div className="fake-thumb"></div>
                        <input className="time-slider mouse"
                               min="0"
                               max={this.state.duration || ""}
                               type="range"
                               value={this.state.currTime}
                               onChange={this.handleTimeChange}
                               step=".5"
                               id="mouse"
                               disabled
                        />
                        </div>
                        {/* <div className="seekbar-container"></div> */}
                        <p className="time-label hidden">{this.formatTime(this.state.duration)}</p>
                    </div>
                </div>

                <div className="musicplayer-3">
                    <Link to="/queue" className="queue-link hidden">
                    <img className="queue-img lightup" src={queueURL} alt="queue" />
                    </Link>
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
