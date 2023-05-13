import React, { useState, useEffect } from 'react';
import "./home.css" 
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { BsCart4 } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import ran1 from '../images/ran1.png'
import ran2 from '../images/ran2.png'
import ran3 from '../images/ran3.png'
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [headerImageUrl, setHeaderImageUrl] = useState('');

  useEffect(() => {
    viewPosts();
    setRandomHeaderImage();

     // Change header image randomly every 5 seconds
     const interval = setInterval(() => {
      setRandomHeaderImage();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Retrieve function
  const viewPosts = () => {
    axios.get("http://localhost:8070/products").then(res => {
      if (res.data.success) {
        setPosts(res.data.existingPosts);
        console.log(posts);
      }
    });
  }

  const setRandomHeaderImage = () => {
    const headerImages = [
      // 'https://www.premierprint.co.uk/wp-content/uploads/2020/05/Banner-1920x500-1.png',
      // 'https://menu.1percent.nl/wp-content/uploads/2015/05/Banner-1920-500.jpg',
      // 'https://th.bing.com/th/id/OIP.35ESXoCA_AiTvsf4TGGhhQHaB7?pid=ImgDet&rs=1' 
      ran1,ran2,ran3
        
      // Add more image URLs for the header
    ];
    const randomIndex = Math.floor(Math.random() * headerImages.length);
    setHeaderImageUrl(headerImages[randomIndex]);
  };

  // Searching part  
  const filterData = (searchKey) => {
    const result = posts.filter((post) =>
      post.Brand.toLowerCase().includes(searchKey) ||
      post.Price.toLowerCase().includes(searchKey)
    );
    setPosts(result);
  }

  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:8070/products").then(res => {
      if (res.data.success) {
        filterData(searchKey);
      }
    });
  }

  const onSubmit = () => {
    if (localStorage.getItem('usertoken')) {
      window.location = '/insertDelivery';
    } else {
      toast.error("Login to your account", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  }

  const loginLink = (
    <div className='row'>
      <ToastContainer/>
      {posts.map((post) => (
        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={post._id}>
          <div className='card p-0 overflow-hidden h-100 shadow custome-card' alt='im'>
            <img src={post.image} className='card-img-top img-fluid' alt='brand'/>   
            <div className='card-body text-center'>  
              <h5 className='card-title'>{post.Brand}</h5>
              <h5 className='card-title'>{post.Price}</h5>
              <p className='card-text'>{post.Status}</p>
              <Button type="submit" className='btn btn-success' onClick={onSubmit}>Buy</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const homeLink = (
    <div className='row'>
      <ToastContainer/>
      {posts.map((post) => (
        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={post._id}>
          <div className='card p-0 overflow-hidden h-100 shadow custome-card' alt='im'>
            <img src={post.image} className='card-img-top img-fluid' alt='brand'/>   
            <div className='card-body text-center'>  
              <h5 className='card-title'>{post.Brand}</h5>
             
              <h5 className='card-title'>{post.Price}</h5>
              <p className='card-text'>{post.Status}</p>
              <a className="btn btn-primary" href={``}><BsCart4/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="btn btn-success" href={`/${post._id}`}>Buy</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className='container'><br/>
      <div className='banner'>
        <img src={headerImageUrl} alt='Header Image' className='header-image' style={{width:1300}}/>
        <br/><br/><br/>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-3 Searchbar"
            aria-label="Search"
            name="searchQuery"
            onChange={handleSearchArea}
            style={{ width: "40%", marginRight: "auto" }}
          />
          <Button variant="success"  className='search-button'>Search</Button>
        </Form>
        <br/><br/>
      </div>
      {localStorage.usertoken ? homeLink : loginLink}
    </div>
  );
};

export default Home;
