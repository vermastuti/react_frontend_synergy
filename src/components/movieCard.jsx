import { Link } from "react-router-dom";
import "../styles/movieCard.css"

function MovieCard({ movie }) {
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
