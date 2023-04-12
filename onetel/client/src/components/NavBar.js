import React, { Component } from 'react'
import { Link } from "react-router-dom";
 
  class NavBar extends Component {
   

  logout(e){
    e.preventDefault( )
    localStorage.removeItem('usertoken');
     
    window.location='/login'
   
  }
   

  render() {
     const loginRegLink = (
      <nav className="navbar navbar-expand-lg bg-dark" id="navbarNav">
       <ul className="navbar-nav"> 
        <li className='nav-item'>
        <a className="nav-link" style={{ color: '#1dff1d' }}   href="/login">Login</a>
        </li>

        <li className='nav-item'>
        <a className="nav-link"  style={{ color: 'red' }} href="/register">Register</a>
        </li>
       </ul>
       </nav>
    
      
        
    )
    
    const userLink = (
      <nav className="navbar navbar-expand-lg bg-dark" id="navbarNav">
      <ul className="navbar-nav"> 
       <li className='nav-item'>
       <a className="nav-link"  style={{ color: 'white' }}  href="/profile">profile</a>
       </li>
      

       <li className='nav-item'>
       <a className="nav-link"  style={{ color: 'white' }} href="/repairCus">Service</a>
       </li>
       &nbsp; &nbsp; 
       <li className='nav-item'>
         <a  className="btn btn-danger"  onClick={this.logout.bind(this)} herf="">Logout</a>
       </li>
      </ul>
      </nav>
       
    )  
    
    return(
    <nav className="navbar navbar-expand-lg bg-dark"  style={{ color: 'white' }}>
    <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{ color: 'white' }}>Onetel</a>
      <button className="navbar-toggler bg-white"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon bg-white"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link"  style={{ color: 'white' }}  href="/">Home</a>
          </li>
         <li className="nav-item">
            <a className="nav-link"  style={{ color: 'white' }} href='#'>About</a>
          </li>
        </ul>   
        {localStorage.usertoken? userLink:loginRegLink}
         
      </div>
    </div>
  </nav>
    
  )
     
    
  }

}
export default  NavBar;

  