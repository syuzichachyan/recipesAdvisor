import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import injectSheet from 'react-jss';

import styles from './styles';

class Header extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { collapse, Collapsed } = this.props;
    collapse(!Collapsed);
  }

  render() {
    const { classes, IsWideEnough, Collapsed } = this.props;
    return (
      <Navbar fixedTop>
        <Navbar.Brand>
          <Link to={'/profile'}>LOGO</Link>
        </Navbar.Brand>
        <Nav pullRight>
          <NavDropdown eventKey={1} title={'Profile'}>
            <MenuItem eventKey={1.1} header>
              <Link to={'/settings'}>Settings</Link>
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.2} header>
              <Link to={'/login'}>Log Out</Link>
            </MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default injectSheet(styles)(Header);
