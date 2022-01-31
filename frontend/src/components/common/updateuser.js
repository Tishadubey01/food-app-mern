import React, { Component } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { Form } from 'react-bootstrap'
import ls from "local-storage";
let user = "";
user = JSON.parse(localStorage.getItem('DASS_USEREMAIL'));
console.log(user)

let emailid1 = user.email
const newBuyer = emailid1
export default class EditUserprofiler extends Component {

  // console.log(this.state.deadline);
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      phone: '',
      type: '',
      age:'',
      errors: {}
    }
    axios.post('http://localhost:4000/user/register/viewuserprofile', {email: newBuyer})
  .then((res) => {
    this.setState({ name: res.data.name });
    this.setState({ email: res.data.email });
    this.setState({ phone: res.data.phone });
    this.setState({ type: res.data.type })
    this.setState({age: res.data.age});
    this.setState({password:res.data.password});
    console.log(newBuyer, res.data);})

  
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this); 
    // this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //this.onChange = this.onChange.bind(this);
  }
  onChangeUsername = e => {
    this.setState({
      name: e.target.value,
    })
  };
  onChangePhone = e => {
    this.setState({
      phone: e.target.value,
    })
  };
  onChangeType = e => {
    this.setState({
      type: e.target.value,
    })
  };
  onChangeAge = e => {
    this.setState({
      age: e.target.value,
    })
  };
  onChangePassword = e => {
    this.setState({
      password: e.target.value,
    })
  };
  //onChangeUsername(event) {
  //      console.log(event.target.name)
  //     console.log(event.target.value)
  //  this.setState({ name: event.target.value });
  //}
  /*handleChange(event) {
    //let value = Array.from(e.target.selectedOptions, option => option.value);
    this.setState({ [event.target.id]: event.target.value });
  }*/
  /*onChange = e => {
      var nam = e.target.name;
      var val = e.target.value;
      this.setState({ [nam]: val });
  }*/
  /*componentDidMount(){
    const orderdata = { email: ls.get("email") };
    axios.post('http://localhost:4000/user/vendor/viewprofile',orderdata)
    .then((res) => {
      this.setState({ name: res.data.name });
      this.setState({ email: res.data.email});
      this.setState({ phone: res.data.phone});
      this.setState({ type: res.data.type})
      console.log(res.data);
      // console.log(this.state.deadline);
    })
    .catch(function (err) {
      alert(err);
      // alert(res.response.data[Object.keys(res.response.data)[0]]);
    });}*/
  onSubmit(e) {
    e.preventDefault();
    const newBuyer = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      password:this.state.password,
      type: this.state.type,
      phone: this.state.phone,

    };
    console.log(newBuyer)


    axios.post('http://localhost:4000/user/register/updateuserprofile', newBuyer)
      .then((res) => {
        console.log(res);
        alert("Information updated");
        window.location.replace('/profileuser');
      })
      .catch(function (res) {
        alert(res.response.data[Object.keys(res.response.data)[0]]);
      });
    this.setState({
      name: '',
      phone: '',
      type: '',
      email: '',
      age:'',
      password:''
    })


  }

  render() {
    const { errors } = this.state;
    return (


      <div className="container">
        <form noValidate onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeUsername}
            //   id="maxApplications"
            // error = {errors.maxApplications}
            />
          </div>

          <div className="form-group">
            <label>Email ID</label>
            <input
              type="text"
              className="form-control"
              value={emailid1}
            //onChange={this.handleChange}
            //   error = {errors.maxPositions}
            //   id="maxPositions"
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            //   id="maxApplications"
            // error = {errors.maxApplications}
            />
          </div>
          <div className="form-group">
            <label>Phone: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
              error={errors.phone}
              id="phone"
            />
          </div>
          <div className="form-group">
            <label>Age: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeAge}
            //   id="maxApplications"
            // error = {errors.maxApplications}
            />
          </div>
          <div className="form-group">
            <label>Type</label>
            <input
              type="text"
              className="form-control"
              value={this.state.type}
              onChange={this.onChangeType}
              error={errors.type}
              id="type"
            />
          </div>


          <br></br>

          <div className="form-group">
            <input type="submit" value="Update" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}



