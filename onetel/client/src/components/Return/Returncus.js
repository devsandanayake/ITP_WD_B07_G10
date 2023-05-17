import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
export default function AddReturn() {
  const [message, setMessage] = useState('');

  const onFinish = (values) => {
     
    const formData = new FormData();

    formData.append('ItemCode', values.ItemCode);
    formData.append('ItemName', values.ItemName);
    formData.append('customerID', values.customerID);
    formData.append('customerName', values.customerName);
    formData.append('cusEmail', values.cusEmail);
    formData.append('Address', values.Address);
    formData.append('Reason', values.Reason);

    axios
      .post('http://localhost:8070/add/Ret', formData)
      .then((res) => {
        setMessage(res.data);
        toast.success('Form submitted successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='card-container'>
      <ToastContainer/>
      <div
        className='card'
        style={{
          backgroundImage: 'linear-gradient(to bottom right, #ffffff,   #34b7a8)',
          width: '38rem',
          padding: '25px',
          marginLeft: '350px',
        }}
      >
        <h4>Add Return</h4>
        <Form name='addReturnForm' onFinish={onFinish}>
          <Form.Item
            name='ItemCode'
            label='Item Code'
            rules={[{ required: true, message: 'Please enter Item Code' }]}
          >
            <Input placeholder='Enter Item Code' />
          </Form.Item>

          <Form.Item
            name='ItemName'
            label='Item Name'
            rules={[{ required: true, message: 'Please enter Item Name' }]}
          >
            <Input placeholder='Enter Item Name' />
          </Form.Item>

          <Form.Item
            name='customerID'
            label='Customer ID'
            rules={[{ required: true, message: 'Please enter Customer ID' }]}
          >
            <Input placeholder='Enter CID' />
          </Form.Item>

          <Form.Item
            name='customerName'
            label='Customer Name'
            rules={[{ required: true, message: 'Please enter Customer Name' }]}
          >
            <Input placeholder='Enter Name' />
          </Form.Item>

          <Form.Item
            name='cusEmail'
            label='Customer Email'
            rules={[
              { required: true, message: 'Please enter Customer Email' },
              { type: 'email', message: 'Invalid email address' },
            ]}
          >
            <Input placeholder='Enter Email' />
          </Form.Item>

          <Form.Item
            name='Reason'
            label='Reason'
            rules={[{ required: true, message: 'Please enter Reason' }]}
          >
            <Input placeholder='Enter Reason' />
          </Form.Item>

          <Form.Item
            name='Address'
            label='Address'
            rules={[{ required: true, message: 'Please enter Address' }]}
          >
            <Input placeholder='Enter Address' />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
