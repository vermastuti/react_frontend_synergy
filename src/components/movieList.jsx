import React, { useState } from "react";
import ShowCard from "./ShowCard";
import MovieCard from "./MovieCard"


function MovieList() {
// Sample Movies
const movies = [
  { id: 1, title: "De De Pyaar De 2", genre: "Romantic Comedy", image: "./src/assets/Images/dune2.jpg" },
  { id: 2, title: "120 Bahadur", genre: "War Drama", image: "./src/assets/Images/120-bahadur.jpg" },
  { id: 3, title: "The Taj Story", genre: "Courtroom Drama", image: "./src/assets/Images/the-taj-story.jpg" },
  { id: 4, title: "HAQ", genre: "Thriller", image: "./src/assets/Images/haq.jpg" },
  { id: 5, title: "Bhagwat: Chapter One - Raakshas", genre: "Fantasy", image: "./src/assets/Images/bhagwat-chapter-one.jpg" },
  { id: 6, title: "Mahayoddha Rama", genre: "Mythological Action", image: "/assets/mahayoddha-rama.jpg" },
  { id: 7, title: "Ek Deewane Ki Deewaniyat", genre: "Romantic Drama", image: "/assets/ek-deewane-ki-deewaniyat.jpg" },
  { id: 8, title: "Thamma", genre: "Comedy", image: "/assets/thamma.jpg" },
  { id: 9, title: "War 2", genre: "Action", image: "/assets/war-2.jpg" },
  { id: 10, title: "Jolly LLB 3", genre: "Courtroom Comedy", image: "/assets/jolly-llb-3.jpg" },
  { id: 11, title: "Sikandar", genre: "Action Thriller", image: "/assets/sikandar.jpg" },
  { id: 12, title: "Ramayana 2025", genre: "Mythological Epic", image: "/assets/ramayana-2025.jpg" },
  { id: 13, title: "Lahore 1947", genre: "Historical Drama", image: "/assets/lahore-1947.jpg" },
  { id: 14, title: "Superboys Of Malegaon", genre: "Comedy", image: "/assets/superboys-of-malegaon.jpg" },
  { id: 15, title: "Jugnuma", genre: "Drama", image: "/assets/jugnuma.jpg" },
  { id: 16, title: "The Girlfriend", genre: "Romantic Comedy", image: "/assets/the-girlfriend.jpg" },
  { id: 17, title: "Kattalan", genre: "Action", image: "/assets/kattalan.jpg" },
  { id: 18, title: "Haq", genre: "Thriller", image: "/assets/haq.jpg" },
  { id: 19, title: "Jassi Weds Jassi", genre: "Romantic Comedy", image: "/assets/jassi-weds-jassi.jpg" },
  { id: 20, title: "Hello Kaun", genre: "Comedy", image: "/assets/hello-kaun.jpg" },
  { id: 21, title: "The Mehta Boys", genre: "Comedy", image: "/assets/the-mehta-boys.jpg" },
  { id: 22, title: "Let's Meet", genre: "Romantic Drama", image: "/assets/lets-meet.jpg" },
  { id: 23, title: "Bobby Aur Rishi Ki Love Story", genre: "Romantic Comedy", image: "/assets/bobby-aur-rishi-ki-love-story.jpg" },
  { id: 24, title: "Sarkari Baccha", genre: "Comedy", image: "/assets/sarkari-baccha.jpg" },
  { id: 25, title: "Dil Dosti Aur Dogs", genre: "Drama", image: "/assets/dil-dosti-aur-dogs.jpg" },
  { id: 26, title: "Nadaaniyan", genre: "Comedy", image: "/assets/nadaniyan.jpg" },
  { id: 27, title: "The Diplomat", genre: "Thriller", image: "/assets/the-diplomat.jpg" },
  { id: 28, title: "Be Happy", genre: "Comedy", image: "/assets/be-happy.jpg" },
  { id: 29, title: "Inn Galiyon Mein", genre: "Drama", image: "/assets/inn-galiyon-mein.jpg" },
  { id: 30, title: "Match Fixing", genre: "Drama", image: "/assets/match-fixing.jpg" }
];

// Sample Shows
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
  { id: 101, name: "PVR Cinemas" },
  { id: 102, name: "INOX" },
  { id: 103, name: "Cinepolis" },
  { id: 104, name: "Carnival" },
  { id: 105, name: "Big Cinemas" },
];

 
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBack = () => {
    setSelectedMovie(null);
  };
return (
    <div>
      {!selectedMovie ? (
        <div className="row">
          {movies.map((movie) => (
            <div className="col-md-3 mb-4" key={movie.id}>
              <div onClick={() => handleClick(movie)} style={{ cursor: "pointer" }}>
                <MovieCard movie={movie} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        
        <div>
          
          <button onClick={handleBack}>⬅ Back to Movies</button>
          <h2>Shows for: {selectedMovie.title}</h2>
          {shows
            .filter((show) => show.movieId === selectedMovie.id)
            .map((show) => {
              const theatre = theatres.find((t) => t.id === show.theatreId);
              return <ShowCard key={show.id} show={{ ...show, theatreName: theatre.name }} />;
            })}
        </div>
      )}
    </div>
  );
}

export default MovieList;
 