import React from 'react'
import { connect } from 'react-redux';
import { fetchAllSearches, deleteAllSearches } from '../actions/search_actions';
import {Link} from 'react-router-dom'
import { receiveQueue } from '../actions/musicplayer_actions';
import SongComponent from './songs/song_component';

const msp = state => {

    let {songIds, albumIds, artistIds, playlistIds} = state.searches
    let songs
    let artists
    let albums
    let playlists
    if (songIds) songs = songIds.map(id => state.entities.songs[id])
    if (artistIds) artists = artistIds.map(id => state.entities.artists[id])
    if (albumIds) albums = albumIds.map(id => state.entities.albums[id])
    if (playlistIds) playlists = playlistIds.map(id => state.entities.playlists[id])
    
    let currSongId;
    if (state.musicplayer) { currSongId = state.musicplayer.currSongId || null }
    return {
        songs, 
        albums, 
        artists,
        playlists,
        currSongId,
    }
}
const mdp = dispatch => {
    return {
        deleteAllSearches: () => dispatch(deleteAllSearches()),
        fetchAllSearches: string => dispatch(fetchAllSearches(string)),
        receiveQueue: (songs, currSongId) => dispatch(receiveQueue(songs, currSongId)),
    }
}

class SearchComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = { query: "" }
        this.handlePickSong = this.handlePickSong.bind(this)
    }
    componentDidMount(){
        window.addEventListener('keypress',  (e) => {
            let key = e.which || e.keyCode; //acounts for browsers
            if (key === 13 && this.state.query.length) {
                this.props.fetchAllSearches(this.state.query)
                this.setState({ query: "" })
                this.props.deleteAllSearches()
            }
        });
    }
    // handleSearch(){

    // }

    //UNMOUNT   //UNMOUNT   //UNMOUNT   //UNMOUNT   //UNMOUNT   //UNMOUNT   //UNMOUNT   //UNMOUNT   
    componentWillUnmount(){
        window.removeEventListener('keypress',  (e) => {
            let key = e.which || e.keyCode; //acounts for browsers
            if (key === 13) {
                this.props.fetchAllSearches(this.state.query)
                this.setState({ query: "" })
                this.props.deleteAllSearches()
            }
        });
        // this.props.deleteAllSearches()
    }
    handlePickSong(songId) {
        this.props.receiveQueue(this.props.songs, songId)
    }

    handleChange(field) {
        
        return e => this.setState({
            [field]: e.target.value
        })
    }
    render(){
        
        const { artists, albums, playlists, songs } = this.props
        let artistLis;
        let albumLis;
        let songLis;
        let playlistLis;
        // 
        if (artists){
            artistLis = artists.map(artist => (
                <li key={artist.id} className="artist-index-item search-item">
                    <Link to={`/artist/${artist.id}`} className="search-item-link">
                        <img className="artist-photo" src={artist.photoUrl} />
                        {artist.name}
                    </Link>
                </li>
        ))}
        if (albums){
            albumLis = albums.map(album => (
                <li key={album.id} className="album-index-item search-item">
                    <Link to={`/album/${album.id}`} className="search-item-link">
                        <img className="album-photo" src={album.photoUrl} />
                        {album.name}
                    </Link>
                </li>
        ))}
        if (playlists){
            playlistLis = playlists.map(playlist => {
                let playlistUrl = playlist.photoUrl || window.default_albumURL     
                return (
                <li key={playlist.id} className="search-songplaylistname lightup">
                    <Link to={`/playlist/${playlist.id}`} className="search-item-link">
                        <img className="album-photo" src={playlistUrl} />
                        {playlist.name}
                    </Link>
                </li>
        )})}
        if (songs){
            songLis = songs.map(song => (
                <SongComponent key={song.id} 
                               song={song}
                               album={{name: ""}}
                               artist={{name: ""}}
                               handlePickSong={this.handlePickSong}
                />
            
        ))}
        let finishedSongs;
        let finishedAlbums;
        let finishedArtists;
        let finishedPlaylists;
                
        finishedSongs = songs && songs.length ? <div><p className="search-title">Songs</p>
                                    <div className="search-category-songsplaylists">
                                    {songLis}</div></div> : null
        finishedAlbums = albums && albums.length ? < div><p className="search-title"> Albums </p><br/> 
                                    <div className="search-category">
                                    {albumLis}</div></div > : null
        finishedArtists = artists && artists.length ? <div><p className="search-title">Artists</p><br/>
                                        <div className="search-category">
                                        {artistLis}</div></div> : null
        finishedPlaylists = playlists && playlists.length ? < div > <p className="search-title">Playlists</p> < br /> 
                                                <div className="search-category">
                                                {playlistLis}</div></div > : null

                
        // let search = this.state.query === "" ? 
        let tooltip = !songs && !artists && !albums && !playlists ? <><p className="search-searchfirefy">Search Firefy</p><p className="search-findyour">Find your favorite songs, artists, albums, podcasts, playlists.</p></> : null
        return (
            <div className="search-area">
                <input 
                    type="text" 
                    value={this.state.query} 
                    onChange={this.handleChange("query")} 
                    placeholder="Start Typing..." 
                    className="search-input"
                />
                {finishedSongs}                
                {finishedArtists}
                {finishedAlbums}
                {finishedPlaylists}

                {tooltip}
            </div>
        )
    }

}

export default connect(msp, mdp)(SearchComponent)