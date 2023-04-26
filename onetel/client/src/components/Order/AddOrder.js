import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './order.css'
export default function AddOrder() {
   
    
  
  

  
  
  //view order for customer
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
         <h4 className='text-center'>{order.Categories}</h4>
         <p className='text-center'>{order.Brand}</p>
         <p className='text-center'>{order.Model}</p>
         <p className='text-center'>Price-{order.Price}</p>
         
         

          
              
            


                 




           
           <br/>

            <center>
            <a className="btn btn-success" href={`/addOrder`}>Buy
                       </a>
                       </center>
     </div>
           
     </div>
   
  )
}

