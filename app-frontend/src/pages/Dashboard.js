import React, { useEffect, useState } from 'react';
import api from '../api'; 
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.scss';  
import '../styles/app.scss';  

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login'); 
        return;
      }

      try {
        // Fetch user profile with token
        const response = await api.get('/user/profile', {
          headers: { Authorization: `Bearer ${token}` },  
        });
        setUser(response.data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch user details');
      }
    };

    fetchUser();
  }, [navigate]);

  return (
    <div className="dashboard-container"> 
      <h2>Dashboard</h2>
      {user ? (
        <div className="user-info">
          <img src={user.profileImage || '/assets/default-profile.jpg'} alt="Profile" className="profile-image" />
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
