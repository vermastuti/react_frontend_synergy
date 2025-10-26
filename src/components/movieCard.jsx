import { Link,useNavigate } from "react-router-dom";
import MovieDetails from "./MovieDetails";

function MovieCard({ movie }) {
   const navigate = useNavigate();
     function handleViewDetails() {
    // Check if user is logged in
    const username = sessionStorage.getItem("username");

    if (username) {
      // User logged in → go to Movie Details
      navigate(`/MovieDetails/${movie.id}`);
    } else {
      // User not logged in → go to Login page
      navigate("/login");
    }
  }
  return (
    <div className="card">
      <img src={movie.image} alt={movie.title} className="card-img-top" />
      <div className="card-body">
        <h5>{movie.title}</h5>
        <p>{movie.genre}</p>
        <button onClick={handleViewDetails} className="btn btn-primary">
          View Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;