import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Col, Glyphicon } from 'react-bootstrap';
import injectSheet from 'react-jss';

import styles from './styles';

class FooterPage extends Component {
  render() {
    const { classes } = this.props;
    // return (
    //   <div className={classes.root}>
    //     <div className={`text-center ${classes.components}`}>
    //       <Col className={classes.description}>
    //         <h5 className={`text-uppercase ${classes.title}`}>
    //           Recipes Advisor
    //         </h5>
    //         <p className={`${classes.descriptionBody} ${classes.lightGray}`}>
    //           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //           Inventore, est, repudiandae? Itaque, asperiores autem beatae nisi
    //           officia officiis, dolorum minus, enim adipisci magnam unde aperiam
    //           reprehenderit nobis et aliquid tenetur.
    //         </p>
    //       </Col>
    //       <Col className={classes.support}>
    //         <h5 className={`text-uppercase ${classes.title}`}>Support</h5>
    //         <p>
    //           <Link
    //             to="/aboutus"
    //             className={`${classes.lightGray} ${classes.link}`}
    //           >
    //             About us
    //           </Link>
    //         </p>
    //         <p>
    //           <Link
    //             to="/contactus"
    //             className={`${classes.lightGray} ${classes.link}`}
    //           >
    //             Contact us
    //           </Link>
    //         </p>
    //         <p>
    //           <Link
    //             to="/feedback"
    //             className={`${classes.lightGray} ${classes.link}`}
    //           >
    //             Feedback
    //           </Link>
    //         </p>
    //         <p>
    //           <Link
    //             to="/technicalquestions"
    //             className={`${classes.lightGray} ${classes.link}`}
    //           >
    //             Technical Questions
    //           </Link>
    //         </p>
    //       </Col>
    //       <Col className={classes.contact}>
    //         <h5 className={`text-uppercase ${classes.title}`}>Contact</h5>
    //         <p className={classes.lightGray}>
    //           <Glyphicon glyph={'home'} /> Armenia, YVN
    //         </p>
    //         <p className={classes.lightGray}>
    //           <Glyphicon glyph={'envelope'} /> info@gmail.com
    //         </p>
    //         <p className={classes.lightGray}>
    //           <Glyphicon glyph={'phone'} /> + 01 234 567 88
    //         </p>
    //       </Col>
    //     </div>
    //     <div>
    //       <hr className={classes.hr} />
    //       <div className={classes.footerDown}>
    //         <Col className={classes.copyright}>
    //           <p>&copy; {new Date().getFullYear()} Copyright:</p>
    //         </Col>
    //         <Col>
    //           <ul className={`list-unstyled list-inline ${classes.downLinks}`}>
    //             <li className="list-inline-item">
    //               <a
    //                 className="btn-floating btn-sm rgba-white-slight mx-1"
    //                 href="https://mdbootstrap.com/react/5-min-quick-start/"
    //               >
    //                 <i className={`fab fa-facebook-square ${classes.icon}`} />
    //               </a>
    //             </li>
    //             <li className="list-inline-item">
    //               <a className="btn-floating btn-sm rgba-white-slight mx-1">
    //                 <i className={`fab fa-twitter-square ${classes.icon}`} />
    //               </a>
    //             </li>
    //             <li className="list-inline-item">
    //               <a className="btn-floating btn-sm rgba-white-slight mx-1">
    //                 <i
    //                   className={`fab fa-google-plus-square ${classes.icon}`}
    //                 />
    //               </a>
    //             </li>
    //             <li className="list-inline-item">
    //               <a className="btn-floating btn-sm rgba-white-slight mx-1">
    //                 <i className={`fab fa-linkedin ${classes.icon}`} />
    //               </a>
    //             </li>
    //           </ul>
    //         </Col>
    //       </div>
    //     </div>
    //   </div>
    // );
    return <div />;
  }
}

export default injectSheet(styles)(FooterPage);
