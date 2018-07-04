import React, { Component } from 'react';
import '../Css/Login.css'
import { Button, Icon, Row, Input, Container, Col } from 'react-materialize'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { Email: '', Password: '' }
  }
  render() {
    console.log(this.state.Email);
    return (
      <Container>
        <Col className='center-align' push={'s4'}>
          <Row className='left-align' >
            <Input s={8} label='Email' type='email' validate={true} onChange={(Email) => this.setState({ Email: Email })}>
              <Icon large>alternate_email</Icon>
            </Input>
          </Row>
          <Row className='left-align'>
            <Input s={8} label='Contraseña' type='password' validate={true} onChange={(Password) => this.setState({ Password: Password })}><Icon large>vpn_key</Icon></Input>
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