import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const [deliveryData, setDeliveryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDeliveryData();
  }, []);

  const fetchDeliveryData = async () => {
    try {
      const response = await axios.get("/pos", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setDeliveryData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Delivery Data</h2>
      {deliveryData.length === 0 ? (
        <p>No delivery data available.</p>
      ) : (
        <ul>
          {deliveryData.map((delivery) => (
            <li key={delivery._id}>
              <p>Delivery ID: {delivery._id}</p>
              <p>Name: {delivery.Name}</p>
              <p>Address: {delivery.Address}</p>
              <p>Phone: {delivery.phone}</p>
              <p>NIC: {delivery.NIC}</p>
              <p>Email: {delivery.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserProfile;
