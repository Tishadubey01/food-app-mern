import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import UsersList from "./components/users/foodsearchdash";
import Home from "./components/common/Home";
import Register from "./components/common/Register";
import Navbar from "./components/templates/Navbar";
import Profile from "./components/users/Profile";
import Dropdown from "./components/common/dropdown";
import Registervendor from "./components/common/Registervendor";
import Signin from "./components/common/Signin";
import Login from "./components/common/Login";
import LoginVendor from "./components/common/Loginvendor";
import Food from "./components/users/Items";
import ProfileVendor from "./components/users/Profilevendor";
import CustomerNavbar from "./components/users/app";
import { render } from "react-dom";
import  AddedItem from "./components/common/dashfinal"
import AddProduct from "./components/common/addproduct";
import VendorDash from "./components/users/vendaordash";
import Editprofiler from "./components/common/updatevendor";
import EditProduct from "./components/common/updateproduct";
import EditUserprofiler from "./components/common/updateuser";
import UsersDashList from "./components/common/userdashboard";
import ViewOrders from "./components/common/order";
const Layout = () => {
  /*render() 
  {
    let idname = localStorage.getItem('DASS_USERID');
    let nav= '';
    if(window.location === "./profileuser")
    nav = <CustomerNavbar />;
    else
    nav = <Navbar />;


  }*/
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="profileuser" element={<Profile />} />
          <Route path="user" element={<Dropdown />}/>
          <Route path="vendor" element={<Registervendor />}/>
          <Route path="signin" element={<Signin />}/>
          <Route path="login" element={<Login />}/>
          <Route path="loginvendor" element={<LoginVendor />}/>
          <Route path="allfood" element={<Food />}/>
          <Route path="profilevendor" element={<ProfileVendor />}/>
          <Route path="addproduct" element={<AddProduct />}/>
          <Route path="vendordashboard" element={<UsersList />}/>
          <Route path="vendorupdate" element={<Editprofiler />}/>
          <Route path="updateitem" element={<EditProduct />}/>
          <Route path="userupdate" element={<EditUserprofiler />}/>
          <Route path="userdash" element={<UsersDashList />}/>
          <Route path="orders" element={<ViewOrders />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
