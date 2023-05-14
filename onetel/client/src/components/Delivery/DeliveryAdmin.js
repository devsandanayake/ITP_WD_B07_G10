import React, { Component } from 'react'
import axios from 'axios';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
export default class DeliveryAdmin extends Component {

 constructor(props){
   super(props);

   this.state={
     posts:[],
     Status:""
      
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
         posts:res.data.existingPosts,
         
         
       });
       //show array list 
       console.log(this.state.posts )
        
     }
   });
 }
  //delete function
  onDelete=(id)=>{
    axios.delete(`http://localhost:8070/post/delete/${id}`).then((res)=>{
      alert("Deleted");
      this.viewPosts();
    })
  }
  //seraching part  
  filterData(posts,searchKey){
  

    const result = posts.filter((post)=>
        post.NIC.toLowerCase().includes(searchKey)||
        post.email.toLowerCase().includes(searchKey)||
        post.Name.toLowerCase().includes(searchKey)||
        post.id.toLowerCase().includes(searchKey)
    )
    this.setState({posts:result})
}


handleSearchArea =(e)=>{

console.log(e.currentTarget.value);

const searchKey = e.currentTarget.value;

axios.get("http://localhost:8070/posts").then(res =>{
  if(res.data.success){
    
    this.filterData(res.data.existingPosts,searchKey)
           
  }
});
}
   

  render() {
        
    let status = this.state.Status
    
    if(status == "Successful"){
      return(
        <div>
            <div className='container'>
           
         <div className='row my-4'>
          <div className='col-lg-12'>
            <div className='table-responsive'> 
       <table className="table table-striped text-center" >
           <thead>
             <tr className='table-dark'>
             <th scope="col">Index</th>
             <th scope="col">Order ID</th>
             <th scope="col">Name</th>
             <th scope="col">Address</th>
             <th scope="col">Phone</th>
             <th scope="col">NIC</th>
             <th scope="col">Email</th>
             <th scope="col">Status</th>
             <th scope="col"></th>
             </tr>
           </thead>
      
         <tbody style={{background:'pink'}}>
            {this.state.posts.map((posts,index)=>( 
                 <tr key={index}>
                
                    <th scope="row">{index+1}</th>
                    <td>{posts.id}</td>
                    <td>{posts.Name}</td>
                    <td>{posts.Address}</td>
                    <td>{posts.phone}</td>
                    <td>{posts.NIC}</td>
                    <td>{posts.email}</td>
                    <td  style={{background:'red'}}>{posts.Status}</td>
                    
                    <td>
                       <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                         <i className="fas fa-edit"></i>&nbsp;Edit
                       </a>
                       &nbsp; &nbsp; 
                       <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)}>
                         <i className="fas fa-tash-altt"></i>&nbsp;Delete
                       </a>
                   </td>
                 </tr>

            ))}
         </tbody>
       </table>
       
       <a className="btn btn-warning" href={`/admin`}>
       <BsFillCaretLeftFill/>Back
                       </a>
      </div></div></div></div>
        </div>
      )
    
    }else{
     
    return ( 
      
      <div className='container'><br/>
       <Form className="d-flex mb-4 mx-0" >
                  <Form.Control
                    type="search"
                    placeholder="Enter NIC num or Email or Name"
                    className="me-2"
                    aria-label="Search"
                    name="searchQuary"
                    onChange={this.handleSearchArea}
                  />
                  <Button variant="danger">Search</Button>
                </Form>
         <div className='row my-4'>
          <div className='col-lg-12'>
            <div className='table-responsive'> 
       <table className="table table-striped text-center" >
           <thead>
             <tr className='table-dark'>
             <th scope="col">Index</th>
             <th scope="col">Order ID</th>
             <th scope="col">Name</th>
             <th scope="col">Address</th>
             <th scope="col">Phone</th>
             <th scope="col">NIC</th>
             <th scope="col">Email</th>
             <th scope="col">Status</th>
             <th scope="col"></th>
             </tr>
           </thead>
         
         <tbody style={{background:'pink'}}>
            {this.state.posts.map((posts,index)=>(
                 <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{posts.id}</td>
                    <td>{posts.Name}</td>
                    <td>{posts.Address}</td>
                    <td>{posts.phone}</td>
                    <td>{posts.NIC}</td>
                    <td>{posts.email}</td>
                    {posts.Status === 'Successful' ? (
              <td className='card-text' style={{ color: 'green' }}>{posts.Status}</td>
            ) : posts.Status === 'Pending' ? (
              <td className='card-text' style={{ color: 'blue' }}>{posts.Status}</td>
            ) : (
              <td className='card-text' style={{ color: 'red' }}>{posts.Status}</td>
            )}                   
                    <td>
                       <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                         <i className="fas fa-edit"></i>&nbsp;Edit
                       </a>
                       &nbsp; &nbsp; 
                       <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)}>
                         <i className="fas fa-tash-altt"></i>&nbsp;Delete
                       </a>
                   </td>
                 </tr>

            ))}
         </tbody>
       </table>
       
       <a className="btn btn-warning" href={`/admin`}>
       <BsFillCaretLeftFill/>Back
                       </a>
      </div></div></div></div>
    )
  }
}}


