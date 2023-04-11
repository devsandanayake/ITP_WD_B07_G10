import React, { Component } from 'react'
 
import {login} from './userFuntion';
import { Link } from "react-router-dom";

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state =  {
         email : '',
         password : ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  onSubmit(e){
    e.preventDefault()

    const user ={
        email:this.state.email,
        password:this.state.password
    }    
    
    if(this.state.email == "admin@gmail.com" && this.state.password == "1234"){
          console.log('admin log')
          window.location="/admin";
    }if(this.state.email == "ad@gmail.com" && this.state.password == "1234"){
      window.location="/delivery/person";
    }
     

   login(user).then(res=>{
        if(res){
         //this.props.history.push(`/profile`)
          window.location="/profile";
        }
    })

    
  

      
  }
  



  render() {
    return (
      <div className='container'>
        <h2>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <div className='cil-md-6 mt-5 mx-auto'>
                    <form noValidate onSubmit={this.onSubmit}>
                        <h6 className='h6 mb-3 font-weight-normal text-center'>
                            <p className='h2 mb-5' style={{color:"pink"}}align="left">Login</p>
                            <div className='form-group'>
                                <label htmlFor='email'>Email Address</label><br/>
                                <input type='email' 
                                       className='form-control'
                                       name='email'
                                       placeholder='Enter Email'
                                       value={this.state.email}
                                       onChange={this.onChange}
                                       />
                            </div><br/>
                            <div className='form-group'>
                            <label htmlFor='password'>Password</label><br/>
                                <input type='password' 
                                       className='form-control'
                                       name='password'
                                       placeholder='Enter Password'
                                       value={this.state.password}
                                       onChange={this.onChange}
                                       />
                             </div><br/><center>
                             <button className='btn  btn-primary'>Sign in</button>
                               
                               <Link className="btn btn-danger mx-2" to="/register"> register </Link></center>
                        </h6>
                    </form>
                </div>
            </div>
        </h2>
      </div>
    )
  }
}
