import MovieCard from "./MovieCard";

const sampleMovies = [
  { id: 1, title: "Dune 2", genre: "Sci-Fi", image: "/assets/dune.jpg" },
  { id: 2, title: "Joker 2", genre: "Drama", image: "/assets/joker.jpg" },
  { id: 3, title: "Avengers 5", genre: "Action", image: "/assets/avengers.jpg" },
];

function MovieList() {
  return (
    <div className="row">
      {sampleMovies.map((movie) => (
        <div className="col-md-3 mb-4" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;

