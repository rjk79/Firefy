import React from 'react'
import { connect } from 'react-redux';
import { fetchAllSearches, deleteAllSearches } from '../actions/search_actions';
import {Link} from 'react-router-dom'

const msp = state => {
    let {songs, albums, artists, playlists} = state.entities.searches
    if (songs) songs = Object.values(songs)
    if (artists) artists = Object.values(artists)
    if (albums) albums = Object.values(albums)
    if (playlists) playlists = Object.values(playlists)
    return {
        songs, 
        albums, 
        artists,
        playlists
    }
}
const mdp = dispatch => {
    return {
        deleteAllSearches: () => dispatch(deleteAllSearches()),
        fetchAllSearches: string => dispatch(fetchAllSearches(string))
    }
}

class SearchComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = { query: "" }
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
        // debugger
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
            playlistLis = playlists.map(playlist => (
                <li key={playlist.id} className="search-songplaylistname lightup">
                    <Link to={`/playlist/${playlist.id}`}>{playlist.name}
                    </Link>
                </li>
        ))}
        if (songs){
            songLis = songs.map(song => (
                <li className="playlist-show-songli search-songplaylistname lightup" 
                    key={song.id} 
                >
                    {/* maybe just make this a song component */}
                    <p onClick={this.props.handleClickPickSong(song.id)}><img src={window.noteURL} />{song.title}</p>     
                </li>
            
        ))}
        let finishedSongs;
        let finishedAlbums;
        let finishedArtists;
        let finishedPlaylists;

        finishedSongs = songs ? <div>Songs<div className="search-category-songsplaylists">{songLis}</div></div> : null
        finishedAlbums = albums ? < div > Albums < br /> <div className="search-category">{albumLis}</div></div > : null
        finishedArtists = artists ? <div>Artists<br /><div className="search-category">{artistLis}</div></div> : null
        finishedPlaylists = playlists ? < div > Playlists < br /> <div className="search-category-songsplaylists">{playlistLis}</div></div > : null


        // let search = this.state.query === "" ? 
        let tooltip = !songs && !artists && !albums && !playlists ? <><p className="search-searchspotify">Search Spotify</p><p className="search-findyour">Find your favorite songs, artists, albums, podcasts, playlists.</p></> : null
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