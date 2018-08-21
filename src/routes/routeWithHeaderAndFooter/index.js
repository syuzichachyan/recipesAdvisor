import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Header from '../../containers/Header';

class RouteWithHeaderAndFooter extends Component {
  render() {
    let { component: Component, isAuth, ...rest } = this.props;
    isAuth = true;
    return (
      <Route
        {...rest}
        render={props =>
          isAuth ? (
            <React.Fragment>
              <Header />
              <Component {...props} />
            </React.Fragment>
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

export default RouteWithHeaderAndFooter;
