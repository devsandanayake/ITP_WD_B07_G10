import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
 

export default function RentC() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [ReqStatus, setreqStatus] = useState({
    
    ReqStatus:""
  });

  const {Status} = ReqStatus;

  const onInputChange = (e) => {
    setreqStatus({ ...ReqStatus, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadDelivery();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8070/RentReq/update/${id}`,ReqStatus);
    navigate("/rented");
  };

  const loadDelivery = async () => {
    const result = await axios.get(`http://localhost:8070/RentReq/update/${id}`);
    setreqStatus(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
          <h2 className="text-center m-4">Update Request Status</h2>
          <center>
          <form onSubmit={(e) => onSubmit(e)}>
           
                                   
            
            <select className="col-md- offset-md- border rounded p-1 mt-3 text-center" name="ReqStatus" value={Status} onChange={(e) => onInputChange(e)}>
                <option value="">--Select Task--</option>
                <option value="Rented">Rent</option>
                <option value="❗️Returned❗️">Return</option>
                 
            </select><br/><br/>

           
            <button type="submit" className="btn btn-warning" >
              Submit
            </button>
            <Link className="btn btn-danger mx-2" to="/rented">
              Cancel
            </Link>
          </form></center>
        </div>
      </div>
    </div>
  );
}