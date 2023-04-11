import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
 
export default function EditDelivery() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [delivery, setDelivery] = useState({
    Name: "",
    Address: "",
    phone: "",
    NIC:"",
    email:""
  });

  const { Name, Address, phone,NIC , email} = delivery;

  const onInputChange = (e) => {
    setDelivery({ ...delivery, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadDelivery();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8070/post/update/${id}`, delivery);
    navigate("/delivery/ad");
  };

  const loadDelivery = async () => {
    const result = await axios.get(`http://localhost:8070/post/update/${id}`);
    setDelivery(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="Name"
                value={Name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your address"
                name="Address"
                value={Address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your number"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="NIC" className="form-label">
                NIC
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your NIC"
                name="NIC"
                value={NIC}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type={"email"}
                className="form-control"
                placeholder="Enter your NIC"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary" >
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/delivery/ad">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

