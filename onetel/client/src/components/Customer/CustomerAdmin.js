import React, { Component } from 'react'
import axios from 'axios';
 


export default class CustomerAdmin extends Component {

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
   axios.get("http://localhost:8070/getData").then(res =>{
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
    axios.delete(`http://localhost:8070/user/delete/${id}`).then((res)=>{
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
             <th scope="col">First Name</th>
             <th scope="col">Last Name</th>
             <th scope="col">Email</th>
             <th scope="col">Date</th>
             </tr>
           </thead>
         
         <tbody>
            {this.state.posts.map((posts,index)=>(
                 <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{posts.first_name}</td>
                    <td>{posts.last_name}</td>
                    <td>{posts.email}</td>
                    <td>{posts.date}</td>
                    <td>
                                             
                       <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)}>
                         <i className="fas fa-tash-altt"></i>&nbsp;Delete
                       </a>
                   </td>
                 </tr>

            ))}
         </tbody>
       </table>
       

      </div>
    )
  }
}


