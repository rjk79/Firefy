import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import { AuthRoute } from '../util/route_util'
import { Route } from 'react-router-dom'
import WelcomeContainer from './welcome/welcome_container'

const App = () => (
  <div>
    <GreetingContainer /> 
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <Route path="/" exact component={WelcomeContainer}/>
    
  </div>
)
// these all change

export default App