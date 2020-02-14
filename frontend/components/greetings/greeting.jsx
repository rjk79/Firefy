import React from 'react'
import { Link } from 'react-router-dom'

class Greeting extends React.Component {
    constructor(props) {
        super(props)
        
        // this.handleBlur = this.handleBlur.bind(this)
    }

    componentDidUpdate() {
        // if (this.state.popupShowing){
        // return this.setState({ popupShowing: false })
        // }
    }


    

    // handleBlur() {
    //     this.setState({ popupShowing: false })
    //     // 
    // }

    render() {
        


        return this.props.currentUser ?
            
                null
            : (
                <>
                    <div className="greeting-bar">
                        <div className="greeting-logoname">
                            <img src={window.firefly_logoURL} alt="Img" />
                            <Link className="splash-logo" to="/">Firefy</Link>
                        </div>
                        <div className="greeting-buttons">
                            <Link className="greeting-link small" to="/signup">Sign Up</Link>
                            <Link className="greeting-link small" to="/login">Log In</Link>
                        </div>
                    </div>
                </>
            )
    }
}
export default Greeting