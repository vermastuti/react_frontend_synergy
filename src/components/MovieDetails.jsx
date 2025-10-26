import { useParams, Link } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();

  // In a real app, fetch movie details from API using id
  const movie = {
    id:1,
    title: "Dune 2",
    genre: "Sci-Fi",
    language: "English",
    duration: "2h 35m",
    description: "The sequel to Dune, directed by Denis Villeneuve.",
     image: "/assets/avengers.jpg"
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <p><img src="/assets/avengers.jpg"></img></p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Language:</strong> {movie.language}</p>
      <p><strong>Duration:</strong> {movie.duration}</p>
      <p>{movie.description}</p>
      <Link to={`/Book/${movie.id}`} className="btn btn-success">Book Now</Link>
    </div>
  )
}

export default MovieDetails;