import React, { Component } from 'react';
// import { Row, Col, Button, Glyphicon } from 'react-bootstrap';
import injectSheet from 'react-jss';

import MapContainer from '../GoogleMap';
import styles from './styles';

class ContactPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        {/*container*/}
        {/*<section className={classes.section}>*/}
        {/*<h2 className={classes.header}>Contact us</h2>*/}
        {/*<p className={classes.description}>*/}
        {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,*/}
        {/*error amet numquam iure provident voluptate esse quasi, veritatis*/}
        {/*totam voluptas nostrum quisquam eum porro a pariatur veniam.*/}
        {/*</p>*/}
        {/*<Row className={classes.row}>*/}
        {/*<Col lg={5} className="lg-0 mb-4">*/}
        {/*<div className={classes.card}>*/}
        {/*/!*Card*!/*/}
        {/*<div className={classes.cardBody}>*/}
        {/*/!*CardBody*!/*/}
        {/*<div className={classes.cardTitle}>*/}
        {/*<h3>*/}
        {/*<Glyphicon glyph="envelope" /> Write to us:*/}
        {/*</h3>*/}
        {/*</div>*/}
        {/*<p className={classes.cardSubTitle}>*/}
        {/*We'll write rarely, but only the best content.*/}
        {/*</p>*/}
        {/*<div className={classes.fields}>*/}
        {/*<Glyphicon glyph={'user'} className={classes.glyph} />*/}
        {/*<input*/}
        {/*type="text"*/}
        {/*id="form-name"*/}
        {/*placeholder={'Your Name'}*/}
        {/*className={classes.field}*/}
        {/*/>*/}
        {/*</div>*/}
        {/*<div className={classes.fields}>*/}
        {/*<Glyphicon glyph={'envelope'} className={classes.glyph} />*/}
        {/*<input*/}
        {/*type="text"*/}
        {/*id="form-email"*/}
        {/*placeholder={'Your Email'}*/}
        {/*className={classes.field}*/}
        {/*/>*/}
        {/*</div>*/}
        {/*<div className={classes.fields}>*/}
        {/*<Glyphicon glyph={'tag'} className={classes.glyph} />*/}
        {/*<input*/}
        {/*type="text"*/}
        {/*id="form-subject"*/}
        {/*placeholder={'Subject'}*/}
        {/*className={classes.field}*/}
        {/*/>*/}
        {/*</div>*/}
        {/*<div className={classes.fields}>*/}
        {/*<Glyphicon glyph={'pencil'} className={classes.glyph} />*/}
        {/*<textarea*/}
        {/*id="form-text"*/}
        {/*placeholder={'Icon Prefix'}*/}
        {/*className={`${classes.field} ${classes.area}`}*/}
        {/*/>*/}
        {/*</div>*/}
        {/*<div className="text-center">*/}
        {/*<Button className={classes.btn}>Submit</Button>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*</Col>*/}
        {/*<Col lg={7}>*/}
        {/*<div*/}
        {/*id="map-container"*/}
        {/*className={classes.mapContainer}*/}
        {/*style={{ height: '400px' }}*/}
        {/*>*/}
        {/*<MapContainer />*/}
        {/*</div>*/}
        {/*<br />*/}
        {/*<Row className={classes.contacts}>*/}
        {/*<Col md={4} className={classes.contact}>*/}
        {/*<Glyphicon glyph="map-marker" />*/}
        {/*<p>Yerevan</p>*/}
        {/*<p className="mb-md-0">Armenia</p>*/}
        {/*</Col>*/}
        {/*<Col md={4} className={classes.contact}>*/}
        {/*<Glyphicon glyph="phone" />*/}
        {/*<p>+ 01 234 567 89</p>*/}
        {/*<p className="mb-md-0">Mon - Fri, 8:00-22:00</p>*/}
        {/*</Col>*/}
        {/*<Col md={4} className={classes.contact}>*/}
        {/*<Glyphicon glyph="envelope" />*/}
        {/*<p>info@gmail.com</p>*/}
        {/*<p className="mb-md-0">sale@gmail.com</p>*/}
        {/*</Col>*/}
        {/*</Row>*/}
        {/*</Col>*/}
        {/*</Row>*/}
        {/*</section>*/}
      </div>
    );
  }
}

export default injectSheet(styles)(ContactPage);
