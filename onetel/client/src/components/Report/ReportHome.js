import React from 'react'
import { BsCaretRightSquare} from "react-icons/bs";
import './card.css'
import './Slidebar.css'
import cus from './images/cus.jpg'
import logo from './images/logo.jpg'
 
import R from './images/report.jpg'
import { RiDashboard2Line } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdSwitchAccount } from "react-icons/md";
import { SlLogout} from "react-icons/sl";
import {MdAttachMoney} from "react-icons/md";
import {AiOutlineHome} from "react-icons/ai";
import {FiPhoneCall} from "react-icons/fi";
export default function ReportHome() {
  return (
    <div className="admin"> 
      <div className='Slidebar'><br/>
        <h4 className='text-center mb-5' style={{color:'white'}}>Report</h4>
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
        
    <div className='card-container1x mb-5'>
       <div className="image-container row">
           <img src={R}></img>
        </div> 
        <div className=" text-center"> 
                    <div className='card-title'>Order Report</div>
                    <a className="btn btn-dark" href={``}><BsCaretRightSquare/></a>
          </div>          
       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

       <div className='card-container2x mb-5'>
       <div className="image-container row">
           <img src={R}></img>
        </div> 
        <div className="text-center"> 
                    <div className='card-title'>Product Report</div>
                    <a className="btn btn-dark" href={`/productReport`}><BsCaretRightSquare/></a>
          </div>          
       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

       <div className='card-container3x mb-5'>
       <div className="image-container row">
           <img src={R}></img>
        </div> 
        <div className="text-center"> 
                    <div className='card-title'>Repair Report</div>
                    <a className="btn btn-dark" href={`/repair/report`}><BsCaretRightSquare/></a>
          </div>          
       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

       <div className='card-container4x mb-5'>
       <div className="image-container row">
           <img src={R}></img>
        </div> 
        <div className="text-center"> 
                    <div className='card-title'>Delivery Report</div>
                    <a className="btn btn-dark" href={`/delivery/report`}><BsCaretRightSquare/></a>
          </div>          
       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


       <div className='card-container5x mb-5'>
       <div className="image-container row">
           <img src={R}></img>
        </div> 
        <div className="text-center"> 
                    <div className='card-title'>Warrenty Report</div>
                    <a className="btn btn-dark" href={`/warrentyReport`}><BsCaretRightSquare/></a>
          </div>          
       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


       <div className='card-container6x mb-5'>
       <div className="image-container row">
           <img src={R}></img>
        </div> 
        <div className="text-center"> 
                    <div className='card-title'>Rent Report</div>
                    <a className="btn btn-dark" href={`/rentItem`}><BsCaretRightSquare/></a>
          </div>          
       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

       <div className='card-container7x mb-5'>
       <div className="image-container row">
           <img src={R}></img>
        </div> 
        <div className="text-center"> 
                    <div className='card-title'>Empolyee Report</div>
                    <a className="btn btn-dark" href={`/Empreport`}><BsCaretRightSquare/></a>
          </div>          
       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    

       <div className='card-container8x mb-5'>
       <div className="image-container row">
           <img src={R}></img>
        </div> 
        <div className="text-center"> 
                    <div className='card-title'>Stock Report</div>
                    <a className="btn btn-dark" href={``}><BsCaretRightSquare/></a>
          </div>          
       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

       <div className='card-container10x mb-5'>
       <div className="image-container row">
           <img src={R}></img>
        </div> 
        <div className="text-center"> 
                    <div className='card-title'>Return Report</div>
                    <a className="btn btn-dark" href={`/customer/ad`}><BsCaretRightSquare/></a>
          </div>          
       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
    </div></div>
  )
}

