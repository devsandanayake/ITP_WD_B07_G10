// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
 

// export default function EditDelivery() {
//   let navigate = useNavigate();

//   const { id } = useParams();

//   const [status, setStatus] = useState({
    
//     Status:""
//   });

//   const { Status} = status;

//   const onInputChange = (e) => {
//     setStatus({ ...status, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     loadDelivery();
//   }, []);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.put(`http://localhost:8070/post/update/${id}`,status);
//     navigate("/delivery/person");
//   };

//   const loadDelivery = async () => {
//     const result = await axios.get(`http://localhost:8070/post/update/${id}`);
//     setStatus(result.data);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
//           <h2 className="text-center m-4">Update Your Task</h2>
//           <center>
//           <form onSubmit={(e) => onSubmit(e)}>
           
                                   
            
//             <select className="col-md- offset-md- border rounded p-1 mt-3 text-center" name="Status" value={Status} onChange={(e) => onInputChange(e)}>
//                 <option value="">--Select Task--</option>
//                 <option value="Successful">Successful</option>
//                 <option value="❗️❗️Unsuccessful❗️❗️">Unsuccessful</option>
                 
//             </select><br/><br/>

           
//             <button type="submit" className="btn btn-warning" >
//               Submit
//             </button>
//             <Link className="btn btn-danger mx-2" to="/delivery/person">
//               Cancel
//             </Link>
//           </form></center>
//         </div>
//       </div>
//     </div>
//   );
// }

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

export default function EditDelivery() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [status, setStatus] = useState({
    Status: ""
  });

  const { Status } = status;
  const [open, setOpen] = useState(false); // State to control dialog visibility

  const onInputChange = (e) => {
    setStatus({ ...status, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadDelivery();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8070/post/update/${id}`, status);
    navigate("/delivery/person");
  };

  const loadDelivery = async () => {
    const result = await axios.get(`http://localhost:8070/post/update/${id}`);
    setStatus(result.data);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Button variant="outlined" color="primary" onClick={handleOpen}>
            Open Dialog
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Update Your Task</DialogTitle>
            <DialogContent>
              <form onSubmit={(e) => onSubmit(e)}>
                <select
                  className="col-md- offset-md- border rounded p-1 mt-3 text-center"
                  name="Status"
                  value={Status}
                  onChange={(e) => onInputChange(e)}
                >
                  <option value="">--Select Task--</option>
                  <option value="Successful">Successful</option>
                  <option value="❗️❗️Unsuccessful❗️❗️">Unsuccessful</option>
                </select>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button onClick={onSubmit} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
