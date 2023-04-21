import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './order.css'
export default function AddOrder() {
   
  const[Email,setEmail] = useState("");
  const[Quntity,setQuntity] = useState("");
  const[message,setMessage] = useState("");
    
  
  

 const changeOnClick = (e) =>{
  e.preventDefault();
  
  const formData = new FormData();

  // formData.append("Categories",order.Categories)
  // formData.append("Brand",order.Brand)
  // formData.append("Price",order.Price)
  // formData.append("Model",order.Model)
  formData.append("Email",Email)
  formData.append("Quntity",Quntity)
   

   setEmail("");
   setQuntity("");
  axios.post("http://localhost:8070/order/save",formData)
  .then((res) =>setMessage(res.data))
  .catch((err)=>{
      console.log(err);
  });
      

  }
  
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
         
         

         <form  onSubmit={changeOnClick} encType='multipart/form-data'>
         

             <center>
           <select className="col-md- offset-md- border rounded p-1 mt-3 text-center" name="Quntity"  value={Quntity} onChange={(e) => setQuntity(e.target.value)}>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
               <option value="8">8</option>
               <option value="9">9</option>
               <option value="10">10</option>
           </select> 
           </center>        




           <div className='form-email'>
           <center><label htmlFor="email">Enter Your Email</label></center>
            <input type={'email'}
             value={Email}
             onChange={(e)=>setEmail(e.target.value)}
             className='form-control'
             placeholder='abc@email.com'
             />
             </div>
           <br/>

            <center>
           <button type="submit" className="btn btn-primary" >
             Buy
           </button></center>
           </form>
     </div>
           
     </div>
   
  )
}

