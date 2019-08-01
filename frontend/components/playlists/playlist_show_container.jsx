import React from 'react'
import {fetchPlaylist, fetchAllPlaylists} from '../../actions/playlist_actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PlaylistShow from './playlist_show'
//msp => mdp => didMount => other didMount
const msp = (state, ownProps) => {
    let playlistId = ownProps.match.params.playlistId //grab the ID

    fetchPlaylist(playlistId) //populate the state with the playlist and songs
    
    let playlist = state.entities.playlists[playlistId] //get the playlist within the state

    debugger
    let songs = playlist.song_ids.map(id => 
        state.entities.songs[id]
        
        )
    return {
        playlist,
        songs
    }
}

const mdp = dispatch => {
    return {
        fetchPlaylist: id => dispatch(fetchPlaylist(id))
    }
}

class PlaylistShowContainer extends React.Component {
    constructor(props){
        this.state = {playlist: {}}
    }
    componentDidMount(){ 
        let playlistId = this.props.match.params.playlistId
        let playlist = this.props.fetchPlaylist(playlistId)
        this.setState({playlist})
    }

    render (){
        
        return (
           <>
            <PlaylistShow playlist={playlist} songs={songs} />
          </>  
        )
    }
}

export default withRouter(connect(msp, mdp)(PlaylistShowContainer))