import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const msp = state => {
    return {
        sessionId: state.session.id
    }
}

class WelcomeMessages extends React.Component {
    componentDidMount(){
        if (this.props.sessionId) {
            
            // this.props.history.push("/home")
        }
    }
    render(){      
        return (
            <><p className="slogan flicker">Music for everyone.</p>
                <p className="small splash-motto">Millions of songs. No credit card needed.</p>
                <Link to="/signup" className="session-button small getfirefyfree-button">   GET FIREFY FREE   </Link>
            </>
        )
    }
}


export default connect(msp, null)(WelcomeMessages);