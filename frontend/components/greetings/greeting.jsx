import React from 'react'
import { Link } from 'react-router-dom'

class Greeting extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.logout()
    }

    render() {
        const name = this.props.currentUser ? this.props.currentUser.username : ""
        return this.props.currentUser ?
            (
                <>
                <div className="greeting-logout">
                    <h1 className="medium">{name}</h1>
                    <Link to="/" className="session-button small" onClick={this.handleClick}>
                        Log Out
                    </Link>
                </div>
                </>
            ) : (
                <>
                    <div className = "greeting-bar">  
                        <div className ="greeting-buttons"> 
                            {/* <img src="/assets/bw_logo.png" />    */}
                            <img src="assets/firefly_logo.png" alt="Logo Img" />
                            <Link to="/">Firefy</Link>
                            <i className="greeting-separator"></i>
                            <Link className="greeting-link small" to="/signup">Sign Up</Link>
                            <Link className="greeting-link small" to="/login">Log In</Link>
                        </div>
                    </div>
                </>
            )
    }
}
export default Greeting