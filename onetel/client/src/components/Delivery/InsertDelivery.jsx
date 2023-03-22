import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
export default class CreatePost extends Component {
 
  constructor(props){
    super(props);
    this.state={
      Name:"",
      Address:"",
      phone:"",
      NIC:"" 
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

    const {Name,Address,phone,NIC} = this.state;

    const data ={
      Name:Name,
      Address:Address,
      phone:phone,
      NIC:NIC
    }

    

    axios.post("http://localhost:8070/post/save",data).then((res)=>{
      if(res.data.success){
        this.setState({
          Name:"",
          Address:"",
          phone:"",
          NIC:"" 

          
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
          <Form.Label htmlFor="TextInput">Phone</Form.Label>
          <Form.Control  placeholder="Enter Your Contact-Num" name='phone' value={this.state.phone} onChange={this.handleInputChange} />
        </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label htmlFor="TextInput">NIC</Form.Label>
         <Form.Control placeholder='Enter NIC number' name='NIC' value={this.state.NIC} onChange={this.handleInputChange}/>
        </Form.Group>        
        
        <Button type="submit" onClick={this.onSubmit}>Save</Button>
      
    </Form>
    </div>
    )
  }
}