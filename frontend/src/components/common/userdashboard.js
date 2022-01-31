import { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Link, useHistory } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
let mail = ""
let emailid = ""
const UsersDashList = (props) => {
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [sortName, setSortName] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {

    mail = localStorage.getItem('DASS_EMAIL')
    let mailparse = JSON.parse(mail)
    emailid = mailparse.email;

    const newUser = {
      email: emailid
    }

    console.log(newUser)
    axios
      .get("http://localhost:4000/user/products")
      .then((response) => {
        //alert(newUser)
        //alert(emailid)

        //alert(response.data)
        setUsers(response.data);
        setSortedUsers(response.data);
        setSearchText("");
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //localStorage.setItem('DASS_PRODUCT', res.data._id)
  //console.log('DASS_PRODUCT')
  const Showitem = () => {
    this.props.history.push({
      pathname: '/user/products',
      name: this.state.email
    })
  }

  const sortChange = () => {
    let usersTemp = users;
    const flag = sortName;
    usersTemp.sort((a, b) => {
      if (a.date != undefined && b.date != undefined) {
        return (1 - flag * 2) * (new Date(a.date) - new Date(b.date));
      } else {
        return 1;
      }
    });
    setUsers(usersTemp);
    setSortName(!sortName);
  };

  const customFunction = (event) => {
    console.log(event.target.value);
    setSearchText(event.target.value);
    
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={3} lg={3}>
          <List component="nav" aria-label="mailbox folders">

          </List>
        </Grid>
        <Grid item xs={12} md={9} lg={9}>
          <List component="nav" aria-label="mailbox folders">
            <TextField
              id="standard-basic"
              label="Search"
              fullWidth={true}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
             onChange={customFunction}
            />
          </List>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={3} lg={3}>
          <List component="nav" aria-label="mailbox folders">


          </List>
        </Grid>
        <Grid item xs={12} md={9} lg={9}>
          <Paper>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell> Sr No.</TableCell>
                  <TableCell>
                    {" "}

                    Food Name
                  </TableCell>
                  <TableCell>Vendor's email</TableCell>
                  <TableCell>Food Type</TableCell>
                  <TableCell>Total Quantity available </TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Addon 1 </TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Addon 2 </TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Addon 3</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Options</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {users.filter((e)=>{
                    try{
                    return e.name.includes(searchText)}
                catch(e){
                    return false
                }}).map((user, ind) => (
                  <TableRow key={ind}>
                    <TableCell>{ind}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.food_type}</TableCell>
                    <TableCell>{user.total_quantity}</TableCell>
                    <TableCell>{user.price}</TableCell>
                    <TableCell>{user.addons1}</TableCell>
                    <TableCell>{user.add1price}</TableCell>

                    <TableCell>{user.addons2} </TableCell>
                    <TableCell> {user.add2price}</TableCell>
                    <TableCell>{user.addons3} </TableCell>
                    <TableCell> {user.add3price}</TableCell>
                    <TableCell><Button Link to="/placeorder"> Place Order </Button></TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default UsersDashList;