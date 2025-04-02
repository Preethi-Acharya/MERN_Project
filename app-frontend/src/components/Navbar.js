import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss'; 

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <nav>
      <div className="logo"><img src="/assets/logo.jpg" className='image-width'/></div>
      <div className="nav-links"> 
        <Link to="/">Home</Link>  
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button> 
    </nav>
  );
};

export default Navbar;
