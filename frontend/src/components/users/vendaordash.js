/*import axios from 'axios'
import { useState, useEffect } from "react";
import React from 'react';
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";

function VendorDash() {
    let vendorname=""
    const[user,setName] = useState("");
    
    useEffect (()=>{
        vendorname = localStorage.getItem('DASS_ITEM')

        axios.get("http://localhost:4000/user/products/vendor/" + vendorname)
        .then((response) => {
            
            console.log(response.data)
            setName(response.data)
        })
        ;
}, []);
return(
    <div>
        <h1>
            Hello !{users.map(user,ind) => (
                {user.name} hie
            )}how youuu
        </h1>
    </div>

)
    

};
export default VendorDash;
*/


