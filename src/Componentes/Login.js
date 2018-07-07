import React, { Component } from 'react';
import '../Css/Login.css';
import '../Css/TextInput.css';
import $ from 'jquery';
import { Button, Icon, Row, Input, Container, Col, CollectionItem, Collection, Badge, Modal } from 'react-materialize';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { Email: '', Password: '' }
  }

  componentDidMount() {
    document.getElementById('Input').focus();
  }

  Login = async () => {
    if (this.state.Email.length <= 0 || this.state.Password.length <= 0) {

    } else {

    }
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
              <Button waves='purple' flat={true} style={{ backgroundColor: 'transparent' }}>¿NO TIENES CUENTA?</Button>
            </Row>
          </Row>
        </Col>
        <Modal
          id='foo'
          header='Modal Header'>
          Lorem ipsum dolor sit amet
        </Modal>
      </Container >
    );
  }
}

export default Login;