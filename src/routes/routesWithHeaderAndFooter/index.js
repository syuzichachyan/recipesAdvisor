import React, { Component } from 'react';
import Header from '../../containers/Header';
import Home from '../../components/Home';
import Settings from '../../components/Settings';
import PrivateRoutes from '../privateRoutes';

class RoutesWithHeaderAndFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <PrivateRoutes path="/home" component={Home} />
        <PrivateRoutes path="/settings" component={Settings} />
      </React.Fragment>
    );
  }
}

export default RoutesWithHeaderAndFooter;
