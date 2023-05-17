import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddProduct() {
  const [Categories, setCategories] = useState('');
  const [Brand, setBrand] = useState('');
  const [Price, setPrice] = useState('');
  const [Model, setModel] = useState('');
  const [Status, setStatus] = useState('Stock Type');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState('');

  const onChangeFile = (e) => {
    setImage(e.target.files[0]);
  };

  const changeOnClick = async (e) => {
    e.preventDefault();
    // Validate form fields
    if (!Categories || !Brand || !Price || !Model || !Status || !image) {
      toast.error('Please fill in all fields', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (isNaN(Price)) {
      toast.error('Please enter a valid numeric value for Price');
      return;
    }
    const formData = new FormData();

    formData.append('Categories', Categories);
    formData.append('Brand', Brand);
    formData.append('Price', Price);
    formData.append('Model', Model);
    formData.append('Status', Status);
    formData.append('image', image);

    setCategories('');
    setBrand('');
    setPrice('');
    setModel('');
    setStatus('');
    setImage('');
    axios
      .post('http://localhost:8070/add/pro', formData)
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
      <div className='card bg-dark'>
        <div className='card-body'>
          <form onSubmit={changeOnClick} encType='multipart/form-data'>
            <div className='row'>
              <div className='col-md-6'>
                <label htmlFor='Categories' className='text-white'>Categories</label>
                <input
                  type='text'
                  value={Categories}
                  onChange={(e) => setCategories(e.target.value)}
                  className='form-control mb-3'
                />

                <label htmlFor='Brand'className='text-white'>Brand</label>
                <input
                  type='text'
                  value={Brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className='form-control mb-3'
                />

                <label htmlFor='Price'className='text-white'>Price</label>
                <input
                  type='text'
                  value={Price}
                  onChange={(e) => setPrice(e.target.value)}
                  className='form-control mb-3'
                />
              </div>

              <div className='col-md-6'>
                <label htmlFor='Model'className='text-white'>Model</label>
                <input
                  type='text'
                  value={Model}
                  onChange={(e) => setModel(e.target.value)}
                  className='form-control mb-3'
                />

                <label htmlFor='Status'className='text-white'>Status</label>
                <select
                  value={Status}
                  onChange={(e) => setStatus(e.target.value)}
                  className='form-control mb-3'
                >
                  <option value='In Stock'>In Stock</option>
                  <option value='Out of Stock'>Out of Stock</option>
                </select>

                <label htmlFor='file'className='text-white'>image</label>
                <input
                  type='file'
                  image='image'
                  onChange={onChangeFile}
                  className='form-control mb-3'
                />
              </div>
            </div>

            <div className='d-flex justify-content-center'>
              <button type='submit' className='btn btn-primary btn-md'>
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
