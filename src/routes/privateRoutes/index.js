import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    let { component: Component, ...rest } = this.props;
    const isAuth = localStorage.getItem('jwt');
    return (
      <Route
        {...rest}
        render={props =>
          isAuth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

export default PrivateRoute;
