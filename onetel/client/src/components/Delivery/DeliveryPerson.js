 import React, { Component } from 'react'
 import axios from 'axios';
  
 import R from '../../images/R.gif';
 import banner from '../../images/dbanner.gif';
 import {  BsFillSendCheckFill} from "react-icons/bs";

 
 export default class DeliveryPerson extends Component {
  constructor(props){
    super(props);
 
    this.state={
      posts:[],
     
    };
  }
   

  componentDidMount(){
    this.viewPosts();
  }
   
 //retrivew funtion
  viewPosts(){
    axios.get("http://localhost:8070/posts").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });
        //show array list 
        console.log(this.state.posts)        
      }
    });
  }

   

  
   render() {
     return (
       
      <div className='row'>
        <div className='banner'>
          <img src={banner} className='img-top img-fluid' alt='banner'/>
           <br/>
          <h5 className='shadow text-center'style={{background:'white'}}>Onetel Delivery service</h5><br/>
        </div>
        
        
      {this.state.posts.map((posts)=>(
      <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4 ' style={{ width: '23rem' }}>
        <div className='card p-0 overflow-hidden h-100 shadow' alt='im'>
          
          <h5 className='text-center' style={{background:'red'}}>{posts.Status}</h5>
        
           <img src={R} className='card-img-top img-fluid' alt='icon'/>
                    <div className='card-body text-left'> 
                    <ol>  
                    <li className='card-text'>Name:-{posts.Name}</li>
                    <li className='card-text'>Address:-{posts.Address}</li>
                    <li className='card-text'>Phone:-{posts.phone}</li>
                    <li className='card-text'>NIC:-{posts.NIC}</li>
                    <li className='card-text'>Email:-{posts.email}</li>
                    </ol>
                    <a className="btn btn-warning" href={`/editc/${posts._id}`}>
                       < BsFillSendCheckFill/> &nbsp; Status
                       </a>
                       </div>
              
       
        </div>
       
   
      </div>
         ))}
      </div>
      
     )
   }
 }
 