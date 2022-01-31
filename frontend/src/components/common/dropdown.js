import { Component, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import { render } from "@testing-library/react";


const Dropdown =() =>  {
    const navigate = useNavigate();

function Onhandle() {
      navigate("/register")
}
function Onhandlemax() {
  navigate("/vendor")
}
/*function Onhandlemax() {
  navigate("/registervendor")
}*/
render()
{return (

<div className="container">
<button type="button" class="button">
☰ Register
</button>
<div class="dropdown">
  <ul>
    <li onClick={Onhandle}>Buyer
      </li> 
      <li onClick={Onhandlemax} >Vendor</li>
      </ul>
    
      </div>
</div>
)
}
};
export default Dropdown;