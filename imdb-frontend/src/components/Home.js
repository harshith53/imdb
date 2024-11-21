// import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure this matches your file structure.

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to My IMDb Clone</h1>
      <div className="home-links">
        <Link to="/movies" className="home-link">
          View Movies
        </Link>
        <Link to="/mymovies" className="home-link">
          My Bookmarked Movies
        </Link>
      </div>
    </div>
  );
};

export default Home;
