import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function RepairEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [updatedPost, setUpdatedPost] = useState({
    ProductName: "",
    SKU: "",
    Model: "",
    UPC:"",
    Price:"",
    Features:""
   
    
  });

  useEffect(() => {
    axios.get(`/rentItem/${id}`).then((res) => {
      if (res.data.success) {
        setPost(res.data.post);
        setUpdatedPost({
          ProductName: res.data.post.ProductName,
          SKU: res.data.post.SKU,
          Model: res.data.post.Model,
          UPC: res.data.post.UPC,
          Price: res.data.post.Price,
          Features: res.data.post.Features
           
        });
      }
    });
  }, [id]);
  console.log(post);

  const {ProductName, SKU, Model,UPC , Price,Features} = updatedPost;

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
      ProductName: updatedPost.ProductName,
      SKU: updatedPost.SKU,
      Model: updatedPost.Model,
      UPC: updatedPost.UPC,
      Price: updatedPost.Price,
      Features: updatedPost.Features
       
       
    };

    axios.put(`/rentItem/update/${id}`, data).then((res) => {
      console.log(res.data);
      alert('Post updated successfully!');
      setUpdatedPost({
        ProductName: "",
        SKU: "",
        Model: "",
        UPC:"",
        Price:"",
        Features:""
      });
      navigate('/rentItem');
    });
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h4>Edit Repairs</h4>
      <hr />

      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label>ProductName:</label>
          <input
            type='text'
            className='form-control'
            name='ProductName'
            value={ProductName}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>SKU:</label>
          <input
            type='text'
            className='form-control'
            name='SKU'
            value={SKU}
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
          <label>UPC:</label>
          <input
            type='UPC'
            className='form-control'
            name='UPC'
            value={UPC}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Price:</label>
          <input
            type='text'
            className='form-control'
            name='Price'
            value={Price}
            onChange={handleInputChange}
          />
        </div>

  
        <div className='form-group'>
          <label>Features:</label>
          <input
            type='text'
            className='form-control'
            name='Features'
            value={Features}
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