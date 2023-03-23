import React, { Component } from 'react'
import { Link } from "react-router-dom";
 
  class NavBar extends Component {
  logout(e){
    e.preventDefault( )
    localStorage.removeItem('usertoken');
   
    this.props.history.push(`/`)
   
  }
   

  render() {
     const loginRegLink = (
      <nav className="navbar navbar-expand-lg bg-primary">
       <ul className="navbar-nav"> 
        <li className='nav-item'>
        <a className="nav-link" href="/login">Login</a>
        </li>

        <li className='nav-item'>
        <a className="nav-link" href="/register">Register</a>
        </li>
       </ul>
       </nav>
    )
    
    const userLink = (
      <nav className="navbar navbar-expand-lg bg-primary">
      <ul className="navbar-nav"> 
       <li className='nav-item'>
       <a className="nav-link" href="/profile">profile</a>
       </li>
       <li class="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Catargory</a>
            <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/delivery/ad">Delivery</a></li>
            <li><a className="dropdown-item" href="/customer/ad">Customer</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
          </li>

       <li className='nav-item'>
       <a className="nav-link" href="/cart">cart</a>
       </li>
       &nbsp; &nbsp; 
       <li className='nav-item'>
         <a  className="btn btn-danger"  onClick={this.logout.bind(this)} herf="">Logout</a>
       </li>
      </ul>
      </nav>
       
    )
          
    
    return(

      <nav className="navbar navbar-expand-lg bg-primary">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">Onetel</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          
         
          <li className="nav-item">
            <a className="nav-link" href='#'>About</a>
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

  