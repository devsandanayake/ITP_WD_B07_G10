import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { message } from 'antd';
import Card from 'react-bootstrap/Card';

export default class RepairCus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      contactNumber: '',
      email: '',
      category: '',
      Model: '',
      reason: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, address, contactNumber, email, category, Model, reason } = this.state;
    // Validate fields
    if (!name || !address || !contactNumber || !email || !category || !Model || !reason) {
      message.error('Please fill in all fields');
      return;
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      message.error('Invalid email address');
      return;
    }

    // Validate contact number
    const contactNumberRegex = /^\d{10}$/;
    if (!contactNumberRegex.test(contactNumber)) {
      message.error('Invalid contact number');
      return;
    }

    const data = {
      name: name,
      address: address,
      contactNumber: contactNumber,
      email: email,
      category: category,
      Model: Model,
      reason: reason,
    };

    axios
      .post('http://localhost:8070/repair/save', data)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            name: '',
            address: '',
            contactNumber: '',
            email: '',
            category: '',
            Model: '',
            reason: '',
          });
          message.success('Successful');
           
        }
      })
      .catch((error) => {
        message.error('An error occurred');
        console.error(error);
      });
  };

  render() {
    return (
      <div>
        <h1 className="h3 mb-3 font-weight-normal">
          <p align="center">Repair Item Details</p>
        </h1>
      <center>  <Card
          style={{
            backgroundImage: 'linear-gradient(to bottom right, #ffffff,   #34a9e8)',
            width: '38rem',
            padding:"25px"
          }}
          className="text-center mb-3"
          border="primary"
          size="sm"
        >
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Customer-Name"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                size="md"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Enter Your Address"
                name="address"
                value={this.state.address}
                onChange={this.handleInputChange}
                size="md"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Enter Your Contact-Num"
                type="number"
                name="contactNumber"
                value={this.state.contactNumber}
                onChange={this.handleInputChange}
                size="md"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Email"
                required={true}
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                size="md"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              Select Your Item :&nbsp;
              <select
                name="category"
                value={this.state.category}
                onChange={this.handleInputChange}
                style={{ fontSize: 'medium' }}
              >
                <option value="Mobile">Mobile-Phone</option>
                <option value="Accessories">Accessories</option>
                <option value="other">Other-Items</option>
              </select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Enter Model Number Your Item"
                name="Model"
                value={this.state.Model}
                onChange={this.handleInputChange}
                size="md"
              />
            </Form.Group>

            <Form.Group className="description">
              <textarea
                placeholder="Whats your reason"
                style={{ width: '550px', height: '250px' }}
                name="reason"
                value={this.state.reason}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <br />
            <Form.Group className="text-center">
              <Button type="submit" onClick={this.onSubmit}>
                Submit Your Details
              </Button>
            </Form.Group>
            <br />
          </Form>
        </Card></center>
      </div>
    );
  }
}
