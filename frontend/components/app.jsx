import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import { AuthRoute } from '../util/route_util'
import { Route, Switch, Link } from 'react-router-dom'
import WelcomeContainer from './welcome/welcome_container'
import Template from './template'
import Modal from './modal'
import WelcomeMessages from './welcome/welcome_messages';

const App = () => (
  <div className="primary-app-div">
    <img className="splash-background" src={window.splash_backgroundURL} alt="splash"/>
    <Modal/>
    <GreetingContainer /> 
    <Switch>

      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      
      <Route path="/" exact component={WelcomeContainer} />
    
        <Route path="/" component={Template} />

      
    </Switch>
    <div className="welcome-messages">
      <Route path="/" exact component={WelcomeMessages}/>
      
    </div>
    

    <div className="handles">
      <a className="github-link" href="https://github.com/rjk79">
        <img className="icon" src={githubURL}/>
      </a>
      <a className="linkedin-link" href="https://www.linkedin.com/in/robert-ku-b9464461">
          <img className="icon" src={linkedinURL}/>
      </a>
          robertku79@gmail.com
    </div>

  </div>
)
// always show greeting container so u can log out
// the auth routes will just sit there once they do their job

export default App