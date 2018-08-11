import React, { Component } from 'react';
import Recipes from '../../containers/recipes';

class Profile extends Component {
    render() {
        const includes = ['fish', 'egg'];
        const excludes = ['chicken'];
        return (
            <React.Fragment>
                <Recipes includes={includes} excludes={excludes} />
            </React.Fragment>
        );
    }
}

export default Profile;
