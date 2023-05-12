import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
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

   const changeOnClick = async (e) =>{
    e.preventDefault();
    // Validate form fields
  if (!Categories || !Brand || !Price || !Model || !Status || !image) {
    toast.error('Please fill in all fields',{
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
    return;
  }
  if (isNaN(Price)) {
    toast.error('Please enter a valid numeric value for Price');
    return;
  }
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
    try {
      const res = await axios.post('/add/pro', formData);
      setMessage(res.data);
      toast.success('Product added successfully');
      
    } catch (err) {
      console.log(err);
      if (err.response && err.response.data) {
        // Display error message from the server response
        window.alert(err.response.data.message);
      } else {
        // Display a generic error message
        window.alert('An error occurred. Please try again later.');
      }
    }
        
    }
    
   
   return (
     <div className='container'>
     
         <form onSubmit={changeOnClick} encType='multipart/form-data'>
         <ToastContainer/>
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
