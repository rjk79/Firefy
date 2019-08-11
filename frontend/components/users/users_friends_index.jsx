import React from 'react'
import {connect} from 'react-redux'
// import {fetchAllUsers} from '../../actions/user_actions'

const msp = state => {
    let users = Object.values(state.entities.users)

    return {
        users
    }
}
const mdp = dispatch => {
    return {
        // fetchAllUsers: () => dispatch(fetchAllUsers)
    }
}

class FriendsIndex extends React.Component {
    componentDidMount(){
        // this.props.fetchAllUsers()
    }
    render(){
        const { users } = this.props
        let usernames = users.map(user => (
            <li key={user.id}>{user.username}</li>
        )) 
        return (
            <div>
            <p>Friends</p>
            {usernames}
            </div>
        )
         
    }
}

export default connect(msp, mdp)(FriendsIndex)