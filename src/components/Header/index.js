import React, { Component } from 'react';
import { Navbar, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
            to={'/profile'}
            className={classes.navBarBrand}
            onClick={this.handleClick}
          >
            LOGO
          </Link>
        </Navbar.Header>
        <div className={classes.dropDown}>
          <NavDropdown
            eventKey={1}
            title={<Glyphicon glyph={'list'} />}
            id={'headerDropDown'}
            noCaret
          >
            <MenuItem header>
              <Link to={'profile'}>Profile</Link>
              <Link to={'/dietprogram'}>Start Diet</Link>
              <Link to={'login'}>Log Out</Link>
            </MenuItem>
          </NavDropdown>
        </div>
      </Navbar>
    );
  }
}

export default injectSheet(styles)(Header);
