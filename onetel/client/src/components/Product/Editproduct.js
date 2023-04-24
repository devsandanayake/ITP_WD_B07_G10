import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
 
export default function EditProduct() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [product, setProduct] = useState({
    Categories: "",
    Brand: "",
    Price: "",
    Model:"",
    Status:""  
  });

  const { Categories, Brand, Price,Model , Status} = product;

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadDelivery();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8070/product/update/${id}`, product);
    navigate("/adminManageProduct");
  };

  const loadDelivery = async () => {
    const result = await axios.get(`http://localhost:8070/product/update/${id}`);
    setProduct(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Product</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
              Categories:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter"
                name="Categories"
                value={Categories}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
               Brand:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your address"
                name="Brand"
                value={Brand}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
              Price:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your number"
                name="Price"
                value={Price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="NIC" className="form-label">
              Model:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your NIC"
                name="Model"
                value={Model}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
              Status:
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your NIC"
                name="Status"
                value={Status}
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

