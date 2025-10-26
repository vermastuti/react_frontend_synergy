import MovieCard from "./MovieCard";
import "../styles/movieTheme.css";

function MovieList() {
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi Thriller", language: "English", duration: "2h 28m", image: "inception.jpg" },
  { id: 2, title: "Dune: Part Two", genre: "Sci-Fi", language: "English", duration: "2h 35m", image: "dune2.jpg" },
  { id: 3, title: "The Godfather", genre: "Crime Drama", language: "English", duration: "2h 55m", image: "godfather.jpg" },
  { id: 4, title: "Parasite", genre: "Thriller", language: "Korean", duration: "2h 12m", image: "parasite.jpg" },
  { id: 5, title: "Bhagwat: Chapter One - Raakshas", genre: "Fantasy", language: "Hindi", duration: "2h 40m", image: "bhagwat-chapter-one.jpg" },
  { id: 6, title: "Mahayoddha Rama", genre: "Mythological Action", language: "Hindi", duration: "2h 30m", image: "mahayoddha-rama.jpg" },
  { id: 7, title: "La La Land", genre: "Musical Romance", language: "English", duration: "2h 08m", image: "lalaland.jpg" },
  { id: 8, title: "Thamma", genre: "Comedy", language: "Bengali", duration: "2h 05m", image: "thamma.jpg" },
  { id: 9, title: "War 2", genre: "Action", language: "Hindi", duration: "2h 15m", image: "/assets/war-2.jpg" },
  { id: 10, title: "Jolly LLB 3", genre: "Courtroom Comedy", language: "Hindi", duration: "2h 20m", image: "/assets/jolly-llb-3.jpg" },
  { id: 11, title: "Sikandar", genre: "Action Thriller", language: "Hindi", duration: "2h 25m", image: "/assets/sikandar.jpg" },
  { id: 12, title: "Ramayana 2025", genre: "Mythological Epic", language: "Hindi", duration: "3h 00m", image: "/assets/ramayana-2025.jpg" },
  { id: 13, title: "Lahore 1947", genre: "Historical Drama", language: "Hindi", duration: "2h 10m", image: "/assets/lahore-1947.jpg" },
  { id: 14, title: "Superboys of Malegaon", genre: "Comedy", language: "Hindi", duration: "1h 50m", image: "/assets/superboys-of-malegaon.jpg" },
  { id: 15, title: "Jugnuma", genre: "Drama", language: "Hindi", duration: "2h 05m", image: "/assets/jugnuma.jpg" },
  { id: 16, title: "The Girlfriend", genre: "Romantic Comedy", language: "Hindi", duration: "2h 00m", image: "/assets/the-girlfriend.jpg" },
  { id: 17, title: "Kattalan", genre: "Action", language: "Tamil", duration: "2h 20m", image: "/assets/kattalan.jpg" },
  { id: 18, title: "Haq", genre: "Thriller", language: "Hindi", duration: "2h 10m", image: "/assets/haq.jpg" },
  { id: 19, title: "Jassi Weds Jassi", genre: "Romantic Comedy", language: "Punjabi", duration: "2h 05m", image: "/assets/jassi-weds-jassi.jpg" },
  { id: 20, title: "Hello Kaun", genre: "Comedy", language: "Hindi", duration: "1h 55m", image: "/assets/hello-kaun.jpg" },
  { id: 21, title: "The Mehta Boys", genre: "Comedy", language: "Hindi", duration: "1h 50m", image: "/assets/the-mehta-boys.jpg" },
  { id: 22, title: "Let's Meet", genre: "Romantic Drama", language: "Hindi", duration: "2h 00m", image: "/assets/lets-meet.jpg" },
  { id: 23, title: "Bobby Aur Rishi Ki Love Story", genre: "Romantic Comedy", language: "Hindi", duration: "2h 10m", image: "/assets/bobby-aur-rishi-ki-love-story.jpg" },
  { id: 24, title: "Sarkari Baccha", genre: "Comedy", language: "Hindi", duration: "1h 45m", image: "/assets/sarkari-baccha.jpg" },
  { id: 25, title: "Dil Dosti Aur Dogs", genre: "Drama", language: "Hindi", duration: "2h 00m", image: "/assets/dil-dosti-aur-dogs.jpg" },
  { id: 26, title: "Nadaaniyan", genre: "Comedy", language: "Hindi", duration: "1h 50m", image: "/assets/nadaniyan.jpg" },
  { id: 27, title: "The Diplomat", genre: "Thriller", language: "English", duration: "2h 15m", image: "/assets/the-diplomat.jpg" },
  { id: 28, title: "Be Happy", genre: "Comedy", language: "Hindi", duration: "1h 55m", image: "/assets/be-happy.jpg" },
  { id: 29, title: "Inn Galiyon Mein", genre: "Drama", language: "Hindi", duration: "2h 05m", image: "/assets/inn-galiyon-mein.jpg" },
  { id: 30, title: "Match Fixing", genre: "Drama", language: "English", duration: "2h 20m", image: "/assets/match-fixing.jpg" }
];


  return (
    <div className="container">
      <div className="row g-3">
        {movies.map((movie) => (
          <div className="col-md-3" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;

 