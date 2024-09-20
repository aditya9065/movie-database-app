// src/App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Optional for styling

// MovieCard Component
const MovieCard = ({ movie }) => {
  console.log("kjdsfak",movie)
  return(
    <div className="movie-card">
      <div className="movie-card-image">
        <img src="https://www.imdb.com/title/tt0111161/" alt='img not available'/>
      </div>
      <div className='movie.card-content'>
        <p><strong>Title:</strong> {movie.movie}</p>
        <p><strong>Ratingg:</strong> {movie.rating}</p>
      </div>
  </div>
  )
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch movies from API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://dummyapi.online/api/movies');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching the movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="app">
      <h1>Movie Database</h1>
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
