import { useState } from "react";
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//import { SettingsAccessibility, SettingsPhone } from "@mui/icons-material";

export default class Registervendor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      phone: '',
      opentime: '',
      closetime:'',
      type: 'VC'
    }
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onChangePhone = this.onChangePhone.bind(this)
    this.onChangeOpentime = this.onChangeOpentime.bind(this)
    this.onChangeClosetime = this.onChangeClosetime.bind(this)
    this.onChangeBatch = this.onChangeBatch.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChangeUsername = e => {
    this.setState({
      name: e.target.value,
    });
  };
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
  onChangePhone = e => {
    this.setState({
      phone: e.target.value,
    });
  };
  onChangeOpentime = e => {
    this.setState({
      opentime: e.target.value,
    });
  };
  onChangeClosetime = e => {
    this.setState({
      closetime: e.target.value,
    });
  };
  onChangeBatch = e => {
    this.setState({
      type: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault()
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      opentime: this.state.opentime,
      closetime: this.state.closetime,
      type: this.state.type
        
    }
    console.log(newUser);
    axios.post("http://localhost:4000/user/vendor", newUser)
    .then((res) => {
      let shout = "Happy to have you on board " + res.data.name + "!";
      alert(shout);
      console.log(res.data);
      window.location.replace("/loginvendor");
      
    })
    .catch(err => {
      if (err.res.data.name)
        alert(err.res.data.name);
      console.log(err)
    }
    );


  
  this.setState({
    name: '',
    email: '',
    password: '',
    phone: '',
    opentime: '',
    closetime:'',

    type: 'VC'
  });
}
render()
{
    return(
        <div>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
        <label>Name: </label>
        <input type ="text"
        className="form-control"
        variant="outlined"
       required={true}
        value={this.state.name}
        onChange={this.onChangeUsername}/>
      </div>
      <div className="form-group">
        <label>Email: </label>
        <input type ="email"
        className="form-control"
        variant="outlined"
       required={true}
        value={this.state.email}
        onChange={this.onChangeEmail}/>
      </div>
      <div className="form-group">
        <label>Password: </label>
        <input type ="password"
        className="form-control"
        variant="outlined"
       required={true}
        value={this.state.password}
        onChange={this.onChangePassword}/>
      </div>
      
      <div className="form-group">
        <label>Phone: </label>
        <input type ="tel"
        className="form-control"
        variant="outlined"
       required={true}
        value={this.state.phone}
        onChange={this.onChangePhone}/>
      </div>
      <div className="form-group">
        <label>Opening time: </label>
        <input type ="text"
        className="form-control"
        variant="outlined"
       required={true}
        value={this.state.opentime}
        onChange={this.onChangeOpentime}/>
      </div>
      <div className="form-group">
        <label>Closing time: </label>
        <input type ="text"
        className="form-control"
        variant="outlined"
       required={true}
        value={this.state.closetime}
        onChange={this.onChangeClosetime}/>
      </div>
      <div className="form-group">
        <label>Canteen type: </label>
        <select 
        id="type_dd"
        className="form-control" 

        value={this.state.type}
        onChange={this.onChangeBatch} >
          <option name = "VC" value="VC">VC</option>
          <option name = "JC" value="JC">JC</option>
          <option name = "BBC" value="BBC">BBC</option>
        
        </select>
      </div>
      <div className="form-group">
      <input type="submit" value="Register" className="btn btn-primary"></input>

      </div>
      <div id="comments"></div>
            </form>
        </div>
    )
}






}

