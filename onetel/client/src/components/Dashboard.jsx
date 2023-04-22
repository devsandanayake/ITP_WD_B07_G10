import React from 'react'
import { BsCaretRightSquare} from "react-icons/bs";
import './card.css'
import './Slidebar.css'
import cus from '../images/cus.jpg'
import logo from '../images/logo.jpg'
import product from  '../images/product.jpg'
import Repair from '../images/Repair.png'
import delivery from '../images/delivery.gif'
import R1 from '../images/R1.gif'
import Rent from '../images/Rent.png'
import order from '../images/order.jpg'
import stock from '../images/stock.png'
import { RiDashboard2Line } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdSwitchAccount } from "react-icons/md";
import { SlLogout} from "react-icons/sl";
import {MdAttachMoney} from "react-icons/md";
import {AiOutlineHome} from "react-icons/ai";
import {FiPhoneCall} from "react-icons/fi";
export default function Dashboard() {
  return (
    <div className="admin"> 
      <div className='Slidebar'><br/>
        <h4 className='text-center mb-5' style={{color:'white'}}>Onetel-Admin</h4>
        <div className='item'><a className='btn btn-primary col-12'style={{background:"rgb(23, 102, 221)"}} href={'/admin'}><RiDashboard2Line/>&nbsp;Dashboard</a></div><br/>
        <div className='item'><a className='btn btn-primary col-12'style={{background:"rgb(23, 102, 221)"}} href={'/'}><AiOutlineHome/>&nbsp;Home</a></div><br/>
        <div className='item'><a className='btn btn-primary col-12'style={{background:"rgb(23, 102, 221)"}} href={'/#setting'}><FiSettings/>&nbsp;Web Setting</a></div><br/>
        <div className='item'><a className='btn btn-primary col-12' style={{background:"rgb(23, 102, 221)"}}href={'/delivery/report'}><HiOutlineDocumentReport/>&nbsp;Montly Report</a></div><br/>
        <div className='item' ><a className='btn btn-primary col-12' style={{background:"rgb(23, 102, 221)"}}href={'/fin'}><MdAttachMoney/>&nbsp;Financial</a></div><br/>
        <div className='item'><a className='btn btn-primary col-12' style={{background:"rgb(23, 102, 221)"}} href={'/Emp'}><MdSwitchAccount/>&nbsp;Emp-Accounts</a></div><br/>
        <div className='item' style={{background:"red"}}><a className='btn btn-danger col-12' style={{background:"red"}} href={'/login'}><SlLogout/>&nbsp;LogOut</a></div><br/>
        
         <div className="log"><img  src={logo}></img>
         </div><br/>
         <div className='copyright'>Copyright © dev_Snayake_2023 </div><br/>
        </div>
       <br/><br/>
    <div className='container row'>
    <div className='card-container1 mb-5'>
       <div className="image-container row">
           <img src={order}></img>
        </div> 
        <div className=" text-center"> 
                    <div className='card-title'>Order Management</div>
                    <a className="btn btn-secondary" href={``}><BsCaretRightSquare/></a>
          </div>          
       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

       <div className='card-container2 mb-5'>
       <div className="image-container row">
           <img src={product}></img>
        </div> 
        <div className="text-center"> 
                    <div className='card-title'>Product Management</div>
                    <a className="btn btn-success" href={`/adminManageProduct`}><BsCaretRightSquare/></a>
          </div>          
       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

       <div className='card-container3 mb-5'>
       <div className="image-container row">
           <img src={Repair}></img>
        </div> 
        <div className="text-center"> 
                    <div className='card-title'>Repair Management</div>
                    <a className="btn btn-warning" href={`/repairAdmin`}><BsCaretRightSquare/></a>
          </div>          
       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

       <div className='card-container4 mb-5'>
       <div className="image-container row">
           <img src={delivery}></img>
        </div> 
        <div className="text-center"> 
                    <div className='card-title'>Delivery Management</div>
                    <a className="btn btn-light" href={`/delivery/ad`}><BsCaretRightSquare/></a>
          </div>          
       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


       <div className='card-container5 mb-5'>
       <div className="image-container row">
           <img src={R1}></img>
        </div> 
        <div className="text-center"> 
                    <div className='card-title'>Warrenty Management</div>
                    <a className="btn btn-danger" href={`/Adminwarrenty`}><BsCaretRightSquare/></a>
          </div>          
       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


       <div className='card-container6 mb-5'>
       <div className="image-container row">
           <img src={Rent}></img>
        </div> 
        <div className="text-center"> 
                    <div className='card-title'>Rent Management</div>
                    <a className="btn btn-info" href={`/rentItem`}><BsCaretRightSquare/></a>
          </div>          
       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

       <div className='card-container7 mb-5'>
       <div className="image-container row">
           <img src={cus}></img>
        </div> 
        <div className="text-center"> 
                    <div className='card-title'>Customer Management</div>
                    <a className="btn btn-dark" href={`/customer/ad`}><BsCaretRightSquare/></a>
          </div>          
       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

       <div className='card-container8 mb-5'>
       <div className="image-container row">
           <img src={stock}></img>
        </div> 
        <div className="text-center"> 
                    <div className='card-title'>Stock Management</div>
                    <a className="btn btn-primary" href={``}><BsCaretRightSquare/></a>
          </div>          
       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
    </div></div>
  )
}
