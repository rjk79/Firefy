import React from 'react'

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
        this.props.processForm({username: "user", password: "starwars"})
    }

    render() {
        let demoButton = this.props.formType === "Log In" ? <button className="session-button small long-padding" onClick={this.handleDemoClick}>Demo Log In</button>
            : null;

        let errors;
        if (this.props.errors.length) {
            errors = this.props.errors.map((error, idx) => {
                return <li className="errors" key={idx}>{error}</li>
            })
        }
        return (
            <>
              <div className="full-background white-background">
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <p className="slogan font-black">{this.props.formType}!</p>

                    <input type="text" onChange={this.handleChange("username")} placeholder="Username" required/>
                    <input type="text" onChange={this.handleChange("password")} placeholder="Password" required/>
                    <input className="session-button small long-padding" type="submit" value={this.props.formType} />
                </form>
                <ul>
                    {errors}
                </ul>
                <div className="center">
                {demoButton}
                </div>
              </div>
            </>
        )
    }
}
export default SessionForm