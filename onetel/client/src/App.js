 import React, { Component } from 'react'
 import {BrowserRouter,Route, Routes} from 'react-router-dom'
 import DeliveryAdmin from "./components/DeliveryAdmin";
 import NavBar from "./components/NavBar";
 import EditDelivery from "./components/EditDelivery";
 export default class App extends Component {
   render() {
     return (
       <div>
        <BrowserRouter>
        <NavBar></NavBar>
        <div className="container">
        
        <Routes>
         
        <Route exact path="/delivery/ad"  element={<DeliveryAdmin/>}></Route> 
        <Route exact  path="/edit/:id"  element={<EditDelivery/>}/>
           
         
        </Routes>
        </div>
                  
      </BrowserRouter>
       </div>
     )
   }
 }
 