import React from 'react'
import axios from 'axios';
import { useState } from 'react'
export default function Check() {
  const [post ,setpost]=useState({
    Categories:'',
    Brand:'',
    Price:'',
    Model:'',
    Status:'',
    image:''
  })
  const handleInput = (event) =>{
      setpost({...post,[event.target.name]:event.target.event})
  }
  function handleSubmit(event){
    event.preventDefault()
    axios.post("http://localhost:8070/add/pro",{post}).then(response=>console.log(response))
    .catch(err=>console.log(err))
  }

   return (
     <div>check
        <form onSubmit={handleSubmit}>
            Categories:<input type="text" onChange={handleInput} name="Categories"></input><br/><br/>
            Brand:<input type="text" onChange={handleInput} name="Brand"></input><br/><br/>
            Price:<input type="text" onChange={handleInput} name="Price"></input><br/><br/>
            Model:<input type="text" onChange={handleInput} name="Model"></input><br/><br/>
            Status:<input type="text" onChange={handleInput} name="Status"></input><br/><br/>
            image:<input type="file" onChange={handleInput} name="image"></input><br/><br/>
            <button className='btn btn-primary'>submit</button>
        </form>
     </div>
   )
 }
 