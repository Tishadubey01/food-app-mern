import axios from 'axios';
import { useState, useEffect, Component } from "react";
import React from 'react';
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";

function AddedItem() {

    let idname = ""
    const [users, setEmail] = useState("");
    useEffect(() => {
        idname = localStorage.getItem('DASS_EMAIL')



        axios
            .post("http://localhost:4000/user/products/" + idname) // unimplemented
            .then((response) => {

                console.log(response.data)
                setEmail(response.data)
                alert(response.data)
                alert(response.data.email)
            })

            ;
    }, []);


    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Quantity Left</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((currentProduct, ind) => {
                            return (
                                <tr>
                                    <td>{currentProduct.item_name}</td>
                                    <td>{currentProduct.price}</td>
                                    <td>{currentProduct.quantity_remain}</td>
                                    <td>{currentProduct.food_type}</td>
                            
                                </tr>
                            )
                        })}
                    
                </tbody>
            </table>
        </div>
    )

}
export default AddedItem;