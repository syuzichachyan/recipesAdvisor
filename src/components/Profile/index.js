import React, { Component } from 'react';
import Recipes from '../../containers/recipes';
import Header from '../../containers/Header';
import {BrowserRouter as Router,Route,Switch}  from 'react-router-dom'

class Profile extends Component {
  render() {
    const includes = ['fish', 'egg'];
    const excludes = ['chicken'];
    return (
      <React.Fragment>
        <Header/>
          <Router >
              <Switch>
                  <Route exact path="/profile" render={props=><Recipes includes={includes} excludes={excludes}/>}/>
              </Switch>
          </Router>
      </React.Fragment>
    );
  }
}

export default Profile;
