import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [updatedPost, setUpdatedPost] = useState({
    name: "",
    address: "",
    contactNumber: "",
    email:"",
    category:"",
    Model:"",
    reason:""
    
  });

  useEffect(() => {
    axios.get(`/repair/${id}`).then((res) => {
      if (res.data.success) {
        setPost(res.data.post);
        setUpdatedPost({
          name: res.data.post.name,
          address: res.data.post.address,
          contactNumber: res.data.post.contactNumber,
          email: res.data.post.email,
          category: res.data.post.category,
          Model: res.data.post.Model,
          reason: res.data.post.reason
           
        });
      }
    });
  }, [id]);
  console.log(post);

  const {name, address, contactNumber,email , category,Model,reason} = updatedPost;

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
      name: updatedPost.name,
      address: updatedPost.address,
      contactNumber: updatedPost.contactNumber,
      email: updatedPost.email,
      category: updatedPost.category,
      Model: updatedPost.Model,
      reason: updatedPost.reason
       
    };

    axios.put(`/repair/update/${id}`, data).then((res) => {
      console.log(res.data);
      alert('Post updated successfully!');
      setUpdatedPost({
        name: "",
        address: "",
        contactNumber: "",
        email:"",
        category:"",
        Model:"",
        reason:""
      });
      navigate('/repairAdmin');
    });
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h4>Edit Repairs</h4>
      <hr />

      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label>Name:</label>
          <input
            type='text'
            className='form-control'
            name='name'
            value={name}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Address:</label>
          <input
            type='text'
            className='form-control'
            name='address'
            value={address}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Phone Number:</label>
          <input
            type='number'
            className='form-control'
            name='contactNumber'
            value={contactNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>NIC:</label>
          <input
            type='email'
            className='form-control'
            name='email'
            value={email}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>email:</label>
          <input
            type='text'
            className='form-control'
            name='category'
            value={category}
            onChange={handleInputChange}
          />
        </div>

  
        <div className='form-group'>
          <label>email:</label>
          <input
            type='text'
            className='form-control'
            name='Model'
            value={Model}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>email:</label>
          <input
            type='text'
            className='form-control'
            name='reason'
            value={reason}
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