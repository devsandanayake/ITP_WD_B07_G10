import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
 
export default function EditReturn() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [Return, setReturn] = useState({
    ItemCode: "",
    ItemName: "",
    customerID: "",
    customerName:"",
    cusEmail:"",
    cusAddress:"",
    Reason: ""
  });

  const { ItemCode, ItemName, customerID, customerName,  cusEmail,cusAddress, Reason} = Return;

  const onInputChange = (e) => {
    setReturn({ ...Return, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadDelivery();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8070/Return/update/${id}`, Return);
    navigate("/AdminReturn");
  };

  const loadDelivery = async () => {
    const result = await axios.get(`http://localhost:8070/Return/update/${id}`);
    setReturn(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit ReturnItem</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Itemcode" className="form-label">
              ItemCode:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter"
                name="ItemCode"
                value={ItemCode}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ItemName" className="form-label">
              ItemName:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Item Name"
                name="ItemName"
                value={ItemName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="customerID" className="form-label">
              customerID:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Customer Id"
                name="customerID"
                value={customerID}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="customerName" className="form-label">
              customerName:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Name"
                name="customerName"
                value={customerName}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
              cusEmail:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your E-mail"
                name="cusEmail"
                value={cusEmail}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
              cusAddress:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Reason"
                name="cusAddress"
                value={cusAddress}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Reason" className="form-label">
              Reason:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Reason"
                name="Reason"
                value={Reason}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary" >
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/Return/ad">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}



