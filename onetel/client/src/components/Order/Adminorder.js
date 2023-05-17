import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

export default class Adminorder extends Component {

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
   axios.get("http://localhost:8070/orders").then(res =>{
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
    axios.delete(`http://localhost:8070/order/delete/${id}`).then((res)=>{
      alert("Deleted");
      this.viewPosts();
    })
  }

   //seraching part  
   filterData(posts,searchKey){
  

    const result = posts.filter((post)=>
        post.Categories.toLowerCase().includes(searchKey)||
        
        post.Model.toLowerCase().includes(searchKey)
        
        
    )
    this.setState({posts:result})
}


handleSearchArea =(e)=>{

console.log(e.currentTarget.value);

const searchKey = e.currentTarget.value;

axios.get("http://localhost:8070/orders").then(res =>{
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
                    placeholder="Search"
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
             <th scope="col">Order ID</th>
             <th scope="col">Categories</th>
             <th scope="col">Brand</th>
             <th scope="col">Price</th>
             <th scope="col">Model</th>
             <th scope="col">Quntity</th>
             
             </tr>
           </thead>
         
         <tbody>
            {this.state.posts.map((posts,index)=>(
                 <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <th>{posts.OrderId}</th>
                    <td>{posts.Categories}</td>
                    <td>{posts.Brand}</td>
                    <td>{posts.Price}</td>
                    <td>{posts.Model}</td>
                    <td>{posts.Quantity}</td>
                    <td>
                       <a className="btn btn-warning" href={`/editOrder/${posts._id}`}>
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


