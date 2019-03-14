import React, { Component } from "react";
import styled from 'styled-components';

import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./styles.scss";
import './bootstrap-social.css';

const SocialButtonStyledButton = styled.button`
  width: 100%;
  max-width: 150px;
`;

const LoginLabel = styled.h3`
  margin-bottom: 50px;
`;

const LoginDiv = styled.div`
  height: 200px;
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

function ButtonColumn({buttonType}) {
  return (
    <div className="col-md-4">
      <SocialButton type={buttonType} />
    </div>    
  )
}

function SocialButton({type}) {
  return (
    <SocialButtonStyledButton className={`btn btn-social-icon btn-${type}`}>
      <span className={`fa fa-${type}`}></span>
    </SocialButtonStyledButton>
  );
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

  handleSubmit = event => {
    console.log('submit here');
    event.preventDefault();
  }

  render() {
    return (
      <div className="login">
        <LoginLabel>Login</LoginLabel>
        <ConnectWithWrapper>Connect With</ConnectWithWrapper>
        <ButtonContainer>
          <ButtonRow>
            <ButtonColumn buttonType="facebook"></ButtonColumn>
            <ButtonColumn buttonType="google"></ButtonColumn>
            <ButtonColumn buttonType="amazon"></ButtonColumn>
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