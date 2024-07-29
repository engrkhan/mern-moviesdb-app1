import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import MovieForm from './components/MovieForm';
import MoviesBefore1998 from './components/MoviesBefore1998';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Movies App</h1>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/add-movie" element={<MovieForm />} />
          <Route path="/before1998" element={<MoviesBefore1998 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
