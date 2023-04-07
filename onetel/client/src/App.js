import React, { Component } from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import DeliveryAdmin from "./components/Delivery/DeliveryAdmin";
import EditDelivery from "./components/Delivery/EditDelivery";
import NavBar from "./components/NavBar";
import  Profile from './components/Profile'
import Register from './components/Register';  
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import InsertDelivery from './components/Delivery/InsertDelivery';
import Home from './components/Home'; 
import Footer from './components/footer';
import RepairCus from './components/Repair/RepairCus';
import RepairAdmin from './components/Repair/RepairAdmin';
import AddProduct from './components/Product/addProduct'; 
import CustomerAdmin from './components/Customer/CustomerAdmin';
 export default class App extends Component {
   render() {
     return (
       <div>
        <BrowserRouter>
      
        <NavBar/>
        
            
        
        <div className="container">
        <Routes>
        <Route exact path="/"  element={<Home/>}></Route> 
        <Route exact path="/admin"  element={<Dashboard/>}></Route> 
        <Route exact path="/profile"  element={<Profile/>}></Route> 
        <Route exact path="/login"  element={<Login/>}></Route> 
       <Route exact path="/register"  element={<Register/>}></Route> 
       <Route exact path="/insertDelivery"  element={<InsertDelivery/>}></Route> 

       <Route exact path="/delivery/ad"  element={<DeliveryAdmin/>}></Route> 
        <Route exact  path="/edit/:id"  element={<EditDelivery/>}/>
        

        <Route exact path="/customer/ad"  element={<CustomerAdmin/>}></Route> 


        <Route exact path="/repairCus"  element={<RepairCus/>}></Route>
        <Route exact path="/repairAdmin"  element={<RepairAdmin/>}></Route> 


        <Route exact path="/addProduct"  element={<AddProduct/>}></Route> 
    
       </Routes>
        </div>
        <Footer/>          
      </BrowserRouter>
       </div>
     )
   }
 }
 