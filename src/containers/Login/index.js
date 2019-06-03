import React, { Component } from "react";
import styled from 'styled-components';
import { Auth } from "aws-amplify";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./styles.scss";
import './bootstrap-social.css';
import SocialButton from '../../Components/SocialButton';

import SignInWithFacebook from '../../Components/FacebookSignInButton';

const LoginLabel = styled.h3`
  margin-bottom: 50px;
`;

function ButtonContainer(props) {
  return (
    <div className="container">
      {props.children}
    </div>
  );
}

function ButtonRow(props) {
  return (
    <div className="row">
      {props.children}
    </div>
  );
}

function ButtonColumn(props) {
  return (
    <div className="col-md-4">
     {props.children}
    </div>    
  )
}

function Seperator({text}) {
  return (
    <hr className="hr-text" data-content={text} />
  )
}

const ConnectWithWrapper = styled.div`
  font-size: small;
`;

export default class Login extends Component {

  constructor(props) {
    super(props);

    console.log('props', props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    console.log('submit here');
    event.preventDefault();

    try {
      await Auth.signIn(this.state.email, this.state.password);
      alert("Logged in");
    } catch (e) {
      console.log(e);
      alert(e.message || e);
    }    
  }

  render() {
    return (
      <div className="login">
        <LoginLabel>Login</LoginLabel>
        <ConnectWithWrapper>Connect With</ConnectWithWrapper>
        <ButtonContainer>
          <ButtonRow>
            <ButtonColumn><SignInWithFacebook {...this.props}></SignInWithFacebook></ButtonColumn>
            <ButtonColumn><SocialButton type="google"></SocialButton></ButtonColumn>
            <ButtonColumn><SocialButton type="amazon"></SocialButton></ButtonColumn>
          </ButtonRow>
        </ButtonContainer>
        <Seperator text=" or "/>
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Login
            </Button>
          </form>
        </div>        
      </div>
    );
  }
}