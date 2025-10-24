import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.image} alt={movie.title} className="card-img-top" />
      <div className="card-body">
        <h5>{movie.title}</h5>
        <p>{movie.genre}</p>
        <Link to={`/movie/${movie.id}`} className="btn btn-primary">View Details</Link>
      </div>
    </div>
  );
};

export default MovieCard;