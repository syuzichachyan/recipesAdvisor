import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../../containers/Header';
import Footer from '../../components/Footer';
import Home from '../../components/Home';
import Settings from '../../components/Settings';
import PrivateRoutes from '../privateRoutes';
import ContactUs from '../../components/ContactUs';

class RoutesWithHeaderAndFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route path="/contactUs" component={ContactUs} />
        <PrivateRoutes path="/home" component={Home} />
        <PrivateRoutes path="/settings" component={Settings} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default RoutesWithHeaderAndFooter;
