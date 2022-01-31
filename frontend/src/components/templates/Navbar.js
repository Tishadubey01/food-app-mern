import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setOpen] = React.useState(false);
  const [dropdownOpen1, setOpen1] = React.useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  const toggle1 = () => setOpen1(!dropdownOpen1);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Canteen Portal
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          
          <ButtonDropdown isOpen={dropdownOpen1} toggle={toggle1}>
           <DropdownToggle caret>Register </DropdownToggle>
           <DropdownMenu>
             <DropdownItem  href="./register">Buyer</DropdownItem>
             <DropdownItem href="./vendor">Vendor</DropdownItem>
           </DropdownMenu>
           
         </ButtonDropdown>
         
         
         <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
           <DropdownToggle caret>Sign In </DropdownToggle>
           <DropdownMenu>
             <DropdownItem  href="./login">Buyer</DropdownItem>
             <DropdownItem href="./loginvendor">Vendor</DropdownItem>
           </DropdownMenu>
         </ButtonDropdown>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
