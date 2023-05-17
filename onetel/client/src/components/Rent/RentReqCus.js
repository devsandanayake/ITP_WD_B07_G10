import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function RentReqCus() {
  const [ItemCode, setItemCode] = useState('');
  const [ItemName, setItemName] = useState('');
  const [customerID, setCustomerID] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerNIC, setCustomerNIC] = useState('');
  const [cusEmail, setCusEmail] = useState('');
  const [Phone, setCusPhone] = useState('');
  const [StartDate, setCusStart] = useState('');
  const [EndDate, setCusEnd] = useState('');
  const [NIC, setNIC] = useState('');
  const [message, setMessage] = useState('');

  const onChangeFile = (e) => {
    setNIC(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    // Validate all fields are filled
    if (
      ItemCode.trim() === '' ||
      ItemName.trim() === '' ||
      customerID.trim() === '' ||
      customerName.trim() === '' ||
      customerNIC.trim() === '' ||
      cusEmail.trim() === '' ||
      Phone.trim() === '' ||
      StartDate.trim() === '' ||
      EndDate.trim() === '' ||
      NIC === ''
    ) {
      setMessage('Please fill in all fields');
      return;
    }

    const formData = new FormData();

    formData.append('ItemCode', ItemCode);
    formData.append('ItemName', ItemName);
    formData.append('customerID', customerID);
    formData.append('customerName', customerName);
    formData.append('CustomerNIC', customerNIC);
    formData.append('cusEmail', cusEmail);
    formData.append('Phone', Phone);
    formData.append('StartDate', StartDate);
    formData.append('EndDate', EndDate);
    formData.append('NIC', NIC);

    setItemCode('');
    setItemName('');
    setCustomerID('');
    setCustomerName('');
    setCustomerNIC('');
    setCusEmail('');
    setCusPhone('');
    setCusStart('');
    setCusEnd('');

    axios
      .post('http://localhost:8070/add/rent', formData)
      .then((res) => setMessage(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div
        className="card-body"
        style={{
          backgroundImage: 'linear-gradient(to bottom right, #ffffff,   #34a9e8)',
          width: '38rem',
          padding: '25px',
          marginLeft:"300px"
        }}
        border="primary"
        size="sm"
      >
        <form onSubmit={changeOnClick} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="ItemCode">ItemCode</label>
            <input
              type="text"
              value={ItemCode}
              onChange={(e) => setItemCode(e.target.value)}
              className="form-control form-control-sm"
              placeholder="Enter ItemCode"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="ItemName">ItemName</label>
            <input
              type="text"
              value={ItemName}
              onChange={(e) => setItemName(e.target.value)}
              className="form-control form-control-sm"
              placeholder="Enter ItemName"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="customerID">customerID</label>
            <input
              type="customerID"
              value={customerID}
              onChange={(e) => setCustomerID(e.target.value)}
              className="form-control form-control-sm"
              placeholder="Enter customer ID"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="customerName">customerName</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="form-control form-control-sm"
              placeholder="Enter customer name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="customerNIC">CustomerNIC</label>
            <input
              type="text"
              value={customerNIC}
              onChange={(e) => setCustomerNIC(e.target.value)}
              className="form-control form-control-sm"
              placeholder="Enter customer NIC"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="Email">customerEmail</label>
            <input
              type="email"
              value={cusEmail}
              onChange={(e) => setCusEmail(e.target.value)}
              className="form-control form-control-sm"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="Phone">Phone</label>
            <input
              type="text"
              value={Phone}
              onChange={(e) => setCusPhone(e.target.value)}
              className="form-control form-control-sm"
              placeholder="Enter Phone number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="StartDate">StartDate</label>
            <input
              type="text"
              value={StartDate}
              onChange={(e) => setCusStart(e.target.value)}
              className="form-control form-control-sm"
              placeholder="Enter StartDate"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="EndDate">EndDate</label>
            <input
              type="text"
              value={EndDate}
              onChange={(e) => setCusEnd(e.target.value)}
              className="form-control form-control-sm"
              placeholder="Enter EndDate"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="file">image</label>
            <input
              type="file"
              image="NIC"
              onChange={onChangeFile}
              className="form-control form-control-sm"
              placeholder="NIC Scan Copy"
              required
            />
          </div>
          <br />
          <div className="text-center">
            {/* Added a div with 'text-center' class */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        {message && (
          <div className="text-center">
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
