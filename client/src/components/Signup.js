import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Updated CSS file name

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/register', { 
        name, 
        email, 
        password 
      });
      
      // Store user data and token
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      navigate('/dashboard'); // Redirect to dashboard instead of login
    } catch (error) {
      console.error('Signup error:', error.response?.data?.message || error.message);
      // Add error state display here
    }
  };

  const handleGoogleSignup = () => {
    // Implement Google signup logic here
    window.location.href = '/api/auth/google';
  };

  const handleXSignup = () => {
    // Implement X (Twitter) signup logic here
  };

  return (
    <div className="futuristic-signup-container">
      <div className="futuristic-signup-box">
        <h2 className="futuristic-title">Join the Future</h2>
        <form className="futuristic-form" onSubmit={handleSignup}>
          <div className="input-container">
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=" "
              required
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-container">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-container">
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit" className="futuristic-button">Register</button>
        </form>
        <div className="alternative-signup">
          <button onClick={handleGoogleSignup} className="futuristic-social-button google-signup">Sign Up with Google</button>
          <button onClick={handleXSignup} className="futuristic-social-button x-signup">Sign Up with X</button>
        </div>
        <p className="login-prompt">Already have an account? <a href="/login" className="login-link">Login</a></p>
      </div>
      <div className="futuristic-overlay"></div>
    </div>
  );
};

export default Signup;