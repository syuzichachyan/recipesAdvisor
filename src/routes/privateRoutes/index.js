import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { component: Component, isAuth, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          isAuth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/',
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
