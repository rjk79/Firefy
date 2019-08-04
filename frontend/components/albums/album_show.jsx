import React from 'react'

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
        let songs = this.props.songs.map(song => {
            return (

                <li key={song.id}>
                    <div className="">{song.title}</div>
                </li>
            )
        }

        )

        return (
            <>
                <div className="album-show">
                    <h1 className="album-show-name center">{this.props.album.name}</h1>
                    <img className="album-photo" src={this.props.album.photoUrl} alt="album_img" />
                    <div className="album-show-list-songs">Songs</div>
                    <ul>{songs}</ul>
                </div>
            </>
        )
    }
}

export default AlbumShow;