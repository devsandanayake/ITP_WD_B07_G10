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
       <ul className='nav nav-tabs'>
        <li className='nav-item'>
            <Link to="/login" className="nav-link">
                <h1><img src="https://img.icons8.com/cute-clipart/64/000000/login-rounded-right.png"/>Login</h1>
            </Link>
        </li>

        <li className='nav-item'>
            <Link to="/register" className="nav-link">
                <h1><img src="https://img.icons8.com/cute-clipart/64/000000/check.png"/>Register</h1>
            </Link>
        </li>
       </ul>
    )
    
    const userLink = (
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
            <Link to="/profile" className="nav-link">
                <h1><img src="https://img.icons8.com/cute-clipart/64/000000/login-rounded-right.png"/>Profile</h1>
            </Link>
        </li>

        <li className='nav-item'>
            <Link to="/registedr" className="nav-link">
                <h1><img src="https://img.icons8.com/cute-clipart/64/000000/check.png"/>cart</h1>
            </Link>
        </li>
        
        <li className='nav-item'>
             <a herf="" onClick={this.logout.bind(this)} className="nav-link">
              <h1><img src="https://img.icons8.com/cute-clipart/64/000000/Logout-rounded-down.png"/>LogOut</h1>
             </a>
        </li> 

       </ul>
       
    )
    
       
    
    return(
       <nav className='navbar nab-expand navbar-light rouned'>
       
         <dic className="collapes navbar-collape justify-content-md-center" id="navbar1">
         <ul className="nav nav-tabs">
              <li className="nav-item">
              <Link to = "/" className = "nav-link">
              <h1><img src="https://img.icons8.com/flat_round/64/000000/home.png"/>Home</h1>
              </Link>
              </li>
              </ul>
              {localStorage.usertoken? userLink:loginRegLink}
              
         </dic>
       </nav>
    )
     
    
  }

}
export default  NavBar;

  