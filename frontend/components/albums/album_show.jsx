import React from 'react'
import {Link} from 'react-router-dom'

class AlbumShow extends React.Component {
    constructor(props) {
        super(props)
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

    render() {
        // if (!albums) return <> </>
        const {handleClickPickSong, artist} = this.props
        let songs = this.props.songs.map(song => {
            return (

                <li className="album-show-songli" key={song.id} onClick={handleClickPickSong(song.id)}>
                    <div className="darkening album-show-song-item">
                        <img src={window.noteURL}/>
                        {song.title}
                    </div>
                </li>
            )
        }

        )
 
        return (
            <>
                <div className="album-show">
                    <h1 className="album-show-name center">{this.props.album.name}</h1>
                    <Link to={`/artist/${artist.id}`} className="center underlining"><p className="album-show-artist-name faded">{artist.name}</p></Link>
                    {/* <p className="center album-show-artist">{artist.name}</p> */}
                    <img className="album-photo" src={this.props.album.photoUrl} alt="album_img" />
                    <p className="center album-show-song-count">Songs: {this.props.songs.length}</p>
                    <div className="album-show-list-titles">Songs</div>
                    <ul>{songs}</ul>
                    
                </div>
            </>
        )
    }
}

export default AlbumShow;