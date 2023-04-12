import React from 'react'
import { BsCaretRightSquare} from "react-icons/bs";
import './card.css'
import cus from '../images/cus.jpg'
import product from  '../images/product.jpg'
import Repair from '../images/Repair.png'
import delivery from '../images/delivery.gif'
import R1 from '../images/R1.gif'
import Rent from '../images/Rent.png'
import order from '../images/order.jpg'
import stock from '../images/stock.png'
import banner from'../images/banner.jpg'
 
export default function Dashboard() {
  return (
    <div className="admin">
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
                    <a className="btn btn-success" href={``}><BsCaretRightSquare/></a>
          </div>          
       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

       <div className='card-container3 mb-5'>
       <div className="image-container row">
           <img src={Repair}></img>
        </div> 
        <div className="text-center"> 
                    <div className='card-title'>Repair Management</div>
                    <a className="btn btn-warning" href={``}><BsCaretRightSquare/></a>
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
                    <a className="btn btn-danger" href={``}><BsCaretRightSquare/></a>
          </div>          
       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


       <div className='card-container6 mb-5'>
       <div className="image-container row">
           <img src={Rent}></img>
        </div> 
        <div className="text-center"> 
                    <div className='card-title'>Rent Management</div>
                    <a className="btn btn-info" href={``}><BsCaretRightSquare/></a>
          </div>          
       </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

       <div className='card-container7 mb-5'>
       <div className="image-container row">
           <img src={cus}></img>
        </div> 
        <div className="text-center"> 
                    <div className='card-title'>Customer Management</div>
                    <a className="btn btn-dark" href={``}><BsCaretRightSquare/></a>
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
