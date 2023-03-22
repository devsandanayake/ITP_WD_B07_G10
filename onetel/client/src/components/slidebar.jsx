 import React, { Component } from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/slidebar.css'
import { Link } from "react-router-dom";

 export default class slidebar extends Component {
   render() {
     return (
        <div className='bg-white slidebar'>
          <div className='m-2'>
          <i className='bi bi-bootstrap-fill me-2 fs-4'></i>
          <span className='brand-name fs-4'>Onetel-Administration</span>
          </div>

          <hr className='text-dark' />
          <div className='list-group list-group-flush'>
             <a className='list-group-item py-2'>
               <i className='bi bi-speedometer2 fs-5 me-2'></i>
                   <span className='fs-5' >Dashboard</span>
          </a>

          <a className='list-group-item py-2  my-1'>
          <i className='bi bi-house fs-5 me-2'></i>
          <span className='fs-5'>Home</span>
          </a>

          <a className='list-group-item py-2  my-1'>
          <i className='bi bi-table fs-5 me-2'></i>
          <span className='fs-5'>Catogory</span>
          </a>
          <a className='list-group-item py-2  my-1'>
          <i className='bi bi-clipboard fs-5 me-2'></i>
          <span className='fs-5'>Repoat</span>
          </a>
          <a className='list-group-item py-2  my-1'>
          <i className='bi bi-people fs-5 me-2'></i>
          <span className='fs-5'>Customers</span>
          </a>
          <a className='list-group-item py-2  my-1'>
          <i className='bi bi-power fs-5 me-2'></i>
          <Link className='fs-5'  to='/login'>Logout</Link>
          </a>
          </div></div>
       
     )
   }
 }
 