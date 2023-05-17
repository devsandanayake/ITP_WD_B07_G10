import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Addemp() {
    
    const [first_name , setfirst_name] = useState("");
    const [last_name , setlast_name] = useState("");
    const [email,setemail] = useState("");
    const [Address,setAddress] = useState("");
    const[NIC,setNIC] = useState("");
    const[Phone,setPhone] = useState("");
    const[CusImg,setCusImg] = useState("")
    const[massage,setMessage] = useState("")
   
   
   
    
   const onChangeFile = e =>{
    setCusImg(e.target.files[0]);
   }

   const changeOnClick = (e) =>{
    e.preventDefault();

     // Validate fields
  if (!first_name || !last_name || !email || !Address || !NIC || !Phone || !CusImg) {
    toast.error('Please fill in all fields');
    return;
  }
   // Validate email format
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(email)) {
     toast.error('Invalid email address');
     return;
   }
    
    const formData = new FormData();

    formData.append("first_name",first_name)
    formData.append("last_name",last_name)
    formData.append("email",email)
    formData.append("Address",Address)
    formData.append("NIC",NIC)
    formData.append("Phone",Phone)
    formData.append("CusImg",CusImg)

     setfirst_name("");
     setlast_name("");
     setemail("");
     setAddress("");
     setNIC("");
     setPhone("");
     setCusImg("");
     axios
     .post('http://localhost:8070/add/emp', formData)
     .then((res) => {
       setMessage(res.data);
       toast.success('Data submitted successfully');
     })
     .catch((err) => {
       console.log(err);
     });
  
        

    }
    
   
   return (
     <div className='container'>
       <ToastContainer /> 
         <form onSubmit={changeOnClick} encType='multipart/form-data'>
           <div className='form-group'>
           <label htmlFor="first_name">First Name</label>
            <input type={'text'}
             value={first_name}
             onChange={(e)=>setfirst_name(e.target.value)}
             className='form-control'
             placeholder='first_name'
             />
             </div>

           <div className='form-group'>
           <label htmlFor="last_name">Last Name</label>
            <input type={'text'}
             value={last_name}
             onChange={(e)=>setlast_name(e.target.value)}
             className='form-control'
             placeholder='Last_Name'
             />
             </div>

             <div className='form-group'>
           <label htmlFor="email">Email</label>
            <input type={'email'}
             value={email}
             onChange={(e)=>setemail(e.target.value)}
             className='form-control'
             placeholder='email'
             />
             </div>


           <div className='form-group'>
           <label htmlFor="Address">Address</label>
            <input type={'text'}
             value={Address}
             onChange={(e)=>setAddress(e.target.value)}
             className='form-control'
             placeholder='Address'
             />
             </div>


           <div className='form-group'>
           <label htmlFor="NIC">NIC</label>
            <input type={'text'}
             value={NIC}
             onChange={(e)=>setNIC(e.target.value)}
             className='form-control'
             placeholder='NIC'
             />
             </div>

             <div className='form-group'>
           <label htmlFor="Phone">Phone</label>
            <input type={'number'}
             value={Phone}
             onChange={(e)=>setPhone(e.target.value)}
             className='form-control'
             placeholder='NIC'
             />
             </div>

             <div className='form-group'>
           <label htmlFor="file">image</label>
            <input type={'file'}
             image="CusImg"
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
