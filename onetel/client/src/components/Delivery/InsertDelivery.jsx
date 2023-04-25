import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
export default class InsertDelivery extends Component {
 
  constructor(props){
    super(props);
    this.state={
      Name:"",
      Address:"",
      phone:"",
      NIC:"" ,
      email:"",
      
    }
  }

  handleInputChange=(e)=>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })

  }

  onSubmit=(e)=>{
    e.preventDefault();

    const {Name,Address,phone,NIC,email} = this.state;

    const data ={
      Name:Name,
      Address:Address,
      phone:phone,
      NIC:NIC,
      email:email,
     
      
    }

    

    axios.post("/post/save",data).then((res)=>{
      if(res.data.success){
        alert("Successful Add data")
        this.setState({
          Name:"",
          Address:"",
          phone:"",
          NIC:"" ,
          email:"",
           

          
      })
      window.location = "/payment"
      }
    })

  }
 
 
 
  render() {
    return (
        <div>
        <h1 className='h3 mb-3 font-weight-normal'>
                    <p align="center">Customer Details</p>
            </h1>   
         
      <Form>
              
        <Form.Group className="mb-3" >
          <Form.Label htmlFor="TextInput">Name</Form.Label>
          <Form.Control  placeholder="Enter Name" name='Name' value={this.state.Name} onChange={this.handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label htmlFor="TextInput">Address</Form.Label>
          <Form.Control  placeholder="Enter Address" name='Address'  value={this.state.Address} onChange={this.handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label htmlFor="Number">Phone</Form.Label>
          <Form.Control  placeholder="Enter Your Contact-Num"  type="number" name='phone' value={this.state.phone} onChange={this.handleInputChange} />
        </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label htmlFor="TextInput">NIC</Form.Label>
         <Form.Control placeholder='Enter NIC number' name='NIC' value={this.state.NIC} onChange={this.handleInputChange}/>
        </Form.Group>   

           <Form.Group className='mb-3'>
         <Form.Label htmlFor="email">Email</Form.Label>
         <Form.Control placeholder='Enter Email' name='email' type="email" value={this.state.email} onChange={this.handleInputChange}/>
        </Form.Group>  
               
        <Button type="submit" onClick={this.onSubmit}>Save</Button>
      
    </Form>
    </div>
    )
  }
}