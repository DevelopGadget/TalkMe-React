import React, { Component } from 'react';
import '../Css/Login.css'
import { Button, Icon, Row, Input, Container, Col, Card, Section } from 'react-materialize'

class Login extends Component {
  render() {
    return (
      <Container>
        <Row className='center-align'>
          <Input s={6} label='Email' type='email'><Icon large>alternate_email</Icon></Input>
        </Row>
        <Row className='center-align'>
          <Input s={6} label='Contraseña' type='password'><Icon large>vpn_key</Icon></Input>
        </Row>
        <Row className='center-align'>
          <Button waves='red' type='submit' large>Login<Icon right>send</Icon></Button>
        </Row>
      </Container >
    );
  }
}

export default Login;