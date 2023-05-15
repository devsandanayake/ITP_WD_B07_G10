import React, { Component } from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import DeliveryAdmin from "./components/Delivery/DeliveryAdmin";
import EditDelivery from "./components/Delivery/EditDelivery";
import NavBar from "./components/NavBar";
import Profile from './components/Profile'
import Register from './components/Register';  
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import InsertDelivery from './components/Delivery/InsertDelivery';
import Home from './components/Home'; 
import Footer from './components/footer';
import RepairCus from './components/Repair/RepairCus';
import RepairAdmin from './components/Repair/RepairAdmin';
import AddProduct from './components/Product/addProduct'; 
import AdminProduct from './components/Product/AdminProduct';
import EditProduct from './components/Product/Editproduct';
import CustomerAdmin from './components/Customer/CustomerAdmin';
import DeliveryPerson from './components/Delivery/DeliveryPerson';
import MaybeShowNavBar from './components/MaybeShowNavBar';
import Checkperson from './components/Delivery/Checkperson';
import Adminacc from './components/Account/Adminacc';
import AddOrder from './components/Order/AddOrder';
import AddWarranty from './components/warrentyItem/WarrentyCus';
import AdminWarrenty from './components/warrentyItem/AdminWarrenty';
import AdminEmp from './components/Account/ViewEmp'
import DeliveryR from './components/Report/DeliveryR'; 
import AdminRentItem from './components/Rent/AdminRentItem';
import AddRentItem from './components/Rent/AddRentItem';
import EditRentIem from './components/Rent/EditRentItem';
import RepairEdit from './components/Repair/RepairEdit'
import EditWarranty from './components/warrentyItem/EditWarranty';
import ReportHome from './components/Report/ReportHome';
import Addemp from './components/Account/Addemp';
import RepairR from './components/Report/RepairR';
import Editemp from './components/Account/Editemp';
import RentReqCus from './components/Rent/RentReqCus';
import RentItemdisplay from './components/Rent/RentItemdisplay';
import AdminRentReq from './components/Rent/AdminRentReq';
import EmpR from './components/Report/EmpR'
import WarR from './components/Report/WarR'
import ProductR from './components/Report/ProductR';
import AddReturn from './components/Return/Returncus';
import AdminReturn from './components/Return/AdminReturn';
import EditReturn from './components/Return/EditReturn';
import RentReqR from './components/Report/RentReqR';

import PostOrder from './components/Order/PostOrder'
import Adminorder from './components/Order/Adminorder'
import Editorder from './components/Order/Editorder';
import OrderR from './components/Report/OrderR'
import RequestControl from './components/Rent/RequestControl';
import RentedItems from './components/Rent/RentedItems';
import RentC from './components/Rent/RentC';
 
import Chat from './components/Chatbot/chat';
import AdminDashboard from "./components/Admin/dashboard";
 

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
        <Route exact path="/"  element={<Home/>}></Route>
       
      
     
       
        <Route exact path="/admin"  element={<Dashboard/>}></Route> 
        <Route exact path="/account"  element={<Adminacc/>}></Route> 
    

        <Route exact path="/profile"  element={<Profile/>}></Route> 
        <Route exact path="/login"  element={<Login/>}></Route> 
       <Route exact path="/register"  element={<Register/>}></Route>

       {/* delivery Management part */}
        <Route exact path="/insertDelivery/:id"  element={<InsertDelivery/>}></Route> 
        <Route exact path="/delivery/ad"  element={<DeliveryAdmin/>}></Route> 
        <Route exact  path="/edit/:id"  element={<EditDelivery/>}/>
        <Route exact path = "/delivery/person" element={<DeliveryPerson/> } />
        <Route exact path = "/editc/:id" element={<Checkperson/> } />
        <Route exact path = "/delivery/report" element={<DeliveryR/> } />
        
        
       

        <Route exact path="/customer/ad"  element={<CustomerAdmin/>}></Route> 


        <Route exact path="/repairCus"  element={<RepairCus/>}></Route>
        <Route exact path="/repairAdmin"  element={<RepairAdmin/>}></Route> 
        <Route exact path="/repairedit/:id"  element={<RepairEdit/>}></Route> 


        <Route exact path="/addProduct"  element={<AddProduct/>}></Route> 
        <Route exact path="/adminManageProduct"  element={<AdminProduct/>}></Route>
        <Route exact path="/editProduct/:id"  element={<EditProduct/>}></Route>


        <Route exact path ="/:id" element={<AddOrder/>}></Route> 


        //warrenty
        <Route exact path="/Addwarrenty"  element={<AddWarranty/>}></Route> 
        <Route exact path="/Adminwarrenty"  element={<AdminWarrenty/>}></Route> 
        <Route exact path="/EditWarranty/:id" element={<EditWarranty/>}/>
        

        //emp
        <Route exact path="/Emp"  element={<AdminEmp/>}></Route> 
        <Route exact path="/add/emp"  element={<Addemp/>}></Route> 
        <Route exact path="/Editemp/:id" element={<Editemp/>}></Route> 
        <Route exact path = "/Empreport" element={<EmpR/>}/>


        //rentItem
        <Route exact path ="/rentItem" element={<AdminRentItem/>}/>
        <Route exact path ="/add/rentItem" element={<AddRentItem/>}/>
        <Route exact path="/editrentitem/:id" element={<EditRentIem/>}/>
        <Route exact path="/RentReqCus" element={<RentReqCus/>}/>
        < Route exact path="/rentitemdisplay" element={<RentItemdisplay/>}/>
        < Route exact path="/adminrentreq" element={<AdminRentReq/>}/>
        < Route exact path="/rentreqr" element={<RentReqR/>}/>
        < Route exact path="/reqc/:id" element={<RequestControl/>}/>
        < Route exact path="/rented" element={<RentedItems/>}/>
        < Route exact path="/rentc/:id" element={<RentC/>}/>


       
        //return

        <Route exact path="/AddReturn" element={<AddReturn/>}/>
        <Route exact path="/AdminReturn" element={<AdminReturn/>}/>
        <Route exact path="/EditReturn/:id" element={<EditReturn/>}/>

        <Route exact path = "/report" element={<ReportHome/> } />
        <Route exact path = "/repair/report" element={<RepairR/>}/>
        <Route exact path = "/warrentyReport" element={<WarR/>}/>
        <Route exact path = "/productReport"  element={<ProductR/>}/>



        //order
        <Route exact path = "/addOrder"  element={<PostOrder/>}/>
        <Route exact path = "/adminorder"  element={<Adminorder/>}/>
        <Route exact path = "/editOrder/:id"  element={<Editorder/>}/>
        <Route exact path = "/orderReport"  element={<OrderR/>}/>


        <Route exact path = "/chat"  element={<Chat/>}/>

        <Route path="/stock" element={<AdminDashboard/>} />

       </Routes>
        </div>
        <Footer/>          
      </BrowserRouter>
       </div>
     )
   }
 }
 