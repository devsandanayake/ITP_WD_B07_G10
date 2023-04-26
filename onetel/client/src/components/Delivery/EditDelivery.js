import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [updatedPost, setUpdatedPost] = useState({
    Name: "",
    Address: "",
    phone: "",
    NIC:"",
    email:"",
    
  });

  useEffect(() => {
    axios.get(`/deliveryP/${id}`).then((res) => {
      if (res.data.success) {
        setPost(res.data.post);
        setUpdatedPost({
          Name: res.data.post.Name,
          Address: res.data.post.Address,
          phone: res.data.post.phone,
          NIC: res.data.post.NIC,
          email: res.data.post.email,
          
           
        });
      }
    });
  }, [id]);
  console.log(post);

  const {Name, Address, phone,NIC , email} = updatedPost;

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
      Name: updatedPost.Name,
      Address: updatedPost.Address,
      phone: updatedPost.phone,
      NIC: updatedPost.NIC,
      email: updatedPost.email,
       
    };

    axios.put(`/post/update/${id}`, data).then((res) => {
      console.log(res.data);
      alert('Post updated successfully!');
      setUpdatedPost({
        Name: "",
        Address: "",
        phone: "",
        NIC:"",
        email:""
      });
      navigate('/delivery/ad');
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
            name='Name'
            value={Name}
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
          <label>Phone Number:</label>
          <input
            type='number'
            className='form-control'
            name='phone'
            value={phone}
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

        <div className='form-group'>
          <label>email:</label>
          <input
            type='email'
            className='form-control'
            name='email'
            value={email}
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