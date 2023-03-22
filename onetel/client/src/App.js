import React, { Component } from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import DeliveryAdmin from "./components/Delivery/DeliveryAdmin";
import NavBar from "./components/NavBar";
import EditDelivery from "./components/Delivery/EditDelivery";
import  Profile from './components/Profile'
import Register from './components/Register';  

import Login from './components/Login';
import MaybeShowNavBar from './MaybeShowNavBar';
import InsertDelivery from './components/Delivery/InsertDelivery'
import Slidebar from './components/slidebar';
 export default class App extends Component {
   render() {
     return (
       <div>
        <BrowserRouter>
        <MaybeShowNavBar>
        <NavBar/>
        </MaybeShowNavBar>
        
        <div className="container">
        <Routes>
        <Route exact path="/"  element={<Slidebar/>}></Route> 


        <Route exact path="/delivery/ad"  element={<DeliveryAdmin/>}></Route> 
        <Route exact  path="/edit/:id"  element={<EditDelivery/>}/>
        <Route exact path="/profile"  element={<Profile/>}></Route> 
        <Route exact path="/login"  element={<Login/>}></Route> 
       <Route exact path="/register"  element={<Register/>}></Route> 

       <Route exact path="/insertDelivery"  element={<InsertDelivery/>}></Route> 
        
       </Routes>
        </div>
                  
      </BrowserRouter>
       </div>
     )
   }
 }
 