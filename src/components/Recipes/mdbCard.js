import React, { Component } from 'react';
import { Row, Col, Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import testImage from './testImage.jpg';

class RecipeCard extends Component{
  render(){
    return(
      <Row>
        <Col lg="2" md="2" className="mb-lg-0 mb-2">
          <Card>
            <CardImage style={{ height: '250px', width: '100%' }} className="img-fluid" src={testImage} waves />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button href="#">Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default RecipeCard;