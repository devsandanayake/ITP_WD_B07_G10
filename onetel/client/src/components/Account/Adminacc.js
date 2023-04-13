import React, { Component } from 'react'
import {adminregister} from './adminFuntion';

import { Link } from "react-router-dom";
 
 
class Register extends Component {

  constructor(props){
    super(props);
    this.state =  {
         
         name:'',
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

    const admin ={
        name:this.state.name,
        email:this.state.email,
        password:this.state.password
    }    

   adminregister(admin).then(res=>{
        if(res){
         
          this.props.history.push(`/login`)
          
           
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
                        <h1 className='h6 mb-3 font-weight-normal'>
                            <p className='h2 mb-5' style={{color:"pink"}}align="left">Registration</p>

                          

                            <div className='form-group'>
                                <label htmlFor='last_name'>Name</label><br/><br/>
                                <input type='text' 
                                       className='form-control'
                                       name='name'
                                       placeholder='Enter Last Name'
                                       value={this.state.name}
                                       onChange={this.onChange}
                                       />
                            </div><br/>


                            <div className='form-group'>
                                <label htmlFor='email'>Email Address</label><br/><br/>
                                <input type='email' 
                                       className='form-control'
                                       name='email'
                                       placeholder='Enter Email'
                                       value={this.state.email}
                                       onChange={this.onChange}
                                       />
                            </div><br/>
                            <div className='form-group'>
                            <label htmlFor='password'>Password</label><br/><br/>
                                <input type='password' 
                                       className='form-control'
                                       name='password'
                                       placeholder='Enter Password'
                                       value={this.state.password}
                                       onChange={this.onChange}
                                       />
                             </div><br/>
                               <button className='btn btn-outline-primary btn-block' >Register</button> 
                               <Link className="btn btn-danger mx-2" to="/login">Login</Link>
                        </h1>
                    </form>
                </div>
            </div>
        </h2>
      </div>
    )
  }
}

export default Register;