import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './wform.css';

 
export default function AddWarranty() {
    
    const [ItemCode , setitemcode] = useState("");
    const [ItemName, setItemname] = useState("");
    const [customerID,setCusId] = useState("");
    const [customerName,setCusname] = useState("");
    const [cusEmail,setcusEmail] = useState("");
    const[warrenty,setImage] = useState("");
    const[message,setMessage] = useState("");
    const[Reason,setReason] = useState("")
   
   
   
   
   
    
   const onChangeFile = e =>{
    setImage(e.target.files[0]);
   }

   const changeOnClick = (e) =>{
    e.preventDefault();
     // Validate fields
  if (!ItemCode || !ItemName || !customerID || !customerName || !cusEmail || !warrenty || !Reason) {
    toast.error('Please fill in all fields');
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cusEmail)) {
    toast.error('Invalid email address');
    return;
  }
    
    const formData = new FormData();

    formData.append("ItemCode",ItemCode)
    formData.append("ItemName",ItemName)
    formData.append("customerID",customerID)
    formData.append("customerName",customerName)
    formData.append("cusEmail",cusEmail)
    formData.append("warrenty",warrenty)
    formData.append("Reason",Reason)

    setitemcode("");
    setItemname("");
    setCusId("");
    setCusname("");
    setcusEmail("");
    setReason("");
    axios.post("http://localhost:8070/add/War",formData)
    .then((res) =>setMessage(res.data))
    .catch((err)=>{
      console.log(err);
      toast.error('An error occurred');
    });
        

    }
    
   
   return (
     
     <div className='warrantyform'>
       <ToastContainer /> 
      <h4>Add Warranty Clame</h4>
         <form onSubmit={changeOnClick} encType='multipart/form-data'>
           <div className='warrantyform'>
           <label htmlFor="ItemCode">ItemCode</label>
            <input type={'text'}
             value={ItemCode}
             onChange={(e)=>setitemcode(e.target.value)}
             className='form-control'
             placeholder='Item Code'
             />
             </div>

             <div className='warrantyform'>
           <label htmlFor="ItemName">ItemName</label>
            <input type={'text'}
             value={ItemName}
             onChange={(e)=> setItemname(e.target.value)}
             className='form-control'
             placeholder='Item Name'
             />
             </div>

             <div className='warrantyform'>
           <label htmlFor="customerID">customerID</label>
            <input type={'customerID'}
             value={customerID}
             onChange={(e)=>setCusId(e.target.value)}
             className='form-control'
             placeholder='Customer ID'
             />
             </div>


           <div className='warrantyform'>
           <label htmlFor="customerName">customerName</label>
            <input type={'text'}
             value={customerName}
             onChange={(e)=>setCusname(e.target.value)}
             className='form-control'
             placeholder='Enter Name'
             />
             </div>

           <div className='warrantyform'>
           <label htmlFor="Email">customerEmail</label>
            <input type={'email'}
             value={cusEmail}
             onChange={(e)=>setcusEmail(e.target.value)}
             className='form-control'
             placeholder='Enter email'
             />
             </div>

             <div className='warrantyform'>
           <label htmlFor="file">image</label>
            <input type={'file'}
             image="warrenty"
             onChange={onChangeFile}
             className='form-control'
             placeholder='Upload Image'
             />
             </div>


             <div className='warrantyform'>
           <label htmlFor="Reason">Reason</label>
            <input type={'text'}
             value={Reason}
             onChange={(e)=>setReason(e.target.value)}
             className='form-control'
             placeholder='Enter Reason'
             />
             </div>

         
             <button type='submit'>Submit</button>
         </form>
     </div>
   )
 }