import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { render } from "react-dom";
import { useState, useEffect } from "react";


    let vendor="";
    let vend_name="";
    let name="";
    let emailid = ""
export default class AddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ' ',
            food_type: 'Veg',
            price: '',
            total_quantity: '',
            availability: 'JC',
            description: '',
            vendor:'',
            email:'',
            addons1:'',
            addons2:'',
            addons3:'',
            add1price:'',
            add2price:'',
            add3price:'',
            
            
        }
        name = JSON.parse(localStorage.getItem('DASS_NAME'))
        vendor = JSON.parse(localStorage.getItem('DASS_EMAIL'))
        vend_name = name.name    
         emailid = vendor.email
         

        console.log(vend_name)
        console.log(emailid)
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangeVendor= this.onChangeVendor.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeFoodtype = this.onChangeFoodtype.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChnageTotalQuantity = this.onChnageTotalQuantity.bind(this);
        this.onChangeAvailable = this.onChangeAvailable.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeAddons1 = this.onChangeAddons1.bind(this);
        this.onChangeAddons2 = this.onChangeAddons2.bind(this);
        this.onChangeAddons3= this.onChangeAddons3.bind(this);
        this.onChangeAdd1Price = this.onChangeAdd1Price.bind(this);
        this.onChangeAdd2Price = this.onChangeAdd2Price.bind(this);
        this.onChangeAdd3Price = this.onChangeAdd3Price.bind(this);
        this.onChangeSubmit = this.onChangeSubmit.bind(this);
    }
    onChangeEmail= e => {
        this.setState({
            email:e.target.value,
        })
    };
    onChangeUsername = e => {
        this.setState({
            name: e.target.value,
        })
    };
    onChangeVendor = e =>{
        this.setState({
            vendor:e.target.value,
        })
    };
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
            addons1:e.target.value,
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
    onChangeSubmit = e => {
        e.preventDefault()
        
        const newProduct = {
            vendor: vend_name,
            email: emailid,
            name: this.state.name,
            food_type: this.state.food_type,
            price: this.state.price,
            total_quantity: this.state.total_quantity,
            availability: this.state.availability,
            description: this.state.description,
            addons1:this.state.addons1,
            addons2:this.state.addons2,
            addons3:this.state.addons3,
            add1price: this.state.add1price,
            add2price:this.state.add2price,
            add3price:this.state.add3price
            
        }
        console.log(newProduct)
        
var reveal = ''
        axios.post("http://localhost:4000/user/products", newProduct)
            .then((res) => {
                //alert("hiiii");
                if(res.status === 200){
                let shoot = "Yayyy!! Food item added !";
                alert(shoot);
                console.log(res.data);
               
                window.location.replace("/profilevendor")
            }
           // reveal=   localStorage.setItem('DASS_ITEM',JSON.stringify({name: user.name}));
            //console.log(reveal);

            console.log(res.data);
            alert(res.data.name);
            //alert(newProduct.name);
            newProduct.save()
            // alert(newProduct.id);
        })
        .catch(err => {
            
            console.log(err)
        }
        );
        this.setState({
            vendor:'',
            email:'',
            name: ' ',
            food_type: '',
            price: '',
            total_quantity: '',
            availability: '',
            description: '',
            addons1:'',
            addons2:'',
            addons3:'',
            add1price:'',
            add2price:'',
            add3price:''
            
        })
        const [user, setID] = useState("");
        useEffect(() => {
axios.post("http://localpost:4000/user/products/viewitem")
.then((res)=>{
    console.log(res.data)
    setID(res.data)

})
            
;
  //console.log(reveal);
}, []);
        //alert(this.setState.name)
    }
    
    render()
    { //localStorage.setItem('DASS_ITEMS',_id)
        return (

            <div>
                <form onSubmit={this.onChangeSubmit}>
                <div className="form-group">
                        
                        <label>Vendor Name: </label>
                        <input type="text"
                            className="form-control"
                            variant="outlined"
                            required={true}
                           value= {vend_name}
                             />

                    </div>
                    <div className="form-group">
                        
                        <label>Vendor's Email: </label>
                        <input type="text"
                            className="form-control"
                            variant="outlined"
                            required={true}
                            value={emailid}
                             />

                    </div>
                    <div className="form-group">
                        
                        <label>Food Item Name: </label>
                        <input type="text"
                            className="form-control"
                            variant="outlined"
                            required={true}
                            value={this.state.name}
                            onChange={this.onChangeUsername} />

                    </div>

                    <div className="form-group">
                        <label>Food type: </label>

                        <select
                            id="type_dd"
                            className="form-control"


                            value={this.state.food_type}
                            onChange={this.onChangeFoodtype} >
                            <option name="Veg" value="Veg">Veg</option>
                            <option name="Non-veg" value="Non-veg">Non-Veg</option>

                        </select></div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type="number"
                            className="form-control"
                            variant="outlined"
                            required={true}
                            value={this.state.price}
                            onChange={this.onChangePrice} />
                    </div>
                    <div className="form-group">
                        <label>Total Quantity: </label>
                        <input type="number"
                            className="form-control"
                            variant="outlined"
                            required={true}
                            value={this.state.total_quantity}
                            onChange={this.onChnageTotalQuantity} />
                    </div>
                    <div className="form-group">
                        <label>Available at: </label>

                        <select
                            id="type_dd"
                            className="form-control"

                            value={this.state.availability}
                            onChange={this.onChangeAvailable} >
                            <option name="JC" value="JC">JC</option>
                            <option name="VC" value="VC">VC</option>
                            <option name="BBC" value="BBC">BBC</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>1st Addon: </label>
                        <input type="text"
                            className="form-control"
                            variant="outlined"

                            value={this.state.addons1}
                            onChange={this.onChangeAddons1} />

                    </div>
                    <div className="form-group">
                        <label>Addon Price: </label>
                        <input type="number"
                            className="form-control"
                            variant="outlined"

                            value={this.state.add1price}
                            onChange={this.onChangeAdd1Price} />

                    </div>
                    <div className="form-group">
                        <label>2nd Addon: </label>
                        <input type="text"
                            className="form-control"
                            variant="outlined"

                            value={this.state.addons2}
                            onChange={this.onChangeAddons2} />

                    </div>
                    <div className="form-group">
                        <label>Addon Price: </label>
                        <input type="number"
                            className="form-control"
                            variant="outlined"

                            value={this.state.add2price}
                            onChange={this.onChangeAdd2Price} />

                    </div>
                    <div className="form-group">
                        <label>3rd Addons: </label>
                        <input type="text"
                            className="form-control"
                            variant="outlined"

                            value={this.state.addons3}
                            onChange={this.onChangeAddons3} />

                    </div>
                    <div className="form-group">
                        <label>Addon Price: </label>
                        <input type="number"
                            className="form-control"
                            variant="outlined"

                            value={this.state.add3price}
                            onChange={this.onChangeAdd3Price} />

                    </div>
                   

                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            className="form-control"
                            variant="outlined"

                            value={this.state.description}
                            onChange={this.onChangeDescription} />

                    </div>
<br></br>
                    <div className="form-group">
                        <input type="submit" value="Add item" className="btn btn-primary"></input>

                    </div>
                    <div id="comments"></div>
                </form>
            </div >
        )
    }
};