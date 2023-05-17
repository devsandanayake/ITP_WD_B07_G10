import React from 'react'
import axios from 'axios';
import { useState } from 'react'
 
export default function AddRentItem() {
    
    const [ProductName , setProductName] = useState("");
    const [SKU , setSKU] = useState("");
    const [Model,setModel] = useState("");
    const [UPC,setUPC] = useState("");
    const[Price,setPrice] = useState("");
    const[Features,setFeatures] = useState("");
    const[message,setMessage] = useState("");
    const[imageRent,setImage] = useState("")
   
   
   
    
   const onChangeFile = e =>{
    setImage(e.target.files[0]);
   }

   const changeOnClick = (e) =>{
    e.preventDefault();
    
    const formData = new FormData();

    formData.append("ProductName",ProductName)
    formData.append("SKU",SKU)
    formData.append("Model",Model)
    formData.append("UPC",UPC)
    formData.append("Price",Price)
    formData.append("Features",Features)
    formData.append("imageRent",imageRent)

    setProductName("");
    setSKU("");
    setModel("");
    setUPC("");
    setPrice("");
    setFeatures("");
    axios.post("http://localhost:8070/Rent/add",formData)
    .then((res) =>{
        setMessage(res.data);
        alert("Success");
    })
    .catch((err)=>{
        console.log(err);
    });
        

    }
    
   
   return (
     <div className='container'  style={{
          backgroundImage: 'linear-gradient(to bottom right, #ffffff,   #34a9e8)',
          width: '50rem',
          padding: '25px',
          marginLeft: '250px'
        }}>
         <form onSubmit={changeOnClick} encType='multipart/form-data'>
           <div className='form-group'>
           <label htmlFor="ProductName">ProductName</label>
            <input type={'text'}
             value={ProductName}
             onChange={(e)=>setProductName(e.target.value)}
             className='form-control'
             placeholder='Product Name'
             />
             </div>

           <div className='form-group'>
           <label htmlFor="SKU">SKU</label>
            <input type={'text'}
             value={SKU}
             onChange={(e)=>setSKU(e.target.value)}
             className='form-control'
             placeholder='SKU'
             />
             </div>

             <div className='form-group'>
           <label htmlFor="Model">Model</label>
            <input type={'Model'}
             value={Model}
             onChange={(e)=>setModel(e.target.value)}
             className='form-control'
             placeholder='Model'
             />
             </div>


           <div className='form-group'>
           <label htmlFor="UPC">UPC</label>
            <input type={'text'}
             value={UPC}
             onChange={(e)=>setUPC(e.target.value)}
             className='form-control'
             placeholder='UPC'
             />
             </div>


             <div className='form-group'>
           <label htmlFor="Price">Price</label>
            <input type={'text'}
             value={Price}
             onChange={(e)=>setPrice(e.target.value)}
             className='form-control'
             placeholder='Price'
             />
             </div>

             <div className='form-group'>
           <label htmlFor="Features">Features</label>
            <input type={'text'}
             value={Features}
             onChange={(e)=>setFeatures(e.target.value)}
             className='form-control'
             placeholder='Features'
             />
             </div>

             <div className='form-group'>
           <label htmlFor="file">image</label>
            <input type={'file'}
             image="imageRent"
             onChange={onChangeFile}
             className='form-control'
             placeholder='image'
             />
             </div><br/>
             <div className="d-flex justify-content-center">
             <button type='submit' className='btn btn-primary'>Add RentItem</button></div>
         </form>
     </div>
   )
 }