import React, { Component } from 'react'
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsWhatsapp } from 'react-icons/bs';
import { IoLogoChrome } from 'react-icons/io';
import logo from '../images/lo.png'
import "./Navbar.css"
  class NavBar extends Component {
   

  logout(e){
    e.preventDefault( )
    localStorage.removeItem('usertoken');
     
    window.location='/login'
   
  }
   

  render() {
     const loginRegLink = (
       <nav className="navbar navbar-expand-lg" id="navbarNav">
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
      <nav className="navbar navbar-expand-lg" id="navbarNav">
      <ul className="navbar-nav"> 
       <li className='nav-item'>
       <a className="nav-link"    href="/profile">profile</a>
       </li>
      

        
       <NavDropdown title="Service" id="collasible-nav-dropdown" className='tog'>
              <NavDropdown.Item href="/repairCus">Repair Item</NavDropdown.Item>
              <NavDropdown.Item href="/Addwarrenty">
                Warrenty Clame
              </NavDropdown.Item>
              <NavDropdown.Item href="/rentitemdisplay">Rent Item</NavDropdown.Item>

              <NavDropdown.Item href="/AddReturn">ReturnItem</NavDropdown.Item>

               


              <NavDropdown.Divider />
              
              <NavDropdown.Item href="https://wa.me/+94785748316" style={{color:"green"}}>
              <BsWhatsapp/>&nbsp;WhatsApp
              </NavDropdown.Item>
            </NavDropdown>
    
       &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
       <li className='nav-item'>
         <a  className="btn btn-danger"  onClick={this.logout.bind(this)} herf="">Logout</a>
       </li>
      </ul>
      </nav>
       
    )  
    
    return(
    <nav className="navbar navbar-expand-lg navbarNav" >
    <div className="container-fluid">
    <a className="navbar-brand" href="#" ><img className='logs' src={logo}></img>&nbsp;&nbsp;ONETEL</a>
      <button className="navbar-toggler bg-white"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon bg-white"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link"    href="/">Home</a>
          </li>
         <li className="nav-item">
            <a className="nav-link"   href='#'>About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"    href="/chat">ChatBot</a>
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

  