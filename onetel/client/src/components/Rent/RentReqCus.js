import React from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const RentReqCus = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const formData = new FormData();
    formData.append('ItemCode', values.ItemCode);
    formData.append('ItemName', values.ItemName);
    formData.append('customerID', values.customerID);
    formData.append('customerName', values.customerName);
    formData.append('CustomerNIC', values.customerNIC);
    formData.append('cusEmail', values.cusEmail);
    formData.append('Phone', values.Phone);
    formData.append('StartDate', values.StartDate);
    formData.append('EndDate', values.EndDate);
    formData.append('NIC', values.NIC);

    axios
      .post('http://localhost:8070/add/rent', formData)
      .then((res) => {
        message.success(res.data);
        form.resetFields();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinishFailed = () => {
    message.error('Please fill in all fields');
  };

  return (
    <div className="container">
      <div
        className="card-body"
        style={{
          backgroundImage: 'linear-gradient(to bottom right, #ffffff,   #34a9e8)',
          width: '38rem',
          padding: '25px',
          marginLeft: '300px'
        }}
        border="primary"
        size="sm"
      >
        <Form
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          encType="multipart/form-data"
        >
          <Form.Item
            name="ItemCode"
            label="ItemCode"
            rules={[{ required: true, message: 'Please enter ItemCode' }]}
          >
            <Input placeholder="Enter ItemCode" />
          </Form.Item>

          <Form.Item
            name="ItemName"
            label="ItemName"
            rules={[{ required: true, message: 'Please enter ItemName' }]}
          >
            <Input placeholder="Enter ItemName" />
          </Form.Item>

          <Form.Item
            name="customerID"
            label="customerID"
            rules={[{ required: true, message: 'Please enter customer ID' }]}
          >
            <Input placeholder="Enter customer ID" />
          </Form.Item>

          <Form.Item
            name="customerName"
            label="customerName"
            rules={[{ required: true, message: 'Please enter customer name' }]}
          >
            <Input placeholder="Enter customer name" />
          </Form.Item>

          <Form.Item
            name="customerNIC"
            label="CustomerNIC"
            rules={[{ required: true, message: 'Please enter customer NIC' }]}
          >
            <Input placeholder="Enter customer NIC" />
          </Form.Item>

          <Form.Item
            name="cusEmail"
            label="customerEmail"
            rules={[
              { required: true, message: 'Please enter email' },
              { type: 'email', message: 'Please enter a valid email' }
            ]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>

          <Form.Item
            name="Phone"
            label="Phone"
            rules={[{ required: true, message: 'Please enter Phone number' }]}
          >
            <Input placeholder="Enter Phone number" />
          </Form.Item>

          <Form.Item
            name="StartDate"
            label="StartDate"
            rules={[{ required: true, message: 'Please enter StartDate' }]}
          >
            <Input placeholder="Enter StartDate" />
          </Form.Item>

          <Form.Item
            name="EndDate"
            label="EndDate"
            rules={[{ required: true, message: 'Please enter EndDate' }]}
          >
            <Input placeholder="Enter EndDate" />
          </Form.Item>

          <Form.Item
            name="NIC"
            label="image"
            rules={[{ required: true, message: 'Please upload NIC scan copy' }]}
            valuePropName="file"
            getValueFromEvent={(e) => e.target.files[0]}
          >
            <Input type="file" />
          </Form.Item>

          <Form.Item>
            <center><Button type="primary" htmlType="submit">
              Submit
            </Button></center>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RentReqCus;
