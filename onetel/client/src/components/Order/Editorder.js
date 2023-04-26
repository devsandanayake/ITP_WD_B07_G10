import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


export default function Editorder() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [updatedPost, setUpdatedPost] = useState({
    Categories: "",
    Brand: "",
    Price: "",
    Model:"",
    Email:"",
    Quntity:""
    
  });

  useEffect(() => {
    axios.get(`/orders/${id}`).then((res) => {
      if (res.data.success) {
        setPost(res.data.post);
        setUpdatedPost({
          Categories: res.data.post.Categories,
          Brand: res.data.post.Brand,
          Price: res.data.post.Price,
          Model: res.data.post.Model,
          Email: res.data.post.Email,
          Quntity: res.data.post.Quntity
          
           
        });
      }
    });
  }, [id]);
  console.log(post);

  const {Categories, Brand, Price,Model , Email,Quntity} = updatedPost;

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
      Categories: updatedPost.Categories,
      Brand: updatedPost.Brand,
      Price: updatedPost.Price,
      Model: updatedPost.Model,
      Email: updatedPost.Email,
      Quntity: updatedPost.Quntity
       
    };

    axios.put(`/order/update/${id}`, data).then((res) => {
      console.log(res.data);
      alert('Post updated successfully!');
      setUpdatedPost({
        Categories: "",
        Brand: "",
        Price: "",
        Model:"",
        Email:"",
        Quntity:""
      });
      navigate('/adminorder');
    });
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h4>Edit</h4>
      <hr />

      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label>Categories:</label>
          <input
            type='text'
            className='form-control'
            name='Categories'
            value={Categories}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Brand:</label>
          <input
            type='text'
            className='form-control'
            name='Brand'
            value={Brand}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Phone Number:</label>
          <input
            type='number'
            className='form-control'
            name='Price'
            value={Price}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Model:</label>
          <input
            type='text'
            className='form-control'
            name='Model'
            value={Model}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Email:</label>
          <input
            type='Email'
            className='form-control'
            name='Email'
            value={Email}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Quntity:</label>
          <input
            type='number'
            className='form-control'
            name='Quntity'
            value={Quntity}
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