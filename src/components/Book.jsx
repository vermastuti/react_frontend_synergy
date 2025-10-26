import { useLocation, useParams } from "react-router-dom";
import "../styles/movieTheme.css";
import { useState } from "react";

const Book = () => {
  const { id } = useParams();
  const location = useLocation();
  const { showId, showTime, theatreName, theatreLocation, price } = location.state || {};

  const [seats, setSeats] = useState(1);

  const handleBooking = () => {
    const total = seats * price;
    alert(`Booked ${seats} seat(s) for movie ${id} at ${showTime} in ${theatreName} (${theatreLocation})\nTotal Bill: ₹${total}`);
  };

  if (!showId) return <p>No show selected!</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h3>Book Your Ticket</h3>
      <p>Movie : {id}</p>
      <p>Show Time: {showTime}</p>
      <p>Theatre: {theatreName}, {theatreLocation}</p>
      <p>Price per seat: ₹{price}</p>

      <div className="mb-3">
        <label>Number of Seats</label>
        <input
          type="number"
          min="1"
          max="10"
          className="form-control"
          value={seats}
          onChange={e => setSeats(parseInt(e.target.value))}
        />
      </div>

      <p><strong>Total Bill: ₹{seats * price}</strong></p>

      <button className="btn btn-primary" onClick={handleBooking}>Book Ticket</button>
    </div>
  );
};

export default Book;
