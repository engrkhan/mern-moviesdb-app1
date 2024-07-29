import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the movies!', error);
      });
  }, []);

  return (
    <div>
      <h2>Movies List</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie._id}>
            <Link to={`/movies/${movie._id}`}>{movie.mov_name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/before1998">Movies Released Before 1998</Link>
    </div>
  );
};

export default MovieList;
