import React, { Component } from 'react';
import '../Css/Login.css'
import { Button, Icon, Row, Input, Container, Col } from 'react-materialize'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { Email: '', Password: '' }
  }
  render() {
    return (
      <Container>
        <Col className='center-align'>
          <Row className='center-align' >
            <Col className='left-align' s={12} m={12} l={8} offset={'l2'}>
              <Input s={12}  label='Email' type='email' validate={true} onChange={(Email) => this.setState({ Email: Email })} error={'Email invalido'}>
                <Icon large>alternate_email</Icon>
              </Input>
            </Col>
          </Row>
          <Row className='center-align'>
            <Col className='left-align' s={12} m={12} l={8} offset={'l2'}>
              <Input s={12}  label='Contraseña' type='password' validate={true} onChange={(Password) => this.setState({ Password: Password })}><Icon large>vpn_key</Icon></Input>
            </Col>
          </Row>
          <Row>
            <Button waves='red' type='submit' large>Login<Icon right>send</Icon></Button>
          </Row>
        </Col>
      </Container >
    );
  }
}

export default Login;