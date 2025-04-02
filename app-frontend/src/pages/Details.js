import React, { useEffect, useState } from 'react';
import api from '../api';
import '../styles/app.scss';

const Details = () => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await api.get('/details');
        setDetails(response.data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch details');
      }
    };

    fetchDetails();
  }, []);

  return (
    <div>
      <h2>Details Page</h2>
      {details ? (
        <div>
          <p>{details.info}</p> 
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Details;
