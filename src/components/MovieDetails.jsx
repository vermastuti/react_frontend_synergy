// import { useParams, useLocation, Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles/MovieDetails.css";

// const MovieDetails = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const movieFromState = location.state?.movie;

//   const [movie, setMovie] = useState(movieFromState || null);
//   const [shows, setShows] = useState([]);
//   const [theatres, setTheatres] = useState([]);
//   const [loading, setLoading] = useState(!movie);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!id) return;

//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         const moviePromise = movieFromState
//           ? Promise.resolve({ data: movieFromState })
//           : axios.get(`http://localhost:9003/api/movies/${id}`);

//         const [movieRes, showsRes, theatreRes] = await Promise.allSettled([
//           moviePromise,
//           axios.get(`http://localhost:9003/api/show/viewall/${id}`),
//           axios.get(`http://localhost:9003/api/theatre/all`),
//         ]);

//         // ✅ Movie always loads if available
//         if (movieRes.status === "fulfilled") {
//           setMovie(movieRes.value.data);
//         } else {
//           setError("Failed to load movie details.");
//         }

//         // ✅ Handle shows and theatres gracefully
//         if (showsRes.status === "fulfilled") {
//           setShows(showsRes.value.data || []);
//         } else {
//           setShows([]);
//         }

//         if (theatreRes.status === "fulfilled") {
//           setTheatres(theatreRes.value.data || []);
//         } else {
//           setTheatres([]);
//         }
//       } catch (err) {
//         console.error("Error fetching movie details:", err);
//         setError("Something went wrong. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id, movieFromState]);

//   const getTheatreDetails = (theatreId) =>
//     theatres.find((t) => t.theatreId === theatreId);

//   if (loading) return <h3 className="loading">Loading...</h3>;
//   if (error && !movie) return <h3 className="error">{error}</h3>;

//   return (
//     <div className="movie-details-container">
//       {movie && (
//         <div className="movie-header">
//           <div className="movie-info">
//             <h2>{movie.title}</h2>
//             <p><strong>Genre:</strong> {movie.genre}</p>
//             <p><strong>Language:</strong> {movie.mlanguage}</p>
//             <p><strong>Duration:</strong> {movie.duration}</p>
//             <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
//           </div>
//         </div>
//       )}

//       <h3 className="show-heading">🎟 Available Shows</h3>

//       {shows.length > 0 ? (
//         <div className="show-card-container">
//           {shows.map((show) => {
//             const theatre = getTheatreDetails(show.theatreId);
//             return (
//               <div key={show.showId} className="show-card">
//                 <h4 className="theatre-name">{theatre?.name || "Unknown Theatre"}</h4>
//                 <p className="theatre-location">📍 {theatre?.city || "Location not available"}</p>
//                 <p><strong>Seats:</strong> {theatre?.seats || "N/A"}</p>
//                 <p><strong>Date:</strong> {show.showDate}</p>
//                 <p><strong>Time:</strong> ⏰ {show.showTime}</p>
//                 <p><strong>Price:</strong> ₹{show.totalPrice || "N/A"}</p>
//                 <p className="show-status">
//                   <strong>Status:</strong> {show.status || "N/A"}
//                 </p>

//                 {show.status?.toLowerCase() === "available" ? (
//                   <Link
//                     to={`/Book/${movie.title}`}
//                     state={{
//                       showId: show.showId,
//                       theatreName: theatre?.name,
//                       theatreLocation: theatre?.city,
//                       showTime: show.showTime,
//                       price: show.totalPrice,
//                     }}
//                     className="book-btn"
//                   >
//                     Book Now
//                   </Link>
//                 ) : (
//                   <button className="book-btn disabled" disabled>
//                     Book Now
//                   </button>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <p className="no-shows">No shows available for this movie.</p>
//       )}
//     </div>
//   );
// };

// export default MovieDetails;

import { useParams, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const movieFromState = location.state?.movie;

  const [movie, setMovie] = useState(movieFromState || null);
  const [shows, setShows] = useState([]);
  const [theatres, setTheatres] = useState([]);
  const [loading, setLoading] = useState(!movie);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const moviePromise = movieFromState
          ? Promise.resolve({ data: movieFromState })
          : axios.get(`http://localhost:9003/api/movies/${id}`);

        const [movieRes, showsRes, theatreRes] = await Promise.allSettled([
          moviePromise,
          axios.get(`http://localhost:9003/api/shows/movie/${id}`),
          axios.get(`http://localhost:9003/api/theatre/all`),
        ]);

        if (movieRes.status === "fulfilled") {
          setMovie(movieRes.value.data);
        } else {
          setError("Failed to load movie details.");
        }

        if (showsRes.status === "fulfilled") {
          setShows(showsRes.value.data || []);
        } else {
          setShows([]);
        }

        if (theatreRes.status === "fulfilled") {
          setTheatres(theatreRes.value.data || []);
        } else {
          setTheatres([]);
        }
      } catch (err) {
        console.error("Error fetching movie details:", err);
        setError("Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, movieFromState]);

  const getTheatreDetails = (theatreId) =>
    theatres.find((t) => t.theatreId === theatreId);

  if (loading) return <h3 className="loading">Loading...</h3>;
  if (error && !movie) return <h3 className="error">{error}</h3>;

  return (
    <div className="movie-details-container">
      {movie && (
        <div className="movie-header">
          <div className="movie-info">
            <h2>{movie.title}</h2>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Language:</strong> {movie.mlanguage}</p>
            <p><strong>Duration:</strong> {movie.duration}</p>
            <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
          </div>
        </div>
      )}

      <h3 className="show-heading">🎟 Available Shows</h3>

      {(() => {
        const validShows = shows.filter((show) => {
          const theatre = getTheatreDetails(show.theatreId);

          // ❌ Skip if price missing
          if (show.totalPrice == null) return false;

          // ❌ Skip if status is not "Available"
          if (show.status?.toLowerCase() !== "available") return false;

          // ❌ Skip if show date/time has passed
          if (show.showDate && show.showTime) {
            const showDateTime = new Date(`${show.showDate}T${show.showTime}`);
            if (showDateTime < new Date()) return false;
          }

          // ✅ Keep if seats >= 0 (even 0)
          return show.availableSeats >= 0;
        });

        return validShows.length > 0 ? (
          <div className="show-card-container">
            {validShows.map((show) => {
              const theatre = getTheatreDetails(show.theatreId);
              const isFull = show.availableSeats === 0;

              return (
                <div key={show.showId} className="show-card">
                  <h4 className="theatre-name">
                    {theatre?.name || "Unknown Theatre"}
                  </h4>
                  <p className="theatre-location">
                    📍 {theatre?.city || "Location not available"}
                  </p>
                  <p><strong>Available Seats:</strong> {show.availableSeats}</p>
                  <p><strong>Date:</strong> {show.showDate}</p>
                  <p><strong>Time:</strong> ⏰ {show.showTime}</p>
                  <p><strong>Price:</strong> ₹{show.totalPrice}</p>

                  <p className="show-status">
                    <strong>Status:</strong>{" "}
                    {isFull ? (
                      <span className="full-text">Full Show</span>
                    ) : (
                      <span className="available-text">Available</span>
                    )}
                  </p>

                  {isFull ? (
                    <button className="book-btn disabled" disabled>
                      Full Show
                    </button>
                  ) : (
                    <Link
                      to={`/Book/${movie.title}`}
                      state={{
                        showId: show.showId,
                        theatreName: theatre?.name,
                        theatreLocation: theatre?.city,
                        showTime: show.showTime,
                        price: show.totalPrice,
                      }}
                      className="book-btn"
                    >
                      Book Now
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="no-shows">No shows available for this movie.</p>
        );
      })()}
    </div>
  );
};

export default MovieDetails;
