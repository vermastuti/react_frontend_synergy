import { Link ,useNavigate} from "react-router-dom";
import "../styles/movieCard.css"

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
    <div className="card movie-card">
      <img src={`src/assets/Images/${movie.image}`} alt={movie.title} className="card-img-top" />
      <div className="card-body">
        <h5>{movie.title}</h5>
        <p>{movie.genre}</p>
        <div>
          <Link to={`/MovieDetails/${movie.id}`} className="btn btn-primary">
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
