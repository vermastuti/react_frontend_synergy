import { useParams, Link } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();

  // In a real app, fetch movie details from API using id
  const movie = {
    id,
    title: "Dune 2",
    genre: "Sci-Fi",
    language: "English",
    duration: "2h 35m",
    description: "The sequel to Dune, directed by Denis Villeneuve.",
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Language:</strong> {movie.language}</p>
      <p><strong>Duration:</strong> {movie.duration}</p>
      <p>{movie.description}</p>
      <Link to={`/book/${movie.id}`} className="btn btn-success">Book Now</Link>
    </div>
  );
}

export default MovieDetails;