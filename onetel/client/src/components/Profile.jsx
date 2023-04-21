import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios';
export default class Profile extends Component {
  constructor(props){
    super(props)
    this.state ={
        first_name:'',
        last_name:'',
        email:'',
        posts:[]
    }
  }

  componentDidMount(){
    const token = localStorage.usertoken
    const decode = jwt_decode(token)
    this.setState({
        first_name:decode.first_name,
        last_name : decode.last_name,
        email : decode.email

    })
    this.viewPosts();
  }
  //retrivew funtion
 viewPosts(){
  axios.get("http://localhost:8070/posts").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });
      //show array list 
      console.log(this.state.posts)        
    }
  });
}

  render() {
                                     
    let email = this.state.email;
     
        
    
    return (
        <div className="container">
              <div className="jumbotron mt-5">
                  <div className="col-sm8 mx-auto">
                     <h1 className="text-center">Profile</h1>
                   </div>
                  <table className="table col-md-6 mx-auto">
                      <h2>
                         <tbody>
                         <tr>
                            <td>First Name :</td>
                            <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                            <td>Last Name :</td>
                            <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                            <td>Email :</td>
                            <td>{this.state.email}</td>
                            </tr>
                         </tbody>
                      </h2>
                   </table>
             </div>
             
        </div>
    )
  }
}
