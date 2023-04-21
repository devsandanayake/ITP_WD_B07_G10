import React, { Component } from 'react'
import axios from 'axios';
import { BsFillCaretLeftFill } from 'react-icons/bs';

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
      
      <div className='container'>
         <div className='row my-4'>
          <div className='col-lg-12'>
            <div className='table-responsive'> 
       <table className="table table-striped text-center" >
           <thead>
             <tr className='table-dark'>
             <th scope="col">Index</th>
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
                    <td>{posts.Name}</td>
                    <td>{posts.Address}</td>
                    <td>{posts.phone}</td>
                    <td>{posts.NIC}</td>
                    <td>{posts.email}</td>
                    <h4><td style={{background:'#FF6833'}}>{posts.Status}</td></h4>
                    
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


