import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Header from '../../containers/Header';
import ChangePassword from '../ChangePassword';
import FoodPreferences from '../FoodPreferences';
import styles from './styles';
import injectSheet from 'react-jss';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.handlePreferencesChange = this.handlePreferencesChange.bind(this);
  }

  static handlePasswordChange(changes) {
    console.log(changes);
  }

  handlePreferencesChange() {}

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <div className={classes.settings}>
          <h1 className={classes.title}>Settings</h1>
          <Tabs
            defaultActiveKey={1}
            id={'settingsTabs'}
            className={classes.tabs}
          >
            <Tab eventKey={1} title={'Change Password'}>
              <ChangePassword onSubmit={Settings.handlePasswordChange} />
            </Tab>
            <Tab eventKey={2} title={'Change Preferences'}>
              <FoodPreferences />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
  static propTypes = {
    classes: PropTypes.object
  };
}

export default injectSheet(styles)(Settings);
