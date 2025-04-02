import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.scss';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Please login or register to access the app features.</p>
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
    </div>
  );
};

export default Home;
