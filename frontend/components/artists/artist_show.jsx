import React from 'react'
import {Link} from 'react-router-dom'
import SongComponent from '../songs/song_component';
// import CreatePlaylistingComponent from '../playlisting/create_playlisting_button'

class ArtistShow extends React.Component {
    constructor(props){
        super(props)
        this.handlePickSong = this.handlePickSong.bind(this)
    }
    componentDidMount() {
        let artistId = this.props.match.params.artistId
        this.props.fetchArtist(artistId)
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.artistId != prevProps.match.params.artistId) {
            let artistId = this.props.match.params.artistId
            this.props.fetchArtist(artistId)
        } 
    }
    // handleAddToPlaylist(songId){
        
    // }

    handlePickSong(songId) {
        this.props.receiveQueue(this.props.songs, songId)
    }

    render() {        
        
        let albums = this.props.albums.map(album => {
            return (
                
                <li key={album.id}>
                    <Link className="artist-show-album-li" to={`/album/${album.id}`}>
                        <div><img className="artist-show-album-photo" src={album.photoUrl} alt="album_img" /></div>
                        <div className="">{album.name}</div>
                    </Link>
                </li>
            )
            }
           
            )
        
        // for(let i = 0; i < i++){
        //     this.props.songs
        // }
        const { handlePickSong} = this.props
        
        let songs = this.props.songs.map(song => {
            // let album = this.props.albums[song.id]
            return (
            //     <li key={song.id}            className="darkening artist-show-song">
            //     <img src={window.noteURL} />
            //     {song.title}
            //  </li> 8/9

                <SongComponent key={song.id}
                               song={song} 
                               artist={this.props.artist} 
                               album={this.props.albums.find(album => album.id === song.album_id)}
                               handlePickSong={this.handlePickSong}
                />
            )
        })
        
        return (
            <>
                <div className="artist-show">
                    <h1 className="artist-show-name center">{this.props.artist.name}</h1>
                    <div className="artist-show-shader">
                    </div>
                        <img className="artist-jumbo" src={this.props.artist.jumboUrl} alt="artist_jumbo" />
                    <div className="artist-show-list-titles">Popular</div>
                    <ul className="artist-show-song-list">{songs}</ul>
                    <div className="artist-show-list-titles">Albums</div>
                    <ul className="artist-show-album_list">{albums}</ul>
                </div>
            </>
        )
    }
}

export default ArtistShow;