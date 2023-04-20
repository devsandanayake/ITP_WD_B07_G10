import React, { Component } from 'react'
import axios from 'axios';
import { BsDatabaseFillAdd,BsFillCaretLeftFill } from 'react-icons/bs';

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
   axios.get("http://localhost:8070/Warrenty").then(res =>{
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
    axios.delete(`http://localhost:8070/Warrenty/delete/${id}`).then((res)=>{
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
             <th scope="col">ItemCode</th>
             <th scope="col">ItemName</th>
             <th scope="col">customerID</th>
             <th scope="col">customerName</th>
             <th scope="col">cusEmail</th>
             <th scope="col">cReason</th>
             <th scope="col">Items-Image</th>
             <th scope="col"></th>
             </tr>
           </thead>
         
         <tbody style={{background:'pink'}}>
            {this.state.posts.map((posts,index)=>(
                 <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{posts.ItemCode}</td>
                    <td>{posts.ItemName}</td>
                    <td>{posts.customerID}</td>
                    <td>{posts.customerName}</td>
                    <td>{posts.cusEmail}</td>
                    <td>{posts.Reason}</td>

                    <td><img src={posts.warrenty} width={50}/></td>
                    <td>
                       <a className="btn btn-warning" href={`/editWarranty/${posts._id}`}>
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
                       <a className="btn btn-primary" href={`/Addwarranty`} style={{marginLeft:'5rem'}}>
                         <BsDatabaseFillAdd/>
                         &nbsp;ADD
                       </a>
      </div>
      </div>
      </div>
      </div>
    )
  }
}


