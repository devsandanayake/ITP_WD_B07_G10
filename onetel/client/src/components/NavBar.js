import React, { Component } from 'react'
 
 
export default class NavBar extends Component {

  render() {
    return(
      
    <nav className="navbar navbar-expand-lg bg-primary">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">Adminstration</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Catargory</a>
            <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/delivery/ad">Delivery</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>   
          <li className="nav-item">
            <a className="nav-link" href='#'>About</a>
          </li>
        </ul>   
      </div>
    </div>
  </nav>
  
    )
  }
}
