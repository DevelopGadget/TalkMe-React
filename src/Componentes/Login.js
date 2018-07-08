import React, { Component } from 'react';
import '../Css/Login.css';
import * as $ from 'jquery';
import '../Css/TextInput.css';
import { Button, Icon, Row, Input, Container, Col, Modal } from 'react-materialize';
new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
})
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { Email: '', Password: '', ModalTexto: '', ModalView: false, Num: 0 }
  }

  componentDidMount() {
    document.getElementById('Input').focus();
  }

  Login = async () => {
    if (this.state.Email.length <= 0 || this.state.Password.length <= 0) {
      this.setState({ ModalTexto: 'Se requieren los campos', ModalView: true, Num: this.state.Num + 1 });
    } else {

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
        <Modal open={this.state.ModalView} id='Modal'>
          <Row style={{ display: 'flex', alignItems: 'center', marginBottom: 0 }}>
            <img src="https://image.flaticon.com/icons/svg/190/190406.svg" height='80' width='80' className="circle responsive-img" />
            <h4 style={{ marginLeft: 20 }}>{this.state.ModalTexto}</h4>
          </Row>
        </Modal>
      </Container >
    );
  }
}

export default Login;