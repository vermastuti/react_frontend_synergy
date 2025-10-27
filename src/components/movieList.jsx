import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "../styles/movieTheme.css";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:9003/api/movies");
        setMovies(response.data);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError("Failed to load movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []); 

  if (loading) {
    return <div className="loading-text">Loading movies...</div>;
  }

  if (error) {
    return <div className="error-text">{error}</div>;
  }

  return (
    <div className="container">
      <div className="row g-3">
        {movies.map((movie) => (
          <div className="col-md-3" key={movie.movieId}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;