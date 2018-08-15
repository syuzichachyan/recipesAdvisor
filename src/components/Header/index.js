import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
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
      <Navbar className={classes.navBar} inverse fixedTop collapseOnSelect>
        <Navbar.Header>
          <NavbarBrand>
            <Link to={'/profile'} className={classes.colorWhite} onClick={this.handleClick}>LOGO</Link>
          </NavbarBrand>
          <Navbar.Toggle className={classes.toggler}/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight className={classes.navItem}>
            <NavDropdown eventKey={1} title={'Profile'} id={'headerDropdown'} noCaret className={classes.navItem}>
              <MenuItem eventKey={1.1} header>
                <Link to={'/settings'}>Settings</Link>
              </MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={1.2} header>
                <Link to={'/login'} onClick={this.handleClick}>Log Out</Link>
              </MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default injectSheet(styles)(Header);
