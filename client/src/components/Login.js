import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Assuming you have updated your CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/feed');
    } catch (error) {
      setError('Invalid email or password');
      console.error('Login error:', error);
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="futuristic-login-container">
      <div className="futuristic-login-box">
        <h2 className="futuristic-title">Enter the Matrix</h2>
        <form className="futuristic-form" onSubmit={handleLogin}>
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
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="futuristic-button">Authenticate</button>
        </form>
        <div className="signup-option">
          <p className="signup-prompt">
            Don't have an account? 
            <button 
              type="button" 
              className="signup-link" 
              onClick={handleSignUp}
            >
                Sign Up
            </button>
          </p>
        </div>
        <div className="futuristic-overlay"></div>
      </div>
    </div>
  );
};

export default Login;