import { useParams, Link } from "react-router-dom";

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi Thriller", language: "English", duration: "2h 28m", image: "inception.jpg" },
  { id: 2, title: "Dune: Part Two", genre: "Sci-Fi", language: "English", duration: "2h 35m", image: "dune2.jpg" },
  { id: 3, title: "The Godfather", genre: "Crime Drama", language: "English", duration: "2h 55m", image: "godfather.jpg" },
  { id: 4, title: "Parasite", genre: "Thriller", language: "Korean", duration: "2h 12m", image: "/assets/parasite.jpg" },
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


const shows = [
  { id: 1, movieId: 1, theatreId: 101, showDate: "2025-10-26", showTime: "10:00 AM", totalPrice: 250, availableSeats: 50, status: "Available" },
  { id: 2, movieId: 1, theatreId: 102, showDate: "2025-10-26", showTime: "1:00 PM", totalPrice: 300, availableSeats: 30, status: "Available" },
  { id: 3, movieId: 1, theatreId: 103, showDate: "2025-10-26", showTime: "4:00 PM", totalPrice: 280, availableSeats: 40, status: "Available" },
  { id: 4, movieId: 1, theatreId: 104, showDate: "2025-10-26", showTime: "7:00 PM", totalPrice: 320, availableSeats: 20, status: "Available" },
  { id: 5, movieId: 1, theatreId: 105, showDate: "2025-10-26", showTime: "9:30 PM", totalPrice: 350, availableSeats: 10, status: "Available" },
  
  { id: 6, movieId: 2, theatreId: 101, showDate: "2025-10-26", showTime: "11:00 AM", totalPrice: 220, availableSeats: 50, status: "Available" },
  { id: 7, movieId: 2, theatreId: 102, showDate: "2025-10-26", showTime: "2:00 PM", totalPrice: 250, availableSeats: 30, status: "Available" },
  { id: 8, movieId: 2, theatreId: 103, showDate: "2025-10-26", showTime: "5:00 PM", totalPrice: 270, availableSeats: 40, status: "Available" },
  { id: 9, movieId: 2, theatreId: 104, showDate: "2025-10-26", showTime: "8:00 PM", totalPrice: 290, availableSeats: 20, status: "Available" },
  { id: 10, movieId: 2, theatreId: 105, showDate: "2025-10-26", showTime: "10:30 PM", totalPrice: 310, availableSeats: 0, status: "Sold Out" },

  { id: 11, movieId: 3, theatreId: 101, showDate: "2025-10-27", showTime: "10:30 AM", totalPrice: 230, availableSeats: 50, status: "Available" },
  { id: 12, movieId: 3, theatreId: 102, showDate: "2025-10-27", showTime: "1:30 PM", totalPrice: 260, availableSeats: 30, status: "Available" },
  { id: 13, movieId: 3, theatreId: 103, showDate: "2025-10-27", showTime: "4:30 PM", totalPrice: 280, availableSeats: 40, status: "Available" },
  { id: 14, movieId: 3, theatreId: 104, showDate: "2025-10-27", showTime: "7:30 PM", totalPrice: 300, availableSeats: 20, status: "Available" },
  { id: 15, movieId: 3, theatreId: 105, showDate: "2025-10-27", showTime: "10:00 PM", totalPrice: 320, availableSeats: 10, status: "Available" },

  { id: 16, movieId: 4, theatreId: 101, showDate: "2025-10-28", showTime: "11:00 AM", totalPrice: 240, availableSeats: 50, status: "Available" },
  { id: 17, movieId: 4, theatreId: 102, showDate: "2025-10-28", showTime: "2:00 PM", totalPrice: 270, availableSeats: 30, status: "Available" },
  { id: 18, movieId: 4, theatreId: 103, showDate: "2025-10-28", showTime: "5:00 PM", totalPrice: 290, availableSeats: 40, status: "Available" },
  { id: 19, movieId: 4, theatreId: 104, showDate: "2025-10-28", showTime: "8:00 PM", totalPrice: 310, availableSeats: 20, status: "Available" },
  { id: 20, movieId: 4, theatreId: 105, showDate: "2025-10-28", showTime: "10:30 PM", totalPrice: 330, availableSeats: 0, status: "Sold Out" },

  { id: 21, movieId: 5, theatreId: 101, showDate: "2025-10-29", showTime: "10:00 AM", totalPrice: 250, availableSeats: 50, status: "Available" },
  { id: 22, movieId: 5, theatreId: 102, showDate: "2025-10-29", showTime: "1:00 PM", totalPrice: 280, availableSeats: 30, status: "Available" },
  { id: 23, movieId: 5, theatreId: 103, showDate: "2025-10-29", showTime: "4:00 PM", totalPrice: 300, availableSeats: 40, status: "Available" },
  { id: 24, movieId: 5, theatreId: 104, showDate: "2025-10-29", showTime: "7:00 PM", totalPrice: 320, availableSeats: 20, status: "Available" },
  { id: 25, movieId: 5, theatreId: 105, showDate: "2025-10-29", showTime: "9:30 PM", totalPrice: 350, availableSeats: 10, status: "Available" },

  { id: 26, movieId: 1, theatreId: 101, showDate: "2025-10-30", showTime: "10:00 AM", totalPrice: 260, availableSeats: 50, status: "Available" },
  { id: 27, movieId: 1, theatreId: 102, showDate: "2025-10-30", showTime: "1:00 PM", totalPrice: 280, availableSeats: 35, status: "Available" },
  { id: 28, movieId: 2, theatreId: 103, showDate: "2025-10-30", showTime: "4:00 PM", totalPrice: 270, availableSeats: 40, status: "Available" },
  { id: 29, movieId: 2, theatreId: 104, showDate: "2025-10-30", showTime: "7:00 PM", totalPrice: 290, availableSeats: 25, status: "Available" },
  { id: 30, movieId: 3, theatreId: 105, showDate: "2025-10-30", showTime: "10:30 PM", totalPrice: 310, availableSeats: 15, status: "Available" },
  
  { id: 31, movieId: 3, theatreId: 101, showDate: "2025-10-31", showTime: "10:30 AM", totalPrice: 230, availableSeats: 50, status: "Available" },
  { id: 32, movieId: 3, theatreId: 102, showDate: "2025-10-31", showTime: "1:30 PM", totalPrice: 260, availableSeats: 30, status: "Available" },
  { id: 33, movieId: 4, theatreId: 103, showDate: "2025-10-31", showTime: "4:30 PM", totalPrice: 280, availableSeats: 40, status: "Available" },
  { id: 34, movieId: 4, theatreId: 104, showDate: "2025-10-31", showTime: "7:30 PM", totalPrice: 300, availableSeats: 20, status: "Available" },
  { id: 35, movieId: 5, theatreId: 105, showDate: "2025-10-31", showTime: "10:00 PM", totalPrice: 320, availableSeats: 10, status: "Available" },

  { id: 36, movieId: 1, theatreId: 101, showDate: "2025-11-01", showTime: "10:00 AM", totalPrice: 250, availableSeats: 50, status: "Available" },
  { id: 37, movieId: 2, theatreId: 102, showDate: "2025-11-01", showTime: "1:00 PM", totalPrice: 280, availableSeats: 30, status: "Available" },
  { id: 38, movieId: 3, theatreId: 103, showDate: "2025-11-01", showTime: "4:00 PM", totalPrice: 300, availableSeats: 40, status: "Available" },
  { id: 39, movieId: 4, theatreId: 104, showDate: "2025-11-01", showTime: "7:00 PM", totalPrice: 320, availableSeats: 20, status: "Available" },
  { id: 40, movieId: 5, theatreId: 105, showDate: "2025-11-01", showTime: "9:30 PM", totalPrice: 350, availableSeats: 10, status: "Available" },

  { id: 41, movieId: 1, theatreId: 101, showDate: "2025-11-02", showTime: "10:00 AM", totalPrice: 250, availableSeats: 50, status: "Available" },
  { id: 42, movieId: 2, theatreId: 102, showDate: "2025-11-02", showTime: "1:00 PM", totalPrice: 280, availableSeats: 30, status: "Available" },
  { id: 43, movieId: 3, theatreId: 103, showDate: "2025-11-02", showTime: "4:00 PM", totalPrice: 300, availableSeats: 40, status: "Available" },
  { id: 44, movieId: 4, theatreId: 104, showDate: "2025-11-02", showTime: "7:00 PM", totalPrice: 320, availableSeats: 20, status: "Available" },
 
]

const theatres = [
  { id: 101, name: "PVR Cinemas" ,location: "Delhi"},
  { id: 102, name: "INOX" ,location: "Noida"},
  { id: 103, name: "Cinepolis" ,location: "Gurgaon"},
  { id: 104, name: "Carnival" ,location: "Greater Noida"},
  { id: 105, name: "Big Cinemas" ,location: "Merrut"},
];

const MovieDetails = () => {
    
  const { id } = useParams();
  const movieId = parseInt(id);

  const movie = movies.find((m) => m.id === movieId);
  const movieShows = shows.filter((s) => s.movieId === movieId);

  if (!movie) {
    return <h3>Movie not found!</h3>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{movie.title}</h2>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Language:</strong> {movie.language}</p>
      <p><strong>Duration:</strong> {movie.duration}</p>
      <p>{movie.description}</p>
      <hr />

      <h3>Available Shows</h3>
      {movieShows.length === 0 ? (
        <p style={{ color: "gray" }}>No shows available for this movie.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px" }}>
          {movieShows.map((show) => {
            const theatre = theatres.find((t) => t.id === show.theatreId);
            return (
              <div key={show.id} className="card" style={{ width: "250px", padding: "10px", border: "1px solid #ddd", borderRadius: "8px" }}>
                <h5>{theatre ? theatre.name : "Unknown Theatre"}</h5>
                <h6>{theatre ? theatre.location : "Unknown Theatre"}</h6>
                <p style={{ color: "#555" }}>{theatre ? theatre.address : "No address available"}</p>
                <p><strong>Date:</strong> {show.showDate}</p>
                <p><strong>Time:</strong> {show.showTime}</p>
                <p><strong>Price:</strong> ₹{show.totalPrice}</p>
                <p style={{ color: show.status === "Sold Out" ? "red" : "green" }}>{show.status}</p>
                {show.status === "Available" ? (
                    <Link
                    to={`/Book/${movie.title}`}
                    className="btn btn-success"
                    state={{
                      showId: show.id,
                      showTime: show.showTime,
                      theatreName: theatre?.name,
                      theatreLocation: theatre?.location,
                      price: show.totalPrice
                    }}
                  >
                    Book Movie
                  </Link>
                ) : (
                  <button className="btn btn-secondary" disabled>Sold Out</button>
                )}

              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MovieDetails;