import axios from "axios";
import { useState, useEffect } from "react";
import React from 'react';
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";


function Food() {
    let foodid = ""
    const[food,setID]= useState("");
    useEffect(()=> {
        foodid= localStorage.getItem('DASS_FOODID')
        axios.get("http://localhost:4000/user/products")
        .then((response) => {
            console.log(response.data)
            setID(response.data)
        });
    },[]);
    return (
        <div>
    <h1> hello</h1>
        </div>
    )  
};
export default Food;

     