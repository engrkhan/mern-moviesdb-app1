import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the movie details!', error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.mov_name}</h2>
      <p>Year: {movie.mov_year}</p>
      <p>Duration: {movie.mov_time} minutes</p>
      <p>Language: {movie.mov_lang}</p>
      <p>Release Date: {new Date(movie.mov_dt_rel).toLocaleDateString()}</p>
      <p>Country: {movie.mov_rel_country}</p>
      <p>Reviewer: {movie.rev_name}</p>
      <p>Reviewer ID: {movie.rev_id}</p>
      <p>Stars: {movie.rev_stars}</p>
      <p>Number of Ratings: {movie.num_o_ratings}</p>
    </div>
  );
};

export default MovieDetail;
