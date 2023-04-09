import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
export default class addProduct extends Component {
 
  constructor(props){
    super(props);
    this.state={
        Categories:"",
        Brand:"",
        Price:"",
        Model:"",
        Status:"", 
        image:""
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

    const { Categories,Brand,Price,Model,Status,image} = this.state;

    const data ={
        Categories: Categories,
        Brand:Brand,
        Price:Price,
        Model:Model,
        Status:Status, 
        image:image
    }

    

    axios.post("http://localhost:8070/add/pro",data).then((res)=>{
      if(res.data.success){
        this.setState({
          Categories:"",
          Brand:"",
          Price:"",
          Model:"",
          Status:"" ,
          image:""

          
      })
      window.location = "/payment"
      }
    })

  }

 
 
  render() {
    return (
        <div>
        <h1 className='h3 mb-3 font-weight-normal'>
                    <p align="center">Add Product</p>
            </h1>   
         
      <Form action=''>
              
        <Form.Group className="mb-3" >
          <Form.Label htmlFor="TextInput">Name</Form.Label>
          <Form.Control  placeholder="Enter Name" name='Categories' value={this.state. Categories} onChange={this.handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label htmlFor="TextInput">Address</Form.Label>
          <Form.Control  placeholder="Enter Address" name='Brand'  value={this.state. Brand} onChange={this.handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label htmlFor="TextInput">Phone</Form.Label>
          <Form.Control  placeholder="Enter Your Contact-Num" name='Price' value={this.state.Price} onChange={this.handleInputChange} />
        </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label htmlFor="TextInput">NIC</Form.Label>
         <Form.Control placeholder='Enter NIC number' name='Model' value={this.state. Model} onChange={this.handleInputChange}/>
        </Form.Group> 

        <Form.Group className='mb-3'>
         <Form.Label htmlFor="TextInput">NIC</Form.Label>
         <Form.Control placeholder='Enter NIC number' name='Status' value={this.state. Status} onChange={this.handleInputChange}/>
        </Form.Group> 
        <Form.Group className='mb-3'>
         <Form.Label htmlFor="TextInput">NIC</Form.Label>
         <Form.Control placeholder='Enter NIC number' type = 'file' name='image' value={this.state.image} onChange={this.handleInputChange}/>
        </Form.Group>      

         
        
        <Button type="submit" onClick={this.onSubmit}>Save</Button>
      
    </Form>
    </div>
    )
  }
}