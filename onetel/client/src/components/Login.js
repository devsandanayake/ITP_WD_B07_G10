import React, { Component } from 'react'
//import {adminlogin} from './adminFuntion';
import {login} from './userFuntion';
import { Link } from "react-router-dom";

export default class Login extends Component {

  constructor(){
    super();
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
    
     

   login(user).then(res=>{
        if(res){
          //this.props.history.push(`/profile`)
          window.location="/";
        }
    })

      
  }
  



  render() {
    return (
      <div className='container'>
        <h2>
            <div className='row'>
                <div className='cil-md-6 mt-5 mx-auto'>
                    <form noValidate onSubmit={this.onSubmit}>
                        <h1 className='h3 mb-3 font-weight-normal'>
                            <p align="center">Login</p>
                            <div className='form-group'>
                                <label htmlFor='email'>Email Address</label>
                                <input type='email' 
                                       className='form-control'
                                       name='email'
                                       placeholder='Enter Email'
                                       value={this.state.email}
                                       onChange={this.onChange}
                                       />
                            </div>
                            <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                                <input type='password' 
                                       className='form-control'
                                       name='password'
                                       placeholder='Enter Password'
                                       value={this.state.password}
                                       onChange={this.onChange}
                                       />
                             </div>
                             <button className='btn  btn-outline-primary'>Sign in</button>
                               
                               <Link className="btn btn-outline-danger mx-2" to="/register"> register </Link>
                        </h1>
                    </form>
                </div>
            </div>
        </h2>
      </div>
    )
  }
}
