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
        // this.handleBlur = this.handleBlur.bind(this)
    }
    componentDidMount() {
        
        this.setState({ popupShowing: false })
    }
    componentDidUpdate() {
        // if (this.state.popupShowing){
        // return this.setState({ popupShowing: false })
        // }
    }


    handleClickOnName() {
        return this.setState({
            popupShowing: !this.state.popupShowing
        })
    }

    handleClick() {
        this.props.logout()
        this.setState({
            popupShowing: !this.state.popupShowing
        })
    }
    // handleBlur() {
    //     this.setState({ popupShowing: false })
    //     // 
    // }

    render() {
        

        let popup = this.state.popupShowing ?
            <div className="greeting-popup" >
                <Link to="/" className="small faded lightup" onClick={this.handleClick}>
                    Log Out
                </Link>
            </div>
            : null


        const name = this.props.currentUser ? this.props.currentUser.username : ""
        return this.props.currentUser ?
            (
                <>
                    {/* onBlur={this.handleBlur} supposed to be in the tag below */}
                    <div className="greeting-logout" >
                        <hr className="greeting-hr" />
                        <button className="medium greeting-name" onClick={this.handleClickOnName}>{name}</button>
                        {/* not rendering  anymore */}
                        {popup}
                    </div>
                </>
            ) : (
                <>
                    <div className="greeting-bar">
                        <div className="greeting-logoname">
                            <img src={window.firefly_logoURL} alt="Img" />
                            <Link className="splash-logo" to="/">Firefy</Link>
                        </div>
                        <div className="greeting-buttons">
                            {/* <i className="greeting-separator"></i> */}
                            <Link className="greeting-link small" to="/signup">Sign Up</Link>
                            <Link className="greeting-link small" to="/login">Log In</Link>
                        </div>
                    </div>
                </>
            )
    }
}
export default Greeting