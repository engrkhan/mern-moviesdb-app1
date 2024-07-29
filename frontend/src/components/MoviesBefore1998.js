import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MoviesBefore1998 = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log('Fetching movies released before 1998...');
    axios.get('http://localhost:5000/api/movies/before1998')
      .then(response => {
        console.log('Movies fetched:', response.data);
        setMovies(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the movies!', error);
      });
  }, []);

  return (
    <div>
      <h2>Movies Released Before 1998</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie._id}>
            {movie.mov_name} ({movie.mov_year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesBefore1998;
