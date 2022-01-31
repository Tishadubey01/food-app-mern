import axios from 'axios'
import { useState, useEffect } from "react";
import React from 'react';
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";


function ProfileVendor() {

    let idname = ""
    const [user, setID] = useState("");
    useEffect(() => {
        idname = localStorage.getItem('DASS_VENDORID')



        axios
            .get("http://localhost:4000/user/vendor/" + idname) // unimplemented
            .then((response) => {

                console.log(response.data)
                setID(response.data)
            })
            
            ;
        }, []);
        localStorage.setItem('DASS_EMAIL', JSON.stringify({email:user.email}) )
        
        localStorage.setItem('DASS_NAME',JSON.stringify({name:user.name}))
        console.log(localStorage.getItem('DASS_EMAIL'))
        console.log(localStorage.getItem('DASS_NAME'))
       
    return (
        <div>
            <h1>
                Welcome {user.name}! You have logged in as Vendor! </h1>
            <br></br>  <h2> PROFILE DETAILS</h2><br></br>
            <Link to="/vendorupdate" className='btn btn-primary m-2 mr-4' >Update Profile</Link>
            <Link to="/vendordashboard" className="btn btn-primary m-2 mr-4 " >Dasboard</Link>
            <Link to="/addproduct" className="btn btn-primary m-2 mr-4 " >Add Food Item</Link>

            <Link to="/" className="btn btn-primary m-2 mr-4"> Logout</Link>
            <table className="table table-responsive-lg table-hover">
                <tbody>
                    <br></br>
                    <tr>
                        <th> Username </th>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <th> Email    </th>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <th> Phone  </th>
                        <td>{user.phone}</td>
                    </tr>
                    
                    <tr>
                        <th> Working at     </th>
                        <td>{user.type}</td>
                    </tr>
                </tbody>
            </table>
        </div>)
};

export default ProfileVendor;
