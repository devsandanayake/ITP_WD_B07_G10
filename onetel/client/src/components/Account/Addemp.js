import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./emp.css"
export default function Addemp() {
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setemail] = useState('');
  const [Address, setAddress] = useState('');
  const [NIC, setNIC] = useState('');
  const [Phone, setPhone] = useState('');
  const [CusImg, setCusImg] = useState('');
  const [massage, setMessage] = useState('');

  const onChangeFile = (e) => {
    setCusImg(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    // Validate fields
    if (!first_name || !last_name || !email || !Address || !NIC || !Phone || !CusImg) {
      toast.error('Please fill in all fields');
      return;
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email address');
      return;
    }

    const formData = new FormData();

    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    formData.append('email', email);
    formData.append('Address', Address);
    formData.append('NIC', NIC);
    formData.append('Phone', Phone);
    formData.append('CusImg', CusImg);

    setfirst_name('');
    setlast_name('');
    setemail('');
    setAddress('');
    setNIC('');
    setPhone('');
    setCusImg('');
    axios
      .post('http://localhost:8070/add/emp', formData)
      .then((res) => {
        setMessage(res.data);
        toast.success('Data submitted successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='container'>
      <ToastContainer />
      <div className='card bg-glas' style={{ width: '50%', margin: 'auto' }}>
        <div className='card-body'>
          <form onSubmit={changeOnClick} encType='multipart/form-data'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label htmlFor='first_name'   style={{ fontFamily: 'Arial', fontSize: '12px' }}>
                    First Name
                  </label>
                  <input
                    type='text'
                    value={first_name}
                    onChange={(e) => setfirst_name(e.target.value)}
                    className='form-control'
                    placeholder='First Name'
                  />
                </div>
                <br/>
                <div className='form-group'>
                  <label htmlFor='last_name'  style={{ fontFamily: 'Arial', fontSize: '12px' }}>
                    Last Name
                  </label>
                  <input
                    type='text'
                    value={last_name}
                    onChange={(e) => setlast_name(e.target.value)}
                    className='form-control'
                    placeholder='Last Name'
                  />
                </div>
                <br/>
                <div className='form-group'>
                  <label htmlFor='email'  style={{ fontFamily: 'Arial', fontSize: '12px' }}>
                    Email
                  </label>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    className='form-control'
                    placeholder='Email'
                  />
                </div>
                <br/>
              </div>
             
              <div className='col-md-6'>
                <div className='form-group'>
                  <label htmlFor='Address'  style={{ fontFamily: 'Arial', fontSize: '12px' }}>
                    Address
                  </label>
                  <input
                    type='text'
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}
                    className='form-control'
                    placeholder='Address'
                  />
                </div>
                <br/>
                <div className='form-group'>
                  <label htmlFor='NIC'  style={{ fontFamily: 'Arial', fontSize: '12px' }}>
                    NIC
                  </label>
                  <input
                    type='text'
                    value={NIC}
                    onChange={(e) => setNIC(e.target.value)}
                    className='form-control'
                    placeholder='NIC'
                  />
                </div>
                <br/>
                <div className='form-group'>
                  <label htmlFor='Phone'  style={{ fontFamily: 'Arial', fontSize: '12px' }}>
                    Phone
                  </label>
                  <input
                    type='number'
                    value={Phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className='form-control'
                    placeholder='Phone'
                  />
                </div>
              </div>
              <br/>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label htmlFor='file'  style={{ fontFamily: 'Arial', fontSize: '12px' }}>
                    Image
                  </label>
                  <input
                    type='file'
                    image='CusImg'
                    onChange={onChangeFile}
                    className='form-control'
                    placeholder='Add Image'
                  />
                </div>
              </div>
            </div>
            <br/>
            <div className='text-center'>
              <button type='submit' className='btn btn-primary'>
                Add Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
