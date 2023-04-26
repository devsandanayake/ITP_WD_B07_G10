import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
export default class PostOrder extends Component {
 
  constructor(props){
    super(props);
    this.state={
        Categories:"",
        Brand:"",
        Price:"",
        Model:"" ,
        Quntity:"",
        Email:""
      
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

    const {Categories,Brand,Price,Model,Email,Quntity} = this.state;

    const data ={
       Categories:Categories,
        Brand:Brand,
        Price:Price,
        Model:Model,
        Quntity:Quntity,
        Email:Email
     
      
    }

    

    axios.post("/order/save",data).then((res)=>{
      if(res.data.success){
        alert("Successful Add data")
        this.setState({
        Categories:"",
        Brand:"",
        Price:"",
        Model:"" ,
        Quntity:"",
        Email:""
           

          
      })
      window.location = "/Insertdelivery"
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
          <Form.Label htmlFor="TextInput">Categories</Form.Label>
          <Form.Control  placeholder="Enter" name='Categories' value={this.state.Categories} onChange={this.handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label htmlFor="TextInput">Brand</Form.Label>
          <Form.Control  placeholder="Enter" name='Brand'  value={this.state.Brand} onChange={this.handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label htmlFor="TextInput">Price</Form.Label>
          <Form.Control  placeholder="Enter"  type="text" name='Price' value={this.state.Price} onChange={this.handleInputChange} />
        </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label htmlFor="TextInput">Model</Form.Label>
         <Form.Control placeholder='Enterr' name='Model' value={this.state.Model} onChange={this.handleInputChange}/>
        </Form.Group>   

         <Form.Group className='mb-3'>
         <Form.Label htmlFor="email">Email</Form.Label>
         <Form.Control placeholder='Enter Email' name='Email' type="email" value={this.state.Email} onChange={this.handleInputChange}/>
        </Form.Group> 

        <Form.Group className='mb-3'>
         <Form.Label htmlFor="TextInput">Quntity</Form.Label>
         <Form.Control placeholder='Enter' showCount name='Quntity' type="number" value={this.state.Quntity} onChange={this.handleInputChange}/>
        </Form.Group>  
               
        <Button type="submit" onClick={this.onSubmit}>Save</Button>
      
    </Form>
    </div>
    )
  }
}