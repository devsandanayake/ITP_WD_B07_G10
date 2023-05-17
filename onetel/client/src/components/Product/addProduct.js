import React from 'react';
import { Form, Input, Button, Select,  message } from 'antd';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { Option } = Select;

const AddProduct = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const formData = new FormData();
    formData.append('Categories', values.Categories);
    formData.append('Brand', values.Brand);
    formData.append('Price', values.Price);
    formData.append('Model', values.Model);
    formData.append('Status', values.Status);
    formData.append('image', values.image);

    axios
      .post('http://localhost:8070/add/pro', formData)
      .then((res) => {
        form.resetFields();
        message.success(res.data);
        // toast.success('Data submitted successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    message.error('Please fill in all fields');
  };

  return (
    <div className="container">
      {/* <ToastContainer /> */}
      <br />
      <br />
      <div
        className="card-body"
        style={{
          backgroundImage: 'linear-gradient(to bottom right, #ffffff,   #34a9e8)',
          width: '50rem',
          padding: '25px',
          marginLeft: '250px'
        }}
      >
        <Form
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          encType="multipart/form-data"
        >
          <div className="row">
            <div className="col-md-6">
              <Form.Item
                name="Categories"
                label="Categories"
                rules={[{ required: true, message: 'Please enter Categories' }]}
              >
               <Select placeholder="Select Categories">
                  <Option value="Mobile Phone">Mobile-Phone</Option>
                  <Option value="Accessories">Accessories</Option>
                  <Option value="Tablet">Tablet</Option>
                  <Option value="Laptops">Laptops</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="Brand"
                label="Brand"
                rules={[{ required: true, message: 'Please enter Brand' }]}
              >
                <Input placeholder="Enter Brand" />
              </Form.Item>

              <Form.Item
                name="Price"
                label="Price"
                rules={[
                  { required: true, message: 'Please enter Price' },
                
                ]}
              >
                <Input placeholder="Enter Price" type="number" />
              </Form.Item>
            </div>

            <div className="col-md-6">
              <Form.Item
                name="Model"
                label="Model"
                rules={[{ required: true, message: 'Please enter Model' }]}
              >
                <Input placeholder="Enter Model" />
              </Form.Item>

              <Form.Item
                name="Status"
                label="Status"
                rules={[{ required: true, message: 'Please select Status' }]}
              >
                <Select placeholder="Select Status">
                  <Option value="In Stock">In Stock</Option>
                  <Option value="Out of Stock">Out of Stock</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="image"
                label="Add Product Image"
                rules={[{ required: true, message: 'Please upload Product Image' }]}
                valuePropName="file"
                getValueFromEvent={(e) => e.target.files[0]}
              >
                <Input type="file" />
              </Form.Item>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <Button type="primary" htmlType="submit">
              Add Product
            </Button>
          </div>
        </Form>
        <br />
        <br />
      </div>
    </div>
  );
};

export default AddProduct;
