import React, { Component } from 'react'

 
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { BsCart4} from "react-icons/bs";
import Form from 'react-bootstrap/Form';


export default class RentItemdisplay extends Component {
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
    axios.get("http://localhost:8070/rentItems").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });
        //show array list 
        console.log(this.state.posts)        
      }
    });
  }
    //seraching part  
    filterData(posts,searchKey){
         

      const result = posts.filter((post)=>
          post.ProductName.toLowerCase().includes(searchKey)||
          post.Price.toLowerCase().includes(searchKey)
          
      )
      this.setState({posts:result})
  }
  
  
  handleSearchArea =(e)=>{
  
  //console.log(e.currentTarget.value); okey
  
  const searchKey = e.currentTarget.value;
  
  axios.get("http://localhost:8070/rentItems").then(res =>{
    if(res.data.success){
      
      this.filterData(res.data.existingPosts,searchKey)
             
    }
  });
  
  }
onSubmit=()=>{
  if(localStorage.getItem('usertoken')){
    window.location='/RenyReqcus'
  }
  else{
    window.alert("Login Your account");
  }

}
   

  render() {
 
     


    return (
       <div  className='container'>
           <div className='banner'>
              
               <br/>
               <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-3"
                    aria-label="Search"
                    name="searchQuary"
                    onChange={this.handleSearchArea}
                  />
                  <Button variant="success">Search</Button>
               </Form><br/>
                      
            
          </div>
          <div className='row'>
      {this.state.posts.map((posts)=>(
      <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>    
        <div className='card p-0 overflow-hidden h-100 shadow' alt='im'>
         <img src={posts.imageRent} className='card-img-top img-fluid' alt='brand'/>   
             <div className='card-body text-center'>  
             <h5 className='card-title'>{posts.ProductName}</h5>
                        <h5 className='card-title'>{posts.UPC}</h5>
                        <h5 className='card-title'>{posts.SKU}</h5>
                        <h5 className='card-title'>{posts.Model}</h5>
                        <h5 className='card-title'>{posts.Price}</h5>
                        <p className='card-text'> {posts.Features}</p>
                  
                  <a className="btn btn-success" href={`/RentReqCus`}>Rent </a>                
                  
              </div>
          </div>
          
       </div>
             
     ))}
     </div>
           
       </div>        
         
    
  )
}
}