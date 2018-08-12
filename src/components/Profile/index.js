import React, { Component } from 'react';
import Recipes from '../../containers/recipes';
import Header from '../../containers/Header';

class Profile extends Component {
  render() {
    const includes = ['fish', 'egg'];
    const excludes = ['chicken'];
    return (
      <React.Fragment>
        <Header/>
        <Recipes includes={includes} excludes={excludes} />
      </React.Fragment>
    );
  }
}

export default Profile;
