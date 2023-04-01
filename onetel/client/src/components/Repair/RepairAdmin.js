import React, { Component } from 'react'
import axios from 'axios';
 

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


  render() {
    return (
      <div>
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
                         <i className="fas fa-tash-altt"></i>Back
                       </a>
      </div>
    )
  }
}


