import React, { Component } from 'react'
import s10 from '../images/s10.jpg' 
import banner1 from '../images/banner1.jpg' 
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { BsCart4} from "react-icons/bs";
import Form from 'react-bootstrap/Form';

export default class Home extends Component {
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
    //seraching part  
    filterData(posts,searchKey){
  

      const result = posts.filter((post)=>
          post.Brand.toLowerCase().includes(searchKey)||
          post.Price.toLowerCase().includes(searchKey)
          
      )
      this.setState({posts:result})
  }
  
  
  handleSearchArea =(e)=>{
  
  //console.log(e.currentTarget.value);
  
  const searchKey = e.currentTarget.value;
  
  axios.get("http://localhost:8070/products").then(res =>{
    if(res.data.success){
      
      this.filterData(res.data.existingPosts,searchKey)
             
    }
  });
  
  }
onSubmit=()=>{
  if(localStorage.getItem('usertoken')){
    window.location='/insertDelivery'
  }
  else{
    window.alert("Login Your account");
  }

}
   
   
   
  render() {
    return (
       <div  className='container'>
           <div className='banner'>
               <img src={banner1}className='card-img'/>
               </div><br/>
               <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-3"
                    aria-label="Search"
                    name="searchQuary"
                    onChange={this.handleSearchArea}
                  />
                  <Button variant="outline-success">Search</Button>
                </Form><br/>
        
          <div className='row'>
            {this.state.posts.map((posts)=>(
            <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>    
              <div className='card p-0 overflow-hidden h-100 shadow' alt='im'>
               <img src={posts.testImage} className='card-img-top img-fluid' alt='brand'/>   
                   <div className='card-body text-center'>  
                        <h5 className='card-title'>{posts.Brand}</h5>
                        <h5 className='card-title'>{posts.Price}</h5>
                        <p className='card-text'> {posts.Status}</p>
                        <a className="btn btn-primary" href={``}><BsCart4/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      
                        <Button type="submit" className='btn btn-success' onClick={this.onSubmit}>Buy</Button>
                         </div>
                </div>
             </div>
          
           ))}
           </div>
               </div>
               
       
    
  )
}
}
