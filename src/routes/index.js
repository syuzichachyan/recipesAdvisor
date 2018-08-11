import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from '../components/profile';

class Routers extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        path="/profile"
                        render={props => <Profile {...props} />}
                    />
                </Switch>
            </Router>
        );
    }
}

export default Routers;
