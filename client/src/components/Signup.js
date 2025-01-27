import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Import the CSS file

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/users/register', { name, email, password });
      navigate('/login'); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSignup = () => {
    // Implement Google signup logic here
  };

  const handleXSignup = () => {
    // Implement X (Twitter) signup logic here
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form className="signup-form" onSubmit={handleSignup}>
          <input 
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <div className="alternative-signup">
          <button onClick={handleGoogleSignup} className="google-signup">Sign Up with Google</button>
          <button onClick={handleXSignup} className="x-signup">Sign Up with X</button>
        </div>
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Signup;