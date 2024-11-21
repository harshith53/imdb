import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.log(error));
  }, []);

  const bookmarkmovie = (id) => {
    axios.post('http://localhost:5000/bookmark', { id })
      .then(response => {
        setMovies(movies.map(movie =>
          movie.id === id ? { ...movie, isBookmarked: true } : movie
        ));
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.title} ({movie.year})
            {!movie.isBookmarked ? (
              <button onClick={() => bookmarkmovie(movie.id)}>Bookmark</button>
            ) : (
              <span>Bookmarked</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
