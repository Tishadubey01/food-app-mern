import React, { Component } from "react";
import axios from "axios";
import ls from "local-storage";
import { TextField } from "@material-ui/core";

class recruiterProfile extends Component {
  constructor() {
    super();
    this.state = {
      name : "",
      email : "",
      contactNumber : "",
      bio : "",
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // const response;
  componentDidMount() {
    const orderdata = { mail: ls.get("email") };
    // console.log(orderdata);
    axios
      .post("http://localhost:4000/recruiters/viewRecruiterProfile", orderdata)
      .then((res) => {
        this.setState({ name: res.data.name });
        this.setState({ email: res.data.email});
        this.setState({ contactNumber: res.data.contactNumber});
        this.setState({ bio: res.data.bio})
        // console.log(res.data);
        // console.log(this.state.deadline);
      })
      .catch(function (err) {
        alert(err);
        // alert(res.response.data[Object.keys(res.response.data)[0]]);
      });
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const orderdata = {
      
      mail: ls.get("email"),
      contactNumber: this.state.contactNumber,
      bio: this.state.bio,
    };
    // console.log(orderdata);
    axios
      .post("http://localhost:4000/recruiters/updateRecruiterProfile", orderdata)
      .then((res) => {
        console.log(res);
        alert("Information Updated Successfully");
        window.location.reload();
      })
      .catch(function (res) {
        // alrt(err);
        alert(res.response.data[Object.keys(res.response.data)[0]]);
      });
    // ls.set("title", "");
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
            //   onChange={this.handleChange}
            //   id="maxApplications"
                // error = {errors.maxApplications}
            />
          </div>

          <div className="form-group">
            <label>Email ID</label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
            //   onChange={this.handleChange}
              //   error = {errors.maxPositions}
            //   id="maxPositions"
            />
          </div>

          <div className="form-group">
            <label>Contact Number: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.contactNumber}
              onChange={this.handleChange}
                error = {errors.contactNumber}
              id="contactNumber"
            />
          </div>

          <div className="form-group">
            <label>Bio</label>
            <input
              type="text"
              className="form-control"
              value={this.state.bio}
              onChange={this.handleChange}
                error = {errors.bio}
              id="bio"
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

export default recruiterProfile;