import React from 'react'
import { Link } from 'react-router-dom'

class Greeting extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleClickOnName = this.handleClickOnName.bind(this)
        this.state = {
            popupShowing: false
        }
    }
    handleClickOnName() {
        return this.setState({
            popupShowing: !this.state.popupShowing
        })
    }

    handleClick() {
        this.props.logout()
    }

    render() {
        
        let popup = this.state.popupShowing ? 
            <div className="greeting-popup">
                <Link to="/" className="small faded lightup" onClick={this.handleClick}> 
                    Log Out
                </Link> 
            </div>
                : null
            

        const name = this.props.currentUser ? this.props.currentUser.username : ""
        return this.props.currentUser ?
            (
                <>
                <div className="greeting-logout">
                    <hr className="greeting-hr"/>
                    <button className="medium greeting-name" onClick={this.handleClickOnName}>{name}</button>
                    {popup}
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