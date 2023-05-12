import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './order.css';

export default function AddOrder() {
  const { id } = useParams();

  const [order, setOrder] = useState({
    Categories: "",
    Brand: "",
    Price: "",
    Model: "",
    Status: "",
    image: ""
  });

  const loadOrder = async () => {
    const result = await axios.get(`http://localhost:8070/product/view/${id}`);
    setOrder(result.data);
  };

  useEffect(() => {
    loadOrder();
  }, []);

  
  const [quantity, setQuantity] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
     if (name === "quantity") {
      setQuantity(value);
      const updatedPrice = parseFloat(order.Price) * parseInt(value || 0);
      setOrder((prevState) => ({
        ...prevState,
        Price: updatedPrice.toFixed(2),
      }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      Categories: order.Categories,
      Brand: order.Brand,
      Price: order.Price,
      Model: order.Model,
    
      Quantity: quantity
    };

    axios.post("http://localhost:8070/order/save", data)
      .then((res) => {
        if (res.data.success) {
          alert("Successful Add data");
          setQuantity("");
          window.location = "/Insertdelivery";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='container'>
      <div className='orders'>
        
         
      
      </div>
      <div className='details'>
         <center><img src={order.image} className='imgOd' alt='brand' /></center>
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
          </Form>
        </center>
      </div>
    </div>
  );
}
