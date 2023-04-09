import React from 'react'
import axios from 'axios';
import { useState } from 'react'
export default function AddProduct() {
    
    const [Categories , setCategories] = useState("");
    const [Brand , setBrand] = useState("");
    const [Price,setPrice] = useState("");
    const [ Model,setModel] = useState("");
    const[Status,setStatus] = useState("");
    const[message,setMessage] = useState("");
    const[image,setImage] = useState("")
   

    
   const onChangeFile = e =>{
    setImage(e.target.files[0]);
   }

   const changeOnClick = (e) =>{
    e.preventDefault();
    
    const formData = new FormData();

    formData.append("Categories",Categories)
    formData.append("Brand",Brand)
    formData.append("Price",Price)
    formData.append("Model",Model)
    formData.append("Status",Status)
    formData.append("image",image)

    setCategories("");
    setBrand("");
    setPrice("");
    setModel("");
    setStatus("");
    axios.post("http://localhost:8070/add/pro",formData)
    .then((res) =>setMessage(res.data))
    .catch((err)=>{
        console.log(err);
    });
        

    }
   
   return (
     <div className='container'>
         <form onSubmit={changeOnClick} encType='multipart/form-data'>
           <div className='form-group'>
           <label htmlFor="Categories">Categories</label>
            <input type={'text'}
             value={Categories}
             onChange={(e)=>setCategories(e.target.value)}
             className='form-control'
             placeholder='add c'
             />
             </div>

             <div className='form-group'>
           <label htmlFor="Brand">Brand</label>
            <input type={'text'}
             value={Brand}
             onChange={(e)=>setBrand(e.target.value)}
             className='form-control'
             placeholder='add c'
             />
             </div>

             <div className='form-group'>
           <label htmlFor="Price">Price</label>
            <input type={'text'}
             value={Price}
             onChange={(e)=>setPrice(e.target.value)}
             className='form-control'
             placeholder='add c'
             />
             </div>


           <div className='form-group'>
           <label htmlFor="Model">Model</label>
            <input type={'text'}
             value={Model}
             onChange={(e)=>setModel(e.target.value)}
             className='form-control'
             placeholder='add c'
             />
             </div>


             <div className='form-group'>
           <label htmlFor="Status">Status</label>
            <input type={'text'}
             value={Status}
             onChange={(e)=>setStatus(e.target.value)}
             className='form-control'
             placeholder='add c'
             />
             </div>

             <div className='form-group'>
           <label htmlFor="file">image</label>
            <input type={'file'}
             image="image"
             onChange={onChangeFile}
             className='form-control'
             placeholder='add c'
             />
             </div>
             <button type='submit'>add</button>
         </form>
     </div>
   )
 }
