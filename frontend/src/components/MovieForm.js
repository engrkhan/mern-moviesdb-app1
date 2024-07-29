import React, { useState } from 'react';
import axios from 'axios';

const MovieForm = () => {
    const [movie, setMovie] = useState({
        mov_name: '',
        mov_year: '',
        mov_time: '',
        mov_lang: '',
        mov_dt_rel: '',
        mov_rel_country: '',
        rev_name: '',
        rev_id: '',
        rev_stars: '',
        num_o_ratings: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie(prevMovie => ({ ...prevMovie, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/movies', movie)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error creating the movie!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="mov_name" value={movie.mov_name} onChange={handleChange} placeholder="Movie Name" required />
            <input type="number" name="mov_year" value={movie.mov_year} onChange={handleChange} placeholder="Year" required />
            <input type="number" name="mov_time" value={movie.mov_time} onChange={handleChange} placeholder="Duration" required />
            <input type="text" name="mov_lang" value={movie.mov_lang} onChange={handleChange} placeholder="Language" required />
            <input type="date" name="mov_dt_rel" value={movie.mov_dt_rel} onChange={handleChange} placeholder="Release Date" required />
            <input type="text" name="mov_rel_country" value={movie.mov_rel_country} onChange={handleChange} placeholder="Country" required />
            <input type="text" name="rev_name" value={movie.rev_name} onChange={handleChange} placeholder="Reviewer Name" required />
            <input type="number" name="rev_id" value={movie.rev_id} onChange={handleChange} placeholder="Reviewer ID" required />
            <input type="number" name="rev_stars" value={movie.rev_stars} onChange={handleChange} placeholder="Reviewer Stars" />
            <input type="number" name="num_o_ratings" value={movie.num_o_ratings} onChange={handleChange} placeholder="Number of Ratings" required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default MovieForm;
