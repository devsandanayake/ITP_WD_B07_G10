import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import './order.css';
export default function AddOrder() {
  const { id } = useParams();

  const [order, setOrder] = useState({
    Categories: '',
    Brand: '',
    Price: '',
    Model: '',
    Status: '',
    image: '',
  });

  useEffect(() => {
    const loadOrder = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/product/view/${id}`);
        setOrder(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadOrder();
  }, [id]);

  const [quantity, setQuantity] = useState('');
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    // Generate the order ID
    const generateOrderId = () => {
      const timestamp = new Date().getTime();
      const random = Math.floor(Math.random() * 1000);
      const id = `ORDER-${timestamp}-${random}`;
      setOrderId(id);
    };

    generateOrderId();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'quantity') {
      setQuantity(value);
      const updatedPrice = parseFloat(order.Price) * parseInt(value || 0);
      setOrder((prevState) => ({
        ...prevState,
        Price: updatedPrice.toFixed(2),
      }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8070/order/save', {
        OrderId: orderId,
        Categories: order.Categories,
        Brand: order.Brand,
        Price: order.Price,
        Model: order.Model,
        Quantity: quantity,
      });

      if (response.data.success) {
        alert('Successfully added data');
        setQuantity('');
        window.location = `/Insertdelivery/${orderId}`;
      } else {
        throw new Error('Failed to save order details');
      }
    } catch (error) {
      console.log(error);
      alert('Failed to save order details');
    }
  };

  return (
    <div className='container'>
      <div className='orders'></div>
      <div className='details'>
        <center>
          <img src={order.image} className='imgOd' alt='brand' />
        </center>
        <h4 className='text-center'>{order.Categories}</h4>
        <p className='text-center'>{order.Brand}</p>
        <p className='text-center'>{order.Model}</p>
        <p className='text-center'>Price - {order.Price}</p>

        <center>
          <Form onSubmit={onSubmit}>
            <Form.Group className='mb-3 qty'>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type='number'
                name='quantity'
                value={quantity}
                onChange={handleInputChange}
                placeholder='Quantity'
              />
            </Form.Group>
            <Button type='submit'>Buy</Button>
            <div className='pay'>
            <PayPalScriptProvider>
          
          <PayPalButtons />
        </PayPalScriptProvider></div>
          </Form>
        </center>
      </div>
   </div>
   
  );
}
