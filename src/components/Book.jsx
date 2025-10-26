import { useParams } from "react-router-dom";
import { useState } from "react";

function Booking() {
  const { id } = useParams();
  const username = sessionStorage.getItem("username"); // logged-in user
  const [show, setShow] = useState("");
  const [seats, setSeats] = useState(1);
  const [message, setMessage] = useState("");

  const shows = ["10:00 AM", "1:00 PM", "6:00 PM", "9:00 PM"];

  // Dummy movie title for display; in real app, fetch details using id
  const movieTitle = id === "1" ? "Dune 2" : id === "2" ? "Joker 2" : "Avengers 5";

  function handleBooking() {
    if (!show) {
      alert("Please select a show time.");
      return;
    }

    const newBooking = {
      id: Date.now(), // unique ID
      username,
      movieId: id,
      movieTitle,
      showTime: show,
      seats,
      status: "Confirmed",
    };

    // Save to session storage
    const existingBookings = JSON.parse(sessionStorage.getItem("bookings")) || [];
    existingBookings.push(newBooking);
    sessionStorage.setItem("bookings", JSON.stringify(existingBookings));

    setMessage(`✅ Successfully booked ${seats} seat(s) for ${movieTitle} at ${show}!`);
    setSeats(1);
    setShow("");
  }

  return (
    <div className="container mt-4">
      <h3>Book Your Ticket</h3>
      <p>Movie: {movieTitle}</p>

      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}

      <div className="mb-3">
        <label>Select Show Time</label>
        <select
          className="form-select"
          value={show}
          onChange={(e) => setShow(e.target.value)}
        >
          <option value="">Choose show</option>
          {shows.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label>Number of Seats</label>
        <input
          type="number"
          min="1"
          max="10"
          className="form-control"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={handleBooking}>
        Book Ticket
      </button>
    </div>
  );
}

export default Booking;