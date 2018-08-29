import React, { Component } from 'react';
import {
  Animation,
  Container,
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarToggler
} from 'mdbreact';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import styles from './styles';

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      scrollPositionY: 0,
      isLogoAnimated: false
    };
    this.onClick = this.onClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    return window.addEventListener('scroll', debounce(this.handleScroll, 32));
  }

  componentWillUnmount() {
    return window.addEventListener('scroll', debounce(this.handleScroll, 32));
  }

  handleScroll = () => {
    const scrollPositionY = +window.scrollY;
    return this.setState({ scrollPositionY });
  };

  mouseEntered = () => {
    this.setState({ isLogoAnimated: true });
    console.log('enter');
  };

  mouseLeaved = () => {
    this.setState({ isLogoAnimated: false });
    console.log('leave');
  };

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  handleClick() {
    const { firstPage } = this.props;
    firstPage();
  }

  render() {
    const { classes } = this.props;
    const { scrollPositionY, collapse, isLogoAnimated } = this.state;
    const isAuth = localStorage.getItem('jwt');
    return (
      <React.Fragment>
        <header
          className={`${classes.headerArea} ${
            scrollPositionY !== 0 ? classes.sticky : ''
          }`}
        >
          <Container className={classes.container}>
            <div className={'row'}>
              <div className={'col-12'}>
                <Navbar
                  color="transparent"
                  dark
                  expand="md"
                  className={`${classes.navBar} ${
                    scrollPositionY !== 0
                      ? classes.navBarScroll
                      : collapse
                        ? classes.navBarScroll
                        : ''
                  }`}
                >
                  <NavbarBrand
                    tag={'span'}
                    onMouseEnter={this.mouseEntered}
                    onMouseLeave={this.mouseLeaved}
                  >
                    {isLogoAnimated ? (
                      <Animation type="tada">
                        <Link to={'/'} className={classes.navBarBrand}>
                          <strong>Navbar</strong>
                        </Link>
                      </Animation>
                    ) : (
                      <Link to={'/'} className={classes.navBarBrand}>
                        <strong>Navbar</strong>
                      </Link>
                    )}
                  </NavbarBrand>
                  {!this.state.isWideEnough && (
                    <NavbarToggler onClick={this.onClick} />
                  )}
                  <Collapse
                    isOpen={collapse}
                    className={classes.collapsed}
                    navbar
                  >
                    <NavbarNav right>
                      <NavItem active>
                        <NavLink to="/home" className={classes.navLink}>
                          Home
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="/favourites" className={classes.navLink}>
                          Favourites
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="#">Pricing</NavLink>
                      </NavItem>
                    </NavbarNav>
                  </Collapse>
                </Navbar>
              </div>
            </div>
          </Container>
        </header>
        <div style={{ minHeight: '400px', backgroundColor: 'red' }} />
      </React.Fragment>
    );
  }
  static propTypes = {
    classes: PropTypes.object,
    firstPage: PropTypes.func
  };
}

export default injectSheet(styles)(Header);
