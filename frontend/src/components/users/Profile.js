import axios from 'axios';
import { useState, useEffect } from "react";
import React from 'react';
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";


function Profile() {
  
  let idname = ""
  const [user, setID] = useState("");
  useEffect(() => {
   idname = localStorage.getItem('DASS_USERID')



    axios
      .get("http://localhost:4000/user/" + idname) // unimplemented
      .then((response) => {
        
        console.log(response.data)
        setID(response.data)
      })
      ;
  }, []);
  localStorage.setItem('DASS_USEREMAIL', JSON.stringify({email:user.email}) )
        
  localStorage.setItem('DASS_USERNAME',JSON.stringify({name:user.name}))
  console.log(localStorage.getItem('DASS_USEREMAIL'))
  console.log(localStorage.getItem('DASS_USERNAME'))
 
  return (
  <div>
    <h1>
      Welcome {user.name}! Enjoy your delicious meal </h1>
 <br></br>  <h2> PROFILE DETAILS</h2><br></br>
   <Link to="/userdash" className="btn btn-primary m-2 mr-4 " >Dasboard</Link>
   <Link to="/userupdate" className='btn btn-primary m-2 mr-4' >Update Profile</Link>
   <Link to="/orders" className='btn btn-primary m-2 mr-4' >View Orders</Link>

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
                        <th> Age   </th>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <th> Type     </th>
                        <td>{user.type}</td>
                    </tr>
                </tbody>
            </table>
  </div>)
};

export default Profile
