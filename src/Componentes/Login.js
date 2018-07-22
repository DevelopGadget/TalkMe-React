import React, { Component } from 'react';
import '../Css/Login.css';
import * as $ from 'jquery';
import '../Css/TextInput.css';
import { Button, Icon, Row, Input, Container, Col } from 'react-materialize';
import swal from 'sweetalert';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { Email: '', Password: ''}
  }

  componentDidMount() {
    document.getElementById('Input').focus();
  }

  Login = async () => {
    if (this.state.Email.length <= 0 || this.state.Password.length <= 0) {
      swal('Invalido', 'Todos los campos son requeridos', 'error');
    } else {
      swal('Correcto', 'Todos los campos estan correcto', 'error');
    }
  }

  componentDidUpdate() {
    $('Modal').modal('destroy');
  }

  render() {
    return (
      <Container>
        <Col className='center-align'>
          <Row className='center-align' >
            <Col className='left-align' s={12} m={12} l={8} offset={'l2'}>
              <Input s={12} label='Email' type='email' validate={true} onChange={(Email) => this.setState({ Email: Email })} error={'Email invalido'} id={'Input'} success={'Email Valido'}>
                <Icon large>alternate_email</Icon>
              </Input>
            </Col>
          </Row>
          <Row className='center-align'>
            <Col className='left-align' s={12} m={12} l={8} offset={'l2'}>
              <Input s={12} label='Contraseña' type='password' validate={true} onChange={(Password) => this.setState({ Password: Password })}>
                <Icon large>vpn_key</Icon>
              </Input>
              <Button waves='purple' flat={true} style={{ backgroundColor: 'transparent' }}>Cambiar Contraseña</Button>
            </Col>
          </Row>
          <Row>
            <Row>
              <Button waves='red' type='submit' large id='Login' onClick={this.Login.bind(this)}>Login<Icon right>send</Icon></Button>
            </Row>
            <Row>
              <Button waves='purple' flat={true} style={{ backgroundColor: 'transparent' }} id='Button' onClick={() => console.log('Press')}>¿NO TIENES CUENTA?</Button>
            </Row>
          </Row>
        </Col>
      </Container >
    );
  }
}

export default Login;