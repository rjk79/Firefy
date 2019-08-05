import React from 'react'
import {Link} from 'react-router-dom'

class ArtistShow extends React.Component {
    constructor(props){
        super(props)
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

    render() {
        // if (!albums) return <> </>
        

        let albums = this.props.albums.map(album => {
            return (
                
                <li key={album.id}>
                    <Link to={`/album/${album.id}`}>
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
        const { handleClickPickSong} = this.props
        let songs = this.props.songs.map(song => {
            // debugger
            // let album = this.props.albums[song.id]
            return (
            <li key={song.id} onClick={handleClickPickSong(song.id)}>
                {song.title}
                {/* <img src={album.photoUrl} alt="album_art"/> */}
            </li>
            )
        })
        
        return (
            <>
                <div className="artist-show">
                    <h1 className="artist-show-name center">{this.props.artist.name}</h1>
                    <div className="artist-show-shader">
                        <img className="artist-jumbo" src={this.props.artist.jumboUrl} alt="artist_jumbo" />
                    </div>
                    <div className="artist-show-list-titles">Popular</div>
                    <ul className="artist-show-song-list">{songs}</ul>
                    <div className="artist-show-list-titles">Albums</div>
                    <ul>{albums}</ul>
                </div>
            </>
        )
    }
}

export default ArtistShow;