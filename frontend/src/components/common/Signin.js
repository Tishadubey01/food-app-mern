import { Component, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import { render } from "@testing-library/react";

const Signin =() =>  {
    const navigate = useNavigate();

function Handle() {
      navigate("/register")
}
function Handlemax() {
  navigate("/vendor")
}
/*function Onhandlemax() {
  navigate("/registervendor")
}*/
render()

    
};
export default Signin;