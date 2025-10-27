import { Link, useNavigate } from "react-router-dom";
import "../styles/movieCard.css";

function MovieCard(props) {
  const navigate = useNavigate();

  function handleViewDetails() {
    const username = sessionStorage.getItem("username");

    if (username) {
      console.log("Navigating with movieId:", props.movie.id);
      navigate(`/MovieDetails/${props.movie.id}`, { state: { movie: props.movie } });
    } else {
      navigate("/login");
    }
  }

  return (
    <div className="card movie-card">
      <img
        src={`src/assets/Images/${props.movie.image}`}
        alt={props.movie.title}
        className="card-img-top"
      />
      <div className="card-body">
        <h5>{props.movie.title}</h5>
        <p>{props.movie.genre}</p>
        <div>
          <button className="btn btn-primary" onClick={handleViewDetails}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

