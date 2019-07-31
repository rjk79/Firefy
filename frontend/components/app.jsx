import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import { AuthRoute } from '../util/route_util'
import { Route, Switch } from 'react-router-dom'
import WelcomeContainer from './welcome/welcome_container'
import Template from './template'
const App = () => (
  <div>
    <GreetingContainer /> 
    <Switch>

      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      
      <Route path="/" exact component={WelcomeContainer} />
    
        <Route path="/" component={Template} />
      {/* <Route path="/home" exact component={ArtistsContainer}/> */}
      {/* <Route path="/home" exact component={AlbumsContainer}/> */}
      {/* <Route path="/home" exact component={PlaylistContainer}/> */}
    </Switch>
    
  </div>
)
// always show greeting container so u can log out
// the auth routes will just sit there once they do their job

export default App