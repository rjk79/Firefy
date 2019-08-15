import React from 'react'
import {connect} from 'react-redux'
import {fetchAllUsers} from '../../actions/user_actions'
import {Link} from 'react-router-dom'
import { deleteFriendship } from '../../actions/friendship_actions';
 
const msp = state => {
    let users = Object.values(state.entities.users)
    let currentUserId = state.session.id
    
    let friends = users.filter(user => 
        state.entities.users[currentUserId].friend_ids.includes(user.id)
        )
    let playlists = Object.values(state.entities.playlists)
    return {
        friends,
        playlists,
    }
}
const mdp = dispatch => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        deleteFriendship: id => dispatch(deleteFriendship(id))
    }
}

class FriendsIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentFriendId: null
        }
        this.clickFriend = this.clickFriend.bind(this)
        this.handleDeleteFriend = this.handleDeleteFriend.bind(this)
    }
    componentDidMount(){
        this.props.fetchAllUsers()
    }
    clickFriend(id){
        return () => this.setState({currentFriendId: id})
    }
    handleDeleteFriend(id) {
        return () => this.props.deleteFriendship(id)
    }
    render(){
        const { friends, playlists } = this.props
        let usernames = friends.map(user => (
            <div key={user.id} className="friends-index-username-remove">
            <li className="underlining faded"  onClick={this.clickFriend(user.id)}>
                {user.username}
            </li>
            <button className="remove-friend-button lightup" onClick={this.handleDeleteFriend(user.id)}>X</button>
            </div>
        )) 
        let friend = friends.filter(friend => friend.id === this.state.currentFriendId)[0] || {follow_ids: []}
        let followedPlaylists = playlists.filter(playlist => friend.follow_ids.includes(playlist.id))
        followedPlaylists = followedPlaylists.map(playlist => {
            let playlistUrl = playlist.photoUrl || window.default_albumURL
            return (
                < li className = "underlining album-index-item" key = { playlist.id } >
                    <Link to={`/playlist/${playlist.id}`}>
                        <div className="friends-index-playlist-art-name">
                            <img className="friends-index-playlist-art" src={playlistUrl}/>
                        {playlist.name}
                    </div>
                    </Link>              
                </li >
            )
        })
        return (
            <div className="friends-index">
                <div className="friends-name-list">
                     <p className="friends-title">Friends</p>
                    {usernames}
                </div>
                <div className="friends-followed-playlists">
                    <p className="friends-title">Followed Playlists</p>
                    <div className="friends-index-list">
                        {followedPlaylists}
                    </div>
                </div>
           
            </div>
        ) 
    }
}

export default connect(msp, mdp)(FriendsIndex)