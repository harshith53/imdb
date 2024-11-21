import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyMovies = () => {
  const [bookmarkmovies, setBookmarkedMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/mymovies')
      .then(response => setBookmarkedMovies(response.data))
      .catch(error => console.log(error));
  }, []);

  const unbookmark = (id) => {
    axios.post('http://localhost:5000/unbookmark', { id })
      .then(response => {
        setBookmarkedMovies(bookmarkmovies.filter(movie => movie.id !== id));
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>My Movies</h1>
      <ul>
        {bookmarkmovies.map(movie => (
          <li key={movie.id}>
            {movie.title} ({movie.year})
            <button onClick={() => unbookmark(movie.id)}>Unbookmark</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyMovies;
