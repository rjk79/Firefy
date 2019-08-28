import React from 'react'
import {Link} from 'react-router-dom'
import SongComponent from '../songs/song_component';

class AlbumShow extends React.Component {
    constructor(props) {
        super(props)
        this.handlePickSong = this.handlePickSong.bind(this)
    }
    componentDidMount() {
        let albumId = this.props.match.params.albumId
        this.props.fetchAlbum(albumId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.albumId != prevProps.match.params.albumId) {
            let albumId = this.props.match.params.albumId
            this.props.fetchAlbum(albumId)
        }
    }
    handlePickSong(songId) {
        this.props.receiveQueue(this.props.songs, songId)
    }

    render() {
        // if (!albums) return <> </>
        const {artist, album, songs} = this.props
        let songLis = songs.map(song => {
            return (

              <SongComponent key={song.id}
                        song={song}
                        artist={artist}
                        album={album}
                        handlePickSong={this.handlePickSong}
                />
            )
        }

        )
 
        return (
            <>
                <div className="album-show">
                    <h1 className="album-show-name center">{album.name}</h1>
                    <Link to={`/artist/${artist.id}`} className="center underlining"><p className="album-show-artist-name faded">{artist.name}</p></Link>
                    {/* <p className="center album-show-artist">{artist.name}</p> */}
                    <img className="album-photo" src={album.photoUrl} alt="album_img" />
                    <p className="center album-show-song-count">Songs: {songs.length}</p>
                    <div className="album-show-list-titles">Songs</div>
                    <ul>{songLis}</ul>
                    
                </div>
            </>
        )
    }
}

export default AlbumShow;