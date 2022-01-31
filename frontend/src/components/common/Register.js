import { useState } from "react";
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//import { SettingsAccessibility, SettingsPhone } from "@mui/icons-material";

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
     // password2: '',
      phone: '',
      age: '',
      type: 'UG1'
    }
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
   // this.onChangePassword2 = this.onChangePassword2.bind(this)
    this.onChangePhone = this.onChangePhone.bind(this)
    this.onChangeAge = this.onChangeAge.bind(this)
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
  /*onChangePassword2 = e => {
    this.setState({
      password: e.target.value,
    });
  };*/
  onChangePhone = e => {
    this.setState({
      phone: e.target.value,
    });
  };
  onChangeAge = e => {
    this.setState({
      age: e.target.value,
    });
  };
  onChangeBatch = e => {
    this.setState({
      type: e.target.value,
    });
  };

  onSubmit = e => {
    /*if(this.state.password!==this.state.password2){
      alert("Password does not match")
    }
    else*/
    e.preventDefault()
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
     // password2: this.state.password2,
      phone: this.state.phone,
      age: this.state.age,
      type: this.state.type

    }
    console.log(newUser);



    


    axios.post("http://localhost:4000/user/register", newUser)
      .then((res) => {
        let shout = "Happy to have you on board " + res.data.name + "!";
        alert(shout);
        console.log(res.data);
        window.location.replace("./login");
        
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
      password2:'',
      phone: '',
      age: '',
      type: 'UG1'
    });
  }

render()
{return (
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
        <label>Age: </label>
        <input type ="tel"
        className="form-control"
        variant="outlined"
       required={true}
        value={this.state.age}
        onChange={this.onChangeAge}/>
      </div>
      <div className="form-group">
        <label>Batch: </label>
        <select 
        id="type_dd"
        className="form-control" 

        value={this.state.type}
        onChange={this.onChangeBatch} >
          <option name = "UG1" value="UG1">UG1</option>
          <option name = "UG2" value="UG2">UG2</option>
          <option name = "UG3" value="UG3">UG3</option>
          <option name = "UG4" value="UG4">UG4</option>
          <option name = "PG1" value="PG1">PG1</option>
          <option name = "PG2" value="PG2">PG2</option>
          <option name = "CASE" value="CASE">CASE</option>
        </select>
      </div>
      <div className="form-group">
      <input type="submit" value="Register" className="btn btn-primary"></input>

      </div>
      <div id="comments"></div>
    </form>
  </div>
/*  <Grid container align={"center"} spacing={2} >
    <Grid item xs={12}>
      <TextField
        label="Name"
        variant="outlined"
        value={this.state.name}
        onChange={this.onChangeUsername}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        label="Email"
        variant="outlined"
        value={this.state.email}
        onChange={this.onChangeEmail}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        label="Password"
        variant="outlined"
        value={this.state.password}
        onChange={this.onChangePassword} />

    </Grid>
    <Grid item xs={12}>
      <TextField
        label="Confirm Password"
        variant="outlined"
        value={this.state.password}
        onChange={this.onChangePassword} />

    </Grid>
    <Grid item xs={12}>
      <TextField
        label="Contact number"
        variant="outlined"
        value={this.state.phone}
        onChange={this.onChangePhone} />

    </Grid>
    <Grid item xs={12}>
      <TextField
        label="Age"
        variant="outlined"
        value={this.state.age}
        onChange={this.onChangeAge} />

    </Grid>
    <Grid item xs={12}>
      
       <label>Batch</label>
        
        <select value={this.state.type}
        onChange={this.onChangeBatch} >
          <option name = "UG1" value="UG1">UG1</option>
          <option name = "UG2" value="UG2">UG2</option>
          <option name = "UG3" value="UG3">UG3</option>
          <option name = "UG4" value="UG4">UG4</option>
          <option name = "PG1" value="PG1">PG1</option>
          <option name = "PG2" value="PG2">PG2</option>
          <option name = "CASE" value="CASE">CASE</option>
        </select>

    </Grid>
    <Grid item xs={12}>
      <input submit="submit" value="Register" className="btn btn-primary"></input>
    </Grid>
  </Grid>*/
)
}
}


