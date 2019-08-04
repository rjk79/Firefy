import React from 'react'

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
                    <div><img className="artist-show-album-photo" src={album.photoUrl} alt="album_img" /></div>
                      <div className="">{album.name}</div>
                </li>
            )
            }
           
            )
        
        let songs = this.props.songs.map(song =>
            <li key={song.id}>{song.title}</li>
            )
        
        return (
            <>
                <div className="artist-show">
                    <h1 className="artist-show-name center">{this.props.artist.name}</h1>
                    <img className="artist-photo" src={this.props.artist.photoUrl} alt="artist_img" />
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