// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import MovieCard from "./MovieCard";
// import "../styles/movieTheme.css";

// function MovieList() {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get("http://localhost:9003/api/movies");
//         setMovies(response.data);
//       } catch (err) {
//         console.error("Error fetching movies:", err);
//         setError("Failed to load movies. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovies();
//   }, []); 

//   if (loading) {
//     return <div className="loading-text">Loading movies...</div>;
//   }

//   if (error) {
//     return <div className="error-text">{error}</div>;
//   }

//   return (
//     <div className="container">
//       <div className="row g-3">
//         {movies.map((movie) => (
//           <div className="col-md-3" key={movie.movieId}>
//             <MovieCard movie={movie} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MovieList;


import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "../styles/movieTheme.css";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Filters
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const genres = ["ROMANTIC", "ACTION", "COMEDY", "DRAMA", "THRILLER", "TRAVEL"];
  const languages = [
    "HINDI",
    "ENGLISH",
    "TAMIL",
    "TELUGU",
    "MARATHI",
    "MALAYALAM",
    "BENGALI",
    "BHOJPURI",
  ];

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:9003/api/movies");
        setMovies(response.data);
        setFilteredMovies(response.data);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError("Failed to load movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  // Filter logic (case-insensitive)
  useEffect(() => {
    let filtered = [...movies];

    if (selectedGenre) {
      filtered = filtered.filter(
        (movie) => movie.genre?.toLowerCase() === selectedGenre.toLowerCase()
      );
    }

    if (selectedLanguage) {
      filtered = filtered.filter(
        (movie) => movie.mlanguage?.toLowerCase() === selectedLanguage.toLowerCase()
      );
    }

    setFilteredMovies(filtered);
  }, [selectedGenre, selectedLanguage, movies]);

  if (loading) return <div className="loading-text">Loading movies...</div>;
  if (error) return <div className="error-text">{error}</div>;

  return (
    <div className="movie-list-container">
      {/* Filter Section */}
      <div className="filter-bar">
        <select
          className="filter-dropdown"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <select
          className="filter-dropdown"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="">All Languages</option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      {/* Movie Cards */}
      <div className="container mt-3">
        <div className="row g-3">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <div className="col-md-3" key={movie.movieId}>
                <MovieCard movie={movie} />
              </div>
            ))
          ) : (
            <div className="no-movies">No movies found.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
