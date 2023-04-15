import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './order.css'
export default function AddOrder() {
  const {id }= useParams()



  const [order,setorder]=useState({
      Categories:"",
      Brand:"",
      Price:"",
      Model:"" ,
      Status:"",
      image:""
})
  //const { Categories, Brand, Price,Model , Status,Image} = delivery;

    const loadOrder = async () => {
    const result = await axios.get(`http://localhost:8070/product/view/${id}`);
    setorder(result.data);
  };
  

  useEffect(()=>{
    loadOrder();
  })
  return (
 
    <div className='container'>
     <div className='orders'>    
      <div className='card p-0 overflow-hidden h-100 shadow' alt='im'>
      <img src={order.image} className='imgOd' alt='brand'/>   
         
        </div>

        
     </div>
     <div className='details'>
         <p>Catogory-{order.Categories}</p>
         <p>Brand-{order.Brand}</p>
         <p>Model-{order.Model}</p>
         <p>Price-{order.Price}</p>
         <p>{order.Status}</p>
         <p>Details</p>

         <form >
           
                                   
            
           <select className="col-md- offset-md- border rounded p-1 mt-3 text-center" name="Status">
               <option value="">--Select Task--</option>
               <option value="Successful">Successful</option>
               <option value="Unsuccessful">Unsuccessful</option>
                
           </select>          
           <button type="submit" className="btn btn-outline-primary" >
             Submit
           </button>
           </form>
     </div>
           
     </div>
   
  )
}

