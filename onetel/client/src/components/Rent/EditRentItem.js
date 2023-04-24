import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
 
export default function EditRentIem() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [rent, setRentItem] = useState({
    ProductName:"",
    SKU: "",
    Model: "",
    UPC: "",
    Price: "",
    Features: ""


  });

  const { ProductName, SKU,Model,UPC,Price,Features} = rent;

  const onInputChange = (e) => {
    setRentItem({ ...rent, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadRentItem();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8070/rentItem/update/${id}`, rent);
    navigate("/rentItem");
  };

  const loadRentItem = async () => {
    const result = await axios.get(`http://localhost:8070/rentItem/update/${id}`);
    setRentItem(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Rent Item Deatils</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="ProductName" className="form-label">
                ProductName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter"
                name="ProductName"
                value={ProductName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="SKU" className="form-label">
                SKU
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your address"
                name="SKU"
                value={SKU}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Model" className="form-label">
                Model
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your number"
                name="Model"
                value={Model}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="UPC" className="form-label">
                UPC
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your UPC"
                name="UPC"
                value={UPC}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Price" className="form-label">
                Price
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your UPC"
                name="Price"
                value={Price}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Features" className="form-label">
                Features
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your UPC"
                name="Features"
                value={Features}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary" >
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/rentitem">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
