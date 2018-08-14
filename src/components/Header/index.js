import React, { Component } from 'react';
import { Navbar, NavbarBrand,NavbarToggler, Collapse,  NavbarNav, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import injectSheet from 'react-jss';

import styles from './styles';

class Header extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    let { Collapsed } = this.props;
    this.props.collapse(!Collapsed);
  }

  render() {
    const { classes, IsWideEnough, Collapsed } = this.props;
    return (
      <Navbar className={classes.navBar} fixed={'top'} expand="sm" scrolling>
        <NavbarBrand href="/profile">
          <strong className={classes.colorBlack}>LOGO</strong>
        </NavbarBrand>
        { !IsWideEnough && <NavbarToggler onClick={ this.onClick }/>}
        <Collapse isOpen = { Collapsed } navbar>
          <NavbarNav right>
            <NavItem>
              <Dropdown>
              <DropdownToggle nav className={classes.colorBlack}>Profile</DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/settings">Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/login">LogOut</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    )
  }
}

export default injectSheet(styles)(Header);