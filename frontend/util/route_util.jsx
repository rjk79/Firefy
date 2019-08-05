import { withRouter, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import React from 'react'

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component path={path} exact={exact} {...props} />
        ) : (
                <Redirect to="/home" />
            )
    )} />
);
//go to "/home" if you are logged in
//wont let you stay on form if you are logged in
//it is a component or a redirect

const Protected = ({ component: Component, path, loggedIn, exact, ...oldProps }) => {
            
    
    return(
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...oldProps} {...props} />
        ) : (
                <Redirect to="/login" />
            )
    )} />
)

};

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
