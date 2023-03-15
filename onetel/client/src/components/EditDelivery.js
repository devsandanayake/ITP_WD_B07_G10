//import React, { Component } from 'react'
/*import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
export default class EditDelivery extends Component {
   
 
  constructor(props){
    super(props);
    this.state={
      Name:"",
      Address:"",
      phone:"",
      NIC:"" 
    }
  }

  handleInputChange=(e)=>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })

  }

  onSubmit=(e)=>{
    e.preventDefault();
   
    const id = this.props.match.params._id;
   
    const {Name,Address,phone,NIC} = this.state;

    const data ={
      Name:Name,
      Address:Address,
      phone:phone,
      NIC:NIC
    }


    axios.put(`http://localhost:8070/post/update/${id}`,data).then((res)=>{
      if(res.data.success){
       
        alert("Update");
        this.setState({
          
          Name:"",
          Address:"",
          phone:"",
          NIC:"" 
      })
      }
    })

  }
  componentDidMount(){
    
    const id = this.props.match.params._id;


    axios.get(`http://localhost:8070/post/${id}`).then((res)=>{
      if(res.data.success){
         this.setState({
          Name:res.data.post.Name,
          Address:res.data.post.Address,
          phone:res.data.post.phone,
          NIC:res.data.post.NIC
        });
          console.log(this.state.post);
      }
    });
  }

  render() {
    return (
      <Form>
      
      <Form.Group className="mb-3" >
        <Form.Label htmlFor="TextInput">Name</Form.Label>
        <Form.Control  placeholder="Enter Name" name='Name' value={this.state.Name} onChange={this.handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label htmlFor="TextInput">Address</Form.Label>
        <Form.Control  placeholder="Enter Name" name='Address'  value={this.state.Address} onChange={this.handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label htmlFor="TextInput">Job</Form.Label>
        <Form.Control  placeholder="Enter Name" name='Job' value={this.state.phone} onChange={this.handleInputChange} />
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label htmlFor="TextInput">Job</Form.Label>
        <Form.Control  placeholder="Enter Name" name='Job' value={this.state.NIC} onChange={this.handleInputChange} />
      </Form.Group>
      
      <Button type="submit"  onClick={this.onSubmit}>Save</Button>
    
  </Form>
    )
  }
}*/
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [delivery, setDelivery] = useState({
    Name: "",
    Address: "",
    phone: "",
    NIC:""
  });

  const { Name, Address, phone,NIC } = delivery;

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

