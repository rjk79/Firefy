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
        return (
            <>
                <h1>{this.props.artist.name}</h1>
                <img src={this.props.artist.photo_url} alt="artist_img" />
            </>
        )
    }
}

export default ArtistShow;