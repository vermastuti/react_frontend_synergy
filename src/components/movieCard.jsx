import { Link } from "react-router-dom";
import MovieDetails from "./MovieDetails";

function MovieCard({ movie }) {
  return (
    <div className="card">
      <img src={movie.image} alt={movie.title} className="card-img-top" />
      <div className="card-body">
        <h5>{movie.title}</h5>
        <p>{movie.genre}</p>
        <Link to={`/MovieDetails/${movie.id}`} className="btn btn-primary">
          View Detail
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;