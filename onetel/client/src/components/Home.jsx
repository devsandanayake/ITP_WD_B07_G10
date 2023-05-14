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
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(4);

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
  const addToCart = (itemId) => {
    // Find the selected item from the posts array
    const selectedItem = posts.find((post) => post._id === itemId);
  
    // Check if the item is already in the cart
    const itemInCart = cartItems.find((item) => item._id === itemId);
  
    if (itemInCart) {
      toast.warning('Item is already in the cart', {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      // Add the selected item to the cart
      setCartItems([...cartItems, selectedItem]);
      toast.success('Item added to cart', {
        position: toast.POSITION.TOP_LEFT
      });
    }
  }; 

  
  // Pagination logic
  const totalPages = Math.ceil(posts.length / cardsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pagination = (
    <ul className="pagination justify-content-center">
      {Array.from({ length: totalPages }, (_, index) => (
        <li
          className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
          key={index + 1}
        >
          <button
            className="page-link"
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        </li>
      ))}
    </ul>
  );
  

  const loginLink = (
    <div className='row'>
      <ToastContainer/>
      {posts.map((post) => (
        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={post._id}>
          <div className='card p-0 overflow-hidden h-100 shadow custome-card' alt='im'>
            <img src={post.image} className='card-img-top img-fluid' alt='brand'/>   
            <div className='card-body text-center'>  
            <h5 className='card-title'>{post.Brand}</h5>
              <h5 className='card-title'>{post.Model}</h5>
              <p className='card-title'>LKR&nbsp;{post.Price}</p>
              {post.Status === 'In Stock' ? (
              <p className='card-text' style={{ color: 'green' }}>{post.Status}</p>
            ) : (
              <p className='card-text' style={{ color: 'red' }}>{post.Status}</p>
            )}
              <Button type="submit" className='btn btn-buy' onClick={onSubmit}>Buy</Button>
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
              <h5 className='card-title'>{post.Model}</h5>
              <p className='card-title'>LKR&nbsp;{post.Price}</p>
              {post.Status === 'In Stock' ? (
              <p className='card-text' style={{ color: 'blue' }}>{post.Status}</p>
            ) : (
              <p className='card-text' style={{ color: 'red' }}>{post.Status}</p>
            )}
              <Button className="btn btn-primary" onClick={() => addToCart(post._id)}><BsCart4/></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="btn btn-success" href={`/${post._id}`}>Buy</a>
            
    
            </div>
          </div>
        </div>
      ))}
       <div>
        {/* Display cart and item count in the navbar */}
         <div className="carts">
           <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  <BsCart4 /> Cart ({cartItems.length})
                </a>
              </li>
            </ul>
          </div>
        
      </div>
        <div>
      
      </div>
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
            style={{ width: "50%", marginRight: "auto" }}
          />
          <Button variant="success"  className='search-button'>Search</Button>
        </Form>
        <br/><br/>
      </div>
      {localStorage.usertoken ? homeLink : loginLink}

      {pagination}
    </div>
  );
};

export default Home;
