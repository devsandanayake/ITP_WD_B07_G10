import React, { Component } from 'react'
import axios from 'axios';
 

export default class AdminProduct extends Component {

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
   axios.get("http://localhost:8070/products").then(res =>{
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
    axios.delete(`http://localhost:8070/product/delete/${id}`).then((res)=>{
      alert("Deleted");
      this.viewPosts();
    })
  }


  render() {
    return (
      <div className='container'>
        <div className='row my-4'>
          <div className='col-lg-12'>
            <div className='table-responsive'>
       <table className="table table-striped text-center" >
           <thead>
             <tr className='table-dark'>
             <th scope="col">Index</th>
             <th scope="col">Categories</th>
             <th scope="col">Brand</th>
             <th scope="col">Price</th>
             <th scope="col">Model</th>
             <th scope="col">Status</th>
             <th scope="col">Items-Image</th>
             <th scope="col"></th>
             </tr>
           </thead>
         
         <tbody>
            {this.state.posts.map((posts,index)=>(
                 <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{posts.Categories}</td>
                    <td>{posts.Brand}</td>
                    <td>{posts.Price}</td>
                    <td>{posts.Model}</td>
                    <td>{posts.Status}</td>
                    <td><img src={posts.image} width={50}/></td>
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
                       <a className="btn btn-warning" href={`/addProduct`}>
                         <i className="fas fa-tash-altt"></i>ADD
                       </a>
      </div>
      </div>
      </div>
      </div>
    )
  }
}


