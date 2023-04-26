import React from 'react'
import axios from 'axios';
import { useState } from 'react'
 
export default function RentReqCus() {
    
    const [ItemCode , setitemcode] = useState("");
    const [ItemName, setItemname] = useState("");
    const [customerID,setCusId] = useState("");
    const [ customerName,setCusname] = useState("");
    const [ customerNIC,setCusnic] = useState("");
    const [cusEmail,setcusEmail] = useState("");
    const [ Phone,setCusPhone] = useState("");
    const [ StartDate,setCusStart] = useState("");
    const [ EndDate,setCusEnd] = useState("");
    const[NIC,setImage] = useState("");
    const[message,setMessage] = useState("");
   
   
   
   
   
   
    
   const onChangeFile = e =>{
    setImage(e.target.files[0]);
   }

   const changeOnClick = (e) =>{
    e.preventDefault();
    
    const formData = new FormData();

    formData.append("ItemCode",ItemCode)
    formData.append("ItemName",ItemName)
    formData.append("customerID",customerID)
    formData.append("customerName",customerName)
    formData.append("customerNIC",customerNIC)
    formData.append("cusEmail",cusEmail)
    formData.append("Phone",Phone)
    formData.append("StartDate",StartDate)
    formData.append("EndDate",EndDate)
    formData.append("NIC",NIC)

    setitemcode("");
    setItemname("");
    setCusId("");
    setCusname("");
    setCusnic("");
    setcusEmail("");
    setCusPhone("");
    setCusStart("");
    setCusEnd("");
    axios.post("http://localhost:8070/RentReq/save",formData)
    .then((res) =>setMessage(res.data))
    .catch((err)=>{
        console.log(err);
    });
        

    }
    
   
   return (
     <div className='container'>
         <form onSubmit={changeOnClick} encType='multipart/form-data'>
           <div className='form-group'>
           <label htmlFor="ItemCode">ItemCode</label>
            <input type={'text'}
             value={ItemCode}
             onChange={(e)=>setitemcode(e.target.value)}
             className='form-control'
             placeholder='add c'
             />
             </div>

             <div className='form-group'>
           <label htmlFor="ItemName">ItemName</label>
            <input type={'text'}
             value={ItemName}
             onChange={(e)=> setItemname(e.target.value)}
             className='form-control'
             placeholder='add c'
             />
             </div>

             <div className='form-group'>
           <label htmlFor="customerID">customerID</label>
            <input type={'customerID'}
             value={customerID}
             onChange={(e)=>setCusId(e.target.value)}
             className='form-control'
             placeholder='add c'
             />
             </div>


           <div className='form-group'>
           <label htmlFor="customerName">customerName</label>
            <input type={'text'}
             value={customerName}
             onChange={(e)=>setCusname(e.target.value)}
             className='form-control'
             placeholder='add c'
             />
             </div>

             <div className='form-group'>
           <label htmlFor="customerNIC">customerName</label>
            <input type={'text'}
             value={customerNIC}
             onChange={(e)=>setCusnic(e.target.value)}
             className='form-control'
             placeholder='add c'
             />
             </div>

             

           <div className='form-group'>
           <label htmlFor="Email">customerEmail</label>
            <input type={'email'}
             value={cusEmail}
             onChange={(e)=>setcusEmail(e.target.value)}
             className='form-control'
             placeholder='email'
             />
             </div>

             <div className='form-group'>
           <label htmlFor="Phone">Phone</label>
            <input type={'text'}
             value={Phone}
             onChange={(e)=>setCusPhone(e.target.value)}
             className='form-control'
             placeholder='add c'
             />
             </div>

             <div className='form-group'>
           <label htmlFor="StartDate">StartDate</label>
            <input type={'text'}
             value={StartDate}
             onChange={(e)=>setCusStart(e.target.value)}
             className='form-control'
             placeholder='add c'
             />
             </div>

             <div className='form-group'>
           <label htmlFor="EndDate">EndDate</label>
            <input type={'text'}
             value={EndDate}
             onChange={(e)=>setCusEnd(e.target.value)}
             className='form-control'
             placeholder='add c'
             />
             </div>

             <div className='form-group'>
           <label htmlFor="file">image</label>
            <input type={'file'}
             image="warrenty"
             onChange={onChangeFile}
             className='form-control'
             placeholder='add c'
             />
             </div>


             

         
             <button type='submit'>Submit</button>
         </form>
     </div>
   )
 }