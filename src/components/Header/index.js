import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavbarNav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'mdbreact';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
      <Router>
        <Navbar
          className={classes.navBar}
          dark
          fixed={'top'}
          expand={'sm'}
          scrolling
        >
          <NavbarBrand tag={'span'}>
            <strong>
              <Link to={'/profile'} className={classes.colorWhite}>
                LOGO
              </Link>
            </strong>
          </NavbarBrand>
          {!IsWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={Collapsed} navbar>
            <NavbarNav right>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav>Profile</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <Link to={'/settings'}>Settings</Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link to={'/login'}>LogOut</Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </Router>
    );
  }
}

export default injectSheet(styles)(Header);
