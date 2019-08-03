import React from 'react'
import {Link} from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "Username",
            password: "Password"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemoClick = this.handleDemoClick.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.processForm(this.state)
    }

    handleChange(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    componentDidMount(){
        this.props.resetErrors()
    }

    handleDemoClick(e) {
        e.preventDefault()
        this.props.processForm({username: "Guest", password: "password"})
    }

    render() {
        let demoButton = this.props.formType === "Log In" ? 
            <>
                <button className="session-button small long-padding facebook-button" onClick={this.handleDemoClick}>
                Demo Log In
                </button>
                <div className="session-form-or">OR</div>
            </>
            : null;

        let errors;
        if (this.props.errors.length) {
            errors = this.props.errors.map((error, idx) => {
                return <li className="errors" key={idx}>{error}</li>
            })
        }
        let signupButton = this.props.formType === "Log In" ? 
        <> 
            <br/>
            <p className="font-black small">Don't have an account?</p>
            <Link to="/signup" className="bw-button small long-padding" >
            Sign Up
            </Link> 
        </>:<>
            <br/>
            <p className="font-black small">Already have an account?</p>
            <Link to="/login" className="bw-button small long-padding" >
                Log In
            </Link> 
        </>
                                                                
        return (
            <>
              <div className="full-background white-background">
                <div className="full-form">
                        <div className="session-form-firefy"><div className="session-form-logo"><img src={window.firefly_logoURL} alt="Logo Img" /></div>
                            Firefy
                        </div>
                        <hr className="black-line"/>
                        {demoButton}
                        
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        {/* <p className="slogan font-black">{this.props.formType}</p> */}

                        <input className="username-input" type="text" onChange={this.handleChange("username")} placeholder="Username" required/>
                            <input className="password-input" type="password" onChange={this.handleChange("password")} placeholder="Password" required/>
                        <input className="session-button small long-padding signup-login-button" type="submit" value={this.props.formType} />
                    </form>
                    <ul>
                        {errors}
                    </ul>
                    {signupButton}
                </div>
              </div>
            </>
        )
    }
}
export default SessionForm