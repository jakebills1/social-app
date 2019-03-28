import React from 'react';
import { Route, Redirect, } from 'react-router-dom';
import { AuthConsumer, } from '../providers/AuthProvider';
const ProtectedRoute = ({ component: Component, ...rest}) => (
  <AuthConsumer>
    {auth => <Route 
      {...rest}
      render={ props => (
        // if its authenticated, render the component, if not render the login
        auth.authenticated ? <Component /> 
        : 
        <Redirect
        to={{
          pathname: "/login", 
          state: { from: props.location }
        }}
        />
      )}
    />}
  </AuthConsumer>
)
export default ProtectedRoute;