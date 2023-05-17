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
    .then((res) => {
      setMessage(res.data);
      toast.success('Data submitted successfully');
    })
    .catch((err)=>{
      console.log(err);
      toast.error('An error occurred');
    });
        

    }
    
   
   return (
    <div className='container'>
    <ToastContainer />
    <h4>Add Warranty Claim</h4>
    <form onSubmit={changeOnClick} encType=''>
      <div className='row'>
        <div className='col-md-6'>
          <label htmlFor='ItemCode'>Item Code</label>
          <input
            type={'text'}
            value={ItemCode}
            onChange={(e) => setitemcode(e.target.value)}
            className='form-control mb-3'
            placeholder='Item Code'
          />
          <label htmlFor='ItemName'>Item Name</label>
          <input
            type={'text'}
            value={ItemName}
            onChange={(e) => setItemname(e.target.value)}
            className='form-control mb-3'
            placeholder='Item Name'
          />
          <label htmlFor='customerID'>Customer ID</label>
          <input
            type={'text'}
            value={customerID}
            onChange={(e) => setCusId(e.target.value)}
            className='form-control mb-3'
            placeholder='Customer ID'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='customerName'>Customer Name</label>
          <input
            type={'text'}
            value={customerName}
            onChange={(e) => setCusname(e.target.value)}
            className='form-control mb-3'
            placeholder='Enter Name'
          />
          <label htmlFor='Email'>Customer Email</label>
          <input
            type={'email'}
            value={cusEmail}
            onChange={(e) => setcusEmail(e.target.value)}
            className='form-control mb-3'
            placeholder='Enter Email'
          />
          <label htmlFor='file'>Image</label>
          <input
            type={'file'}
            image='warranty'
            onChange={onChangeFile}
            className='form-control mb-3'
            placeholder='Upload Image'
          />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <label htmlFor='Reason'>Reason</label>
          <input
            type={'text'}
            value={Reason}
            onChange={(e) => setReason(e.target.value)}
            className='form-control mb-3'
            placeholder='Enter Reason'
          />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
   )
 }
