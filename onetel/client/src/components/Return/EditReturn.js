import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditReturn() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [updatedPost, setUpdatedPost] = useState({
     ItemCode:"",
     ItemName:"",
     customerID:"",
     customerName:"",
     cusEmail:"",
     cusAddress:"",
     Reason:""
    
  });

  useEffect(() => {
    axios.get(`/returnItem/${id}`).then((res) => {
      if (res.data.success) {
        setPost(res.data.post);
        setUpdatedPost({
          ItemCode: res.data.post.ItemCode,
          ItemName: res.data.post.ItemName,
          customerID: res.data.post.customerID,
          customerName: res.data.post.customerName,
          cusEmail: res.data.post.cusEmail,
          Address: res.data.post.Address,
          Reason: res.data.post.Reason
          
           
        });
      }
    });
  }, [id]);
  console.log(post);

  const {ItemCode,ItemName,customerID,customerName,cusEmail,Address,Reason} = updatedPost;

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
      ItemCode: updatedPost.ItemCode,
      ItemName: updatedPost.ItemName,
      customerID: updatedPost.customerID,
      customerName: updatedPost.customerName,
      cusEmail: updatedPost.cusEmail,
      Address: updatedPost.Address,
      Reason: updatedPost.Reason
       
    };

    axios.put(`/Return/update/${id}`, data).then((res) => {
      console.log(res.data);
      alert('Post updated successfully!');
      setUpdatedPost({
        ItemCode:"",
        ItemName:"",
        customerID:"",
        customerName:"",
        cusEmail:"",
        Address:"",
        Reason:""
         
      });
      navigate('/AdminReturn');
    });
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h4>Edit Return</h4>
      <hr />

      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label>ItemCode:</label>
          <input
            type='text'
            className='form-control'
            name='ItemCode'
            value={ItemCode}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>ItemName:</label>
          <input
            type='text'
            className='form-control'
            name='ItemName'
            value={ItemName}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>customerID:</label>
          <input
            type='text'
            className='form-control'
            name='customerID'
            value={customerID}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>customerName:</label>
          <input
            type='text'
            className='form-control'
            name='customerName'
            value={customerName}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>cusEmail:</label>
          <input
            type='email'
            className='form-control'
            name='cusEmail'
            value={cusEmail}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>cusAddress:</label>
          <input
            type='text'
            className='form-control'
            name='Address'
            value={Address}
            onChange={handleInputChange}
          />
        </div>

  
        <div className='form-group'>
          <label>Reason:</label>
          <input
            type='text'
            className='form-control'
            name='Reason'
            value={Reason}
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