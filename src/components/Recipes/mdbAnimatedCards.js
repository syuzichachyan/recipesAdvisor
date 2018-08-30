import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem, Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText, Button } from 'mdbreact';

class MultiCarouselPage extends Component {
  
  render(){
    return(
      <Container>
        <h4 className="mt-5 mb-2">Multi-item Carousel</h4>
        <Carousel
          activeItem={1}
          length={2}
          slide={true}
          showControls={true}
          showIndicators={true}
          multiItem >
          <CarouselInner>
            <Row>
              <CarouselItem itemId="1">
                <Col md="4">
                  <Card className="mb-2">
                    <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Button color="primary">Button</Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <Card className="mb-2">
                    <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Button color="primary">Button</Button>
                    </CardBody>
                  </Card>
                </Col>
                
              </CarouselItem>
              <CarouselItem itemId="3">
                <Col md="4">
                  <Card className="mb-2">
                    <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Button color="primary">Button</Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <Card className="mb-2">
                    <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Button color="primary">Button</Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                  <Card className="mb-2">
                    <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      <Button color="primary">Button</Button>
                    </CardBody>
                  </Card>
                </Col>
              </CarouselItem>
            </Row>
          </CarouselInner>
        </Carousel>
      </Container>
    );
  }
}

export default MultiCarouselPage;