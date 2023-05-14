//  import React, { Component } from 'react'
//  import axios from 'axios';
//  import Button from 'react-bootstrap/Button';

// import Form from 'react-bootstrap/Form';
  
//  import R from '../../images/R.gif';
//  import banner from '../../images/dbanner.gif';
//  import {  BsFillSendCheckFill,BsCursorFill} from "react-icons/bs";

 
//  export default class DeliveryPerson extends Component {
//   constructor(props){
//     super(props);
 
//     this.state={
//       posts:[],
      
//     };
//   }
   
   

//   componentDidMount(){
//     this.viewPosts();
//   }
   
//  //retrivew funtion
//   viewPosts(){
//     axios.get("http://localhost:8070/posts").then(res =>{
//       if(res.data.success){
//         this.setState({
//           posts:res.data.existingPosts
//         });
//         //show array list 
//         console.log(this.state.posts)        
//       }
//     });
//   }
//   //seraching part  
//   filterData(posts,searchKey){
  

//     const result = posts.filter((post)=>
//         post.NIC.toLowerCase().includes(searchKey)||
//         post.email.toLowerCase().includes(searchKey)
        
//     )
//     this.setState({posts:result})
// }


// handleSearchArea =(e)=>{

// console.log(e.currentTarget.value);

// const searchKey = e.currentTarget.value;

// axios.get("http://localhost:8070/posts").then(res =>{
//   if(res.data.success){
    
//     this.filterData(res.data.existingPosts,searchKey)
           
//   }
// });
// }

   

  
//    render() {
   
//      return (
       
//       <div className='row'>
//         <div className='banner'>
//           <img src={banner} className='img-top img-fluid' alt='banner'/>
//            <br/>
//           <h5 className='shadow text-center'style={{background:'white'}}><BsCursorFill/>&nbsp;Onetel Delivery service protel</h5><br/>
//         </div>
        
//         <Form className="d-flex mb-4 mx-0" >
//                   <Form.Control
//                     type="search"
//                     placeholder="Enter NIC num or Email"
//                     className="me-2"
//                     aria-label="Search"
//                     name="searchQuary"
//                     onChange={this.handleSearchArea}
//                   />
//                   <Button variant="danger">Search</Button>
//                 </Form>
        
        
//       {this.state.posts.map((posts)=>(
//       <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4 ' style={{ width: '23rem' }}>
//         <div className='card p-0 overflow-hidden h-100 shadow' alt='im'>
          
//           <h5 className='text-center' style={{background:'#709bcc'}}>{posts.Status}</h5>
        
//            <img src={R} className='card-img-top img-fluid' alt='icon'/>
//                     <div className='card-body text-left'> 
//                     <ol>  
//                     <li className='card-text'>Name:-{posts.Name}</li>
//                     <li className='card-text'>Address:-{posts.Address}</li>
//                     <li className='card-text'>Phone:-{posts.phone}</li>
//                     <li className='card-text'>NIC:-{posts.NIC}</li>
//                     <li className='card-text'>Email:-{posts.email}</li>
//                     <b><li className='card-text'>Order ID:-{posts.id}</li></b>
//                     </ol>
//                     <center><a className="btn btn-outline-primary"href={`/editc/${posts._id}`}>
//                        < BsFillSendCheckFill/> &nbsp; Status
//                        </a>
//                      </center>
//                        </div>
              
       
//         </div>
       
   
//       </div>
//          ))}
//       </div>
      
//      )
//    }
//  }
 

import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsFillSendCheckFill, BsCursorFill } from 'react-icons/bs';
import { Button as MuiButton, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

import R from '../../images/R.gif';
import banner from '../../images/dbanner.gif';

export default class DeliveryPerson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      openDialog: false,
      status: '',
    };
  }

  componentDidMount() {
    this.viewPosts();
  }

  // Retrieve function
  viewPosts() {
    axios.get('http://localhost:8070/posts').then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
        });
        // Show array list
        console.log(this.state.posts);
      }
    });
  }

  // Searching part
  filterData(posts, searchKey) {
    const result = posts.filter(
      (post) =>
        post.NIC.toLowerCase().includes(searchKey) ||
        post.email.toLowerCase().includes(searchKey)
    );
    this.setState({ posts: result });
  }

  handleSearchArea = (e) => {
    console.log(e.currentTarget.value);

    const searchKey = e.currentTarget.value;

    axios.get('http://localhost:8070/posts').then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };

  handleStatusUpdate = (postId) => {
    this.setState({
      openDialog: true,
      postId: postId,
    });
  };

  handleDialogClose = () => {
    this.setState({
      openDialog: false,
    });
  };

  handleStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  handleStatusSubmit = async (e) => {
    e.preventDefault();
    
    const { postId, status } = this.state;
    await axios.put(`http://localhost:8070/post/update/${postId}`, { Status: status });
    this.handleDialogClose();
  };

  render() {
    const { posts, openDialog, status } = this.state;

    return (
      <div className="row">
        <div className="banner">
          <img src={banner} className="img-top img-fluid" alt="banner" />
          <br />
          <h5 className="shadow text-center" style={{ background: 'white' }}>
            <BsCursorFill />
            &nbsp;Onetel Delivery service protel
          </h5>
          <br />
        </div>

        <Form className="d-flex mb-4 mx-0">
          <Form.Control
            type="search"
            placeholder="Enter NIC num or Email"
            className="me-2"
            aria-label="Search"
            name="searchQuary"
            onChange={this.handleSearchArea}
          />
          <Button variant="danger">Search</Button>
        </Form>

        {posts.map((post) => (
          <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" style={{ width: '23rem' }} key={post._id}>
            <div className="card p-0 overflow-hidden h-100 shadow" alt="im">
              <h5 className="text-center" style={{ background: '#709bcc' }}>
              {post.Status === 'Successful' ? (
              <h5 className='text-center' style={{ color: 'green' }}>{post.Status}</h5>
            ) : post.Status === 'Pending' ? (
              <h5 className='card-text' style={{ color: 'blue' }}>{post.Status}</h5>
            ) : (
              <h5 className='card-text' style={{ color: 'red' }}>{post.Status}</h5>
            )}
        </h5><img src={R} className="card-img-top img-fluid" alt="icon" />
          <div className="card-body text-left">
            <ol>
              <li className="card-text">Name:-{post.Name}</li>
              <li className="card-text">Address:-{post.Address}</li>
              <li className="card-text">Phone:-{post.phone}</li>
              <li className="card-text">NIC:-{post.NIC}</li>
              <li className="card-text">Email:-{post.email}</li>
              <b>
                <li className="card-text">Order ID:-{post.id}</li>
              </b>
            </ol>
            <center>
              <Button
                variant="outline-primary"
                onClick={() => this.handleStatusUpdate(post._id)}
              >
                <BsFillSendCheckFill /> &nbsp; Status
              </Button>
            </center>
          </div>
        </div>
      </div>
    ))}

    <Dialog open={openDialog} onClose={this.handleDialogClose}>
      <DialogTitle>Update Your Task</DialogTitle>
      <DialogContent>
        <Form onSubmit={this.handleStatusSubmit}>
          <select
            className="col-md- offset-md- border rounded p-1 mt-3 text-center"
            name="Status"
            value={status}
            onChange={this.handleStatusChange}
          >
            <option value="">--Select Task--</option>
            <option value="Successful">Successful</option>
            <option value="Unsuccessful">Unsuccessful</option>
          </select>
        </Form>
      </DialogContent>
      <DialogActions>
        <MuiButton onClick={this.handleDialogClose} color="secondary">
          Cancel
        </MuiButton>
        <MuiButton onClick={this.handleStatusSubmit} color="primary">
          Submit
        </MuiButton>
      </DialogActions>
    </Dialog>
  </div>
  );
 }
}
