import React from 'react'

class ArtistShow extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        

        let artistId = this.props.match.params.artistId
        this.props.fetchArtist(artistId)
    }

    render() {
        let albums = this.props.albums.map(album => 
            <li key={album.id}>{album.name}</li>
            )
        
        let songs = this.props.songs.map(song =>
            <li key={song.id}>{song.title}</li>
            )
        
        return (
            <>
                <div className="artist-show">
                    <h1>{this.props.artist.name}</h1>
                    <img className="artist-photo" src={this.props.artist.photo_url} alt="artist_img" />
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