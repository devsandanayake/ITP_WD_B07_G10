import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [updatedPost, setUpdatedPost] = useState({
      first_name:"",
      last_name:"",
      email:"",
      Address:"",
      NIC:"",
      Phone:"",
  });

  useEffect(() => {
    axios.get(`/Emp/${id}`).then((res) => {
      if (res.data.success) {
        setPost(res.data.post);
        setUpdatedPost({
          first_name: res.data.post.first_name,
          last_name: res.data.post.last_name,
          email: res.data.post.email,
          Address: res.data.post.Address,
          NIC: res.data.post.NIC,
          Phone: res.data.post.Phone,
        });
      }
    });
  }, [id]);
  console.log(post);

  const {first_name, last_name, email, Address, NIC, Phone} = updatedPost;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUpdatedPost({
      ...updatedPost,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      first_name: updatedPost.first_name,
      last_name: updatedPost.last_name,
      email: updatedPost.email,
      Address: updatedPost.Address,
      NIC: updatedPost.NIC,
      Phone: updatedPost.Phone,
    };

    axios.put(`/Emp/update/${id}`, data).then((res) => {
      console.log(res.data);
      alert('Post updated successfully!');
      setUpdatedPost({
        first_name:"",
        last_name:"",
        email:"",
        Address:"",
        NIC:"",
        Phone:"",
      });
      navigate('/Emp');
    });
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h4>Edit Repairs</h4>
      <hr />

      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label>First name:</label>
          <input
            type='text'
            className='form-control'
            name='first_name'
            value={first_name}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Last_name:</label>
          <input
            type='text'
            className='form-control'
            name='last_name'
            value={last_name}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Phone:</label>
          <input
            type='number'
            pattern="[0-9]{10}"
            className='form-control'
            name='Phone'
            value={Phone}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Address:</label>
          <input
            type='text'
            className='form-control'
            name='Address'
            value={Address}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Email:</label>
          <input
            type='text'
            className='form-control'
            name='email'
            value={email}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Phone:</label>
          <input
            type='text'
            className='form-control'
            name='Phone'
            value={Phone}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>NIC:</label>
          <input
            type='text'
            className='form-control'
            name='NIC'
            value={NIC}
            onChange={handleInputChange}
          />
        </div>

        <button
          type='submit'
          className='btn btn-success'
          style={{ marginTop: '15px' }}
        >
          <i className='far fa-check-square'></i>
          &nbsp;Update
        </button>
      </form>
    </div>
  );
}