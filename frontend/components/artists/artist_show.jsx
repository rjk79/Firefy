import React from 'react'
import {Link} from 'react-router-dom'
import SongComponent from '../songs/song_component';
// import CreatePlaylistingComponent from '../playlisting/create_playlisting_button'

class ArtistShow extends React.Component {
    constructor(props){
        super(props)
        this.handlePickSong = this.handlePickSong.bind(this)

        // this.listRef = React.createRef(); //list

    }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     const list = this.listRef.current;
    //     return list.scrollHeight - list.scrollTop;
    // }
    componentDidMount() {
        let artistId = this.props.match.params.artistId
        this.props.fetchArtist(artistId)
    }

    componentDidUpdate(prevProps){ //snapshot
        if (this.props.match.params.artistId != prevProps.match.params.artistId) {
            let artistId = this.props.match.params.artistId
            this.props.fetchArtist(artistId)
        } 

        // const list = this.listRef.current;
        // list.scrollTop = list.scrollHeight - snapshot;
        
    }

    handlePickSong(songId) {
        this.props.receiveQueue(this.props.songs, songId)
    }

    render() {        
        const { artist, albums, songs } = this.props
        
        let albumLis = albums.map(album => {
            return (
                
                <li key={album.id}>
                    <Link className="artist-show-album-li" to={`/album/${album.id}`}>
                        {/* <div> */}
                            <img className="artist-show-album-photo" src={album.photoUrl} alt="album_img" />
                        {/* </div> */}
                        {/* <div className=""> */}
                            {album.name}
                        {/* </div> */}
                    </Link>
                </li>
            )
            }
           
            )
        
       
        
        let songLis = songs.map(song => 

                <SongComponent key={song.id}
                               song={song} 
                               artist={artist} 
                               album={albums.find(album => album.id === song.album_id)}
                               handlePickSong={this.handlePickSong}
                />
        )
        
        
        return (
            <>
                <div className="artist-show" ref={this.listRef}>
                    <h1 className="artist-show-name center">{artist.name}</h1>
                    {/* <div className="artist-show-shader">
                    </div> */}
                        <img className="artist-jumbo" src={artist.jumboUrl} alt="artist_jumbo" />
                    <div className="artist-show-list-titles">Popular</div>
                    <ul className="artist-show-song-list">{songLis}</ul>
                    <div className="artist-show-list-titles">Albums</div>
                    <ul className="artist-show-album_list">{albumLis}</ul>
                </div>
            </>
        )
    }
}

export default ArtistShow;