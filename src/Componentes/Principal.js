import React, { Component } from 'react';
import '../Css/Principal.css'
import { Button, Icon, Row, Input, Container, Col, Card, CardTitle } from 'react-materialize';

export default class Principal extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Col s={10}>
          <Row>
            <Card
              header={
                <CardTitle image='http://owngraphics.com/wp-content/uploads/2017/05/SeanKushery_avi1V2.png'>
                </CardTitle>
              }
              actions={[
                <Button waves='red' large flat={true} style={{ backgroundColor: 'transparent' }}><Icon center>send</Icon></Button>
              ]}>
              Aqui va la descripción del usuario.
            </Card>
          </Row>
        </Col>
        <Col s={2}>

        </Col>
      </Container>
    );
  }
}