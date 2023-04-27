import React, { Component } from 'react'
import axios from 'axios';
import { BsDatabaseFillAdd,BsFillCaretLeftFill } from 'react-icons/bs';

export default class AdminRentReq extends Component {

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
   axios.get("http://localhost:8070/RentReq").then(res =>{
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
    axios.delete(`http://localhost:8070/RentReq/delete/${id}`).then((res)=>{
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
             <th scope="col">Phone</th>
             <th scope="col">StartDate</th>
             <th scope="col">EndDate</th>
             <th scope="col">Items-Image</th>
             <th scope="col">Request Status</th>
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
                    <td>{posts.Phone}</td>
                    <td>{posts.StartDate}</td>
                    <td>{posts.EndDate}</td>

                    <td><img src={posts.NIC} width={50}/></td>
                    <td style={{background:'#e6a267'}}>{posts.ReqStatus}</td>
                    <td>
                       <a className="b btn-primarytn" href={`/reqc/${posts._id}`}>
                         <i className="fas fa-edit"></i>&nbsp;Change Status
                       </a>
                       &nbsp; &nbsp; 
                       
                   </td>
                 </tr>

            ))}
         </tbody>
       </table>
       
       <a className="btn btn-warning" href={`/rentItem`}>
       <BsFillCaretLeftFill/>Back
                       </a> &nbsp; &nbsp;
                       
                       <a className="btn btn-warning" href={`/rented`}>
       <BsFillCaretLeftFill/>request
                       </a>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
