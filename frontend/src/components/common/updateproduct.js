import React, { Component } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { Form } from 'react-bootstrap'
import ls from "local-storage";
let vendor = "";
let prom = "";
let emailid = vendor
let proname = prom
let newBuyer = proname
const newEMail = emailid
//console.log(proname)
export default class EditProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            name: '',
            food_type: '',
            price: '',
            total_quantity: '',
            quantity_remain:'',
            images:'',
            availability: '',
            description: '',
            vendor: '',
            email: '',
            addons1: '',
            add1price: '',
            addons2: '',
            add2price: '',
            addons3: '',
            add3price: '',
            errors: {}
        }
        vendor = JSON.parse(localStorage.getItem('DASS_EMAIL'));
        emailid = vendor.email
        prom = JSON.parse(localStorage.getItem('DASS_ITEM'));
        proname = prom.name
        newBuyer = proname

        axios.post('http://localhost:4000/user/products/viewfooditem', {name: newBuyer})
            .then((res) => {
                this.setState({ name: res.data.name });
                this.setState({ food_type: res.data.food_type });
                this.setState({ price: res.data.price });
                this.setState({ total_quantity: res.data.total_quantity });
                this.setState({ availability: res.data.availability });
                this.setState({ vendor: res.data.vendor });


                this.setState({ email: res.data.email });
                this.setState({ addons1: res.data.addons1 })
                this.setState({ add1price: res.data.add1price });
                this.setState({ addons2: res.data.addons2 })
                this.setState({ add2price: res.data.add2price });
                this.setState({ addons3: res.data.addons3 })
                this.setState({ add3price: res.data.add3price });
                console.log(newBuyer, res.data);
            });

        //this.onChangeEmail = this.onChangeEmail.bind(this);
        //this.onChangeVendor = this.onChangeVendor.bind(this);
        //this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeFoodtype = this.onChangeFoodtype.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChnageTotalQuantity = this.onChnageTotalQuantity.bind(this);
        this.onChangeAvailable = this.onChangeAvailable.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeAddons1 = this.onChangeAddons1.bind(this);
        this.onChangeAddons2 = this.onChangeAddons2.bind(this);
        this.onChangeAddons3 = this.onChangeAddons3.bind(this);
        this.onChangeAdd1Price = this.onChangeAdd1Price.bind(this);
        this.onChangeAdd2Price = this.onChangeAdd2Price.bind(this);
        this.onChangeAdd3Price = this.onChangeAdd3Price.bind(this);
        this.onChangeSubmit = this.onChangeSubmit.bind(this);
    }
    /*onChangeEmail = e => {
        this.setState({
            email: e.target.value,
        })
    };*/
    /* onChangeUsername = e => {
         this.setState({
             name: e.target.value,
         })
     };*/
    /*onChangeVendor = e => {
        this.setState({
            vendor: e.target.value,
        })
    };*/
    onChangeFoodtype = e => {
        this.setState({
            food_type: e.target.value,
        })
    };
    onChangePrice = e => {
        this.setState({
            price: e.target.value,
        })
    };
    onChnageTotalQuantity = e => {
        this.setState({
            total_quantity: e.target.value,
        })
    };
    onChangeAvailable = e => {
        this.setState({
            availability: e.target.value,
        })
    };
    onChangeDescription = e => {
        this.setState({
            description: e.target.value,
        })
    };
    onChangeAddons1 = e => {
        this.setState({
            addons1: e.target.value,
        })
    };
    onChangeAddons2 = e => {
        this.setState({
            addons2: e.target.value,
        })
    };
    onChangeAddons3 = e => {
        this.setState({
            addons3: e.target.value,
        })
    };
    onChangeAdd1Price = e => {
        this.setState({
            add1price: e.target.value,
        })
    };
    onChangeAdd2Price = e => {
        this.setState({
            add2price: e.target.value,
        })
    };
    onChangeAdd3Price = e => {
        this.setState({
            add3price: e.target.value,
        })
    };
    onChangeSubmit(e) {
        e.preventDefault();
//alert("hiiii")
        const newBuyer = {
            vendor: this.state.vendor,
            email: this.state.email,
            name: this.state.name,
            food_type: this.state.food_type,
            price: this.state.price,
            total_quantity: this.state.total_quantity,
            availability: this.state.availability,
            description: this.state.description,
            addons1: this.state.addons1,
            addons2: this.state.addons2,
            addons3: this.state.addons3,
            add1price: this.state.add1price,
            add2price: this.state.add2price,
            add3price: this.state.add3price

        };
        console.log(newBuyer)
        axios.post('http://localhost:4000/user/products/updateprofile', newBuyer)
            .then((res) => {
                console.log(res);
                alert("Information updated");
                window.location.replace('/vendordashboard');
            })
            .catch(function (res) {
                alert(res.response.data[Object.keys(res.response.data)[0]]);
            });
        this.setState({
            name: '',
            food_type: '',
            price: '',
            total_quantity: '',
            availability: '',
            description: '',
            vendor: '',
            email: '',
            addons1: '',
            addons2: '',
            addons3: '',
            add1price: '',
            add2price: '',
            add3price: '',
        })


    }
    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <form noValidate onSubmit={this.onChangeSubmit}>
                    <div className="form-group">
                        <label>Item Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={proname}
                        //value={proname['name']}
                        //onChange={pro}
                        //   id="maxApplications"
                        // error = {errors.maxApplications}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email ID</label>
                        <input
                            type="text"
                            className="form-control"
                            value={emailid}
                        //onChange={this.handleChange}
                        //   error = {errors.maxPositions}
                        //   id="maxPositions"
                        />
                    </div>

                    <div className="form-group">
                        <label>Price: </label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangePrice}
                            error={errors.price}
                            id="price"
                        />
                    </div>
                    <div className="form-group">
                        <label>Food Type: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.food_type}
                            onChange={this.onChangeFoodtype}
                            error={errors.food_type}
                            id="food_type"
                        />
                    </div>
                    <div className="form-group">
                        <label>Total Quantity available: </label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.total_quantity}
                            onChange={this.onChnageTotalQuantity}
                            error={errors.total_quantity}
                            id="total_quantity"
                        />
                    </div>
                    <div className="form-group">
                        <label>Addon1: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.addons1}
                            onChange={this.onChangeAddons1}
                            error={errors.addons1}
                            id="addons1"
                        />
                    </div>
                    <div className="form-group">
                        <label>Addon1 Price: </label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.add1price}
                            onChange={this.onChangeAdd1Price}
                            error={errors.add1price}
                            id="add1price"
                        />
                    </div>
                    <div className="form-group">
                        <label>Addon2: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.addons2}
                            onChange={this.onChangeAddons2}
                            error={errors.addons2}
                            id="addons2"
                        />
                    </div>
                    <div className="form-group">
                        <label>Addon2 Price: </label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.add2price}
                            onChange={this.onChangeAdd2Price}
                            error={errors.add2price}
                            id="add2price"
                        />
                    </div>
                    <div className="form-group">
                        <label>Addon3: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.addons3}
                            onChange={this.onChangeAddons3}
                            error={errors.addons3}
                            id="addons3"
                        />
                    </div>
                    <div className="form-group">
                        <label>Addon3 Price: </label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.add3price}
                            onChange={this.onChangeAdd3Price}
                            error={errors.add3price}
                            id="add3price"
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            error={errors.description}
                            id="description"
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