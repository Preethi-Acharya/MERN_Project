import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import '../styles/register.scss';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/auth/register', { name, email, password });
      console.log("response", response);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard'); 
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
