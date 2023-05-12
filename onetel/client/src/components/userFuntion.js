import axios from'axios';

export const register = async newUser => {
    // Check if any required field is empty
    if (!newUser.first_name || !newUser.last_name || !newUser.email || !newUser.password) {
      window.alert('Please fill in all required fields');
      return;
    }
  
    try {
      const res = await axios.post('http://localhost:8070/register', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password
      });
  
      console.log('Registered');
      window.alert('Registered');
      return res.data;
    } catch (err) {
      console.log('Registration failed:', err);
      if (err.response && err.response.data) {
        // Display error message from the server response
        window.alert(err.response.data.error);
      } else {
        // Display a generic error message
        window.alert('Registration failed. Please try again later.');
      }
      throw err; // re-throw the error for the caller to handle it
    }
  };
  
  

  export const login = async user => {
      // Check if email and password are empty
  if (!user.email || !user.password) {
    window.alert('Please enter both email and password');
    return;
  }
    try {
      const res = await axios.post('http://localhost:8070/login', {
        email: user.email,
        password: user.password
      });
  
      localStorage.setItem('usertoken', res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      if (err.response && err.response.data) {
        // Display error message from the server response
        window.alert(err.response.data.error);
      } else {
        // Display a generic error message
        window.alert('Login failed. Please try again later.');
      }
      throw err;
    }
  };
  