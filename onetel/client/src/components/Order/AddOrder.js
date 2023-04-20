import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './order.css'
export default function AddOrder() {
  const [Categories , setCategories] = useState("");
  const [Brand , setBrand] = useState("");
  const [Price,setPrice] = useState("");
  const [ Model,setModel] = useState("");
  const[Email,setEmail] = useState("");
  const[message,setMessage] = useState("");
    
  
  

 const changeOnClick = (e) =>{
  e.preventDefault();
  
  const formData = new FormData();

  formData.append("Categories",Categories)
  formData.append("Brand",Brand)
  formData.append("Price",Price)
  formData.append("Model",Model)
  formData.append("Email",Email)
   

  setCategories("");
  setBrand("");
  setPrice("");
  setModel("");
  setEmail("");
  axios.post("http://localhost:8070/order/pro",formData)
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
         <div className='form-group1'>
           <label htmlFor="Categories">Categories</label>
            <input type={'text'}
             value={order.Categories}
             onChange={(e)=>setCategories(e.target.value)}
             className='form-control'
             placeholder='add c'
             />
             </div>

             <div className='form-group1'>
           <label htmlFor="Brand">Brand</label>
            <input type={'text'}
             value={order.Brand}
             onChange={(e)=>setBrand(e.target.value)}
             className='form-control'
             placeholder='add c'
             />
             </div>

             <div className='form-group1'>
           <label htmlFor="Price">Price</label>
            <input type={'price'}
             value={order.Price}
             onChange={(e)=>setPrice(e.target.value)}
             className='form-control'
             placeholder='add c'
             />
             </div>


           <div className='form-group1'>
           <label htmlFor="Model">Model</label>
            <input type={'text'}
             value={order.Model}
             onChange={(e)=>setModel(e.target.value)}
             className='form-control'
             placeholder='add c'
             />
             </div>

             <center>
           <select className="col-md- offset-md- border rounded p-1 mt-3 text-center" name="Status">
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

