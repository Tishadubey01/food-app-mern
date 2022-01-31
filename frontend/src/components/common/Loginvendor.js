import { useState } from "react";
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  Alert,
  Spinner
} from "reactstrap";
import { NavigateBeforeSharp } from "@mui/icons-material";
export default class LoginVendor extends Component {
  constructor(props) {
    super(props)
    this.state = {

      email: '',
      password: '',
      type: ''


    }
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onChangeBatch = this.onChangeBatch.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeEmail = e => {
    this.setState({
      email: e.target.value,
    });
  };
  onChangePassword = e => {
    this.setState({
      password: e.target.value,
    });
  };


  onChangeBatch = e => {
    this.setState({
      type: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault()
    const newVendor = {
      email: this.state.email,
      password: this.state.password,
      type: this.state.type

    }
    console.log(newVendor);






   /*axios.post("http://localhost:4000/user/login", newUser)
      .then((res) => {
        if (res.status === 200) {
          let happy = "Login Successful!"
          alert(happy);
          localStorage.setItem('DASS_USERID', res.data)

          window.location.replace("/profileuser");
        }

        console.log(res.data);

      })
      .catch(err => {

        console.log(err)
      }
      );*/
    axios.post("http://localhost:4000/user/loginvendor", newVendor)
      .then((res) => {
        if (res.status === 200) {
          let happy1 = "Login Successfully!"
          alert(happy1);
          localStorage.setItem('DASS_VENDORID', res.data)
          console.log(res.data.email)
          window.location.replace("/profilevendor");
        }

        console.log(res.data);

      })
      .catch(err => {
        alert("Authentication Failed! Check your email or password!")

        console.log(err)
      }
      );


    this.setState({
      email: '',
      password: '',
      type: ''
    });
  }

  render() {
    let className = 'divStyle';
    return (
      <div className="divStyle">

        <Card>
          <CardBody >
            <CardTitle> <h2><strong>Login</strong></h2></CardTitle>
            <CardSubtitle className="text-muted">Don't have an account?
              <Link to="/vendor"> Register. </Link></CardSubtitle>
            <br />
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit} >
              <FormGroup>

                <Label for="email">E-mail</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  size="lg"
                  placeholder="you@youremail.com"
                  className="mb-3"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />

                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  size="lg"
                  placeholder="Enter your Password"
                  className="mb-3"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
                <Button size="lg" color="dark" style={{ marginTop: "2rem" }} block>
                  {this.props.loading ?
                    <span >Logging in.. <Spinner size="sm" color="light" /></span> : <span>Login</span>}
                </Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>

      </div>
    )

  }
};