import React, { Component } from 'react';
import { Navbar, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import styles from './styles';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { firstPage } = this.props;
    firstPage();
  }

  render() {
    const { classes } = this.props;
    return (
      <Navbar className={classes.navBar} inverse fixedTop>
        <Navbar.Header>
          <Link
            to={'/home'}
            className={classes.navBarBrand}
            onClick={this.handleClick}
          >
            LOGO
          </Link>
        </Navbar.Header>
        <div className={classes.dropDown}>
          <NavDropdown
            eventKey={1}
            title={<Glyphicon glyph={'list'} className={classes.ListGlyph} />}
            id={'headerDropDown'}
            noCaret
          >
            <MenuItem header>
              <Link to={'/settings'}>
                <Glyphicon glyph={'user'} className={classes.glyph} />
                Profile
              </Link>
              <Link to={'/dietprogram'}>
                <Glyphicon glyph={'cutlery'} className={classes.glyph} />
                Start Diet
              </Link>
              <Link to={'/login'}>
                <Glyphicon glyph={'log-out'} className={classes.glyph} />
                Log Out
              </Link>
            </MenuItem>
          </NavDropdown>
        </div>
      </Navbar>
    );
  }
  static propTypes = {
    classes: PropTypes.object,
    firstPage: PropTypes.func
  };
}

export default injectSheet(styles)(Header);
