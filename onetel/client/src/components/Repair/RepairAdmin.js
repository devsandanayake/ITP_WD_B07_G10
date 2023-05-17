import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

export default class RepairAdmin extends Component {

 constructor(props){
   super(props);

   this.state={
     posts:[]
   };
 }
 componentDidMount(){
   this.viewPosts();
 }
//retrivew funtion
 viewPosts(){
   axios.get("http://localhost:8070/repair").then(res =>{
     if(res.data.success){
       this.setState({
         posts:res.data.existingPosts
       });
       //show array list 
       console.log(this.state.posts)        
     }
   });
 }
  //delete function
  onDelete=(id)=>{
    axios.delete(`http://localhost:8070/repair/delete/${id}`).then((res)=>{
      alert("Deleted");
      this.viewPosts();
    })
  }

   //seraching part  
   filterData(posts,searchKey){
  

    const result = posts.filter((post)=>
        post.name.toLowerCase().includes(searchKey)||
        post.address.toLowerCase().includes(searchKey)||
        post.contactNumber.toLowerCase().includes(searchKey)
            
        
    )
    this.setState({posts:result})
}


handleSearchArea =(e)=>{

console.log(e.currentTarget.value);

const searchKey = e.currentTarget.value;

axios.get("http://localhost:8070/repair").then(res =>{
  if(res.data.success){
    
    this.filterData(res.data.existingPosts,searchKey)
           
  }
});
}



  render() {
    return (
      <div>
        <Form className="d-flex mb-4 mx-0" >
                  <Form.Control
                    type="search"
                    placeholder="Enter Name OR Phone Number"
                    className="me-2"
                    aria-label="Search"
                    name="searchQuary"
                    onChange={this.handleSearchArea}
                  />
                  <Button variant="danger">Search</Button>
                </Form>
       <table className="table" >
           <thead>
             <tr>
             <th scope="col">Index</th>
             <th scope="col">Customer-Name</th>
             <th scope="col">Address</th>
             <th scope="col">Phone</th>
             <th scope="col">Email</th>
             <th scope="col">Category</th>
             <th scope="col">Model-Num</th>
             <th scope="col">Reason</th>
             </tr>
           </thead>
         
         <tbody>
            {this.state.posts.map((posts,index)=>(
                 <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{posts.name}</td>
                    <td>{posts.address}</td>
                    <td>{posts.contactNumber}</td>
                    <td>{posts.email}</td>
                    <td>{posts.category}</td>
                    <td>{posts.Model}</td>
                    <td>{posts.reason}</td>
                    <td>
                       <a className="btn btn-warning" href={`/repairedit/${posts._id}`}>
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
                         <i className="fas fa-tash-altt"></i>Back
                       </a>
      </div>
    )
  }
}


