import { useParams } from "react-router-dom";
import { useState } from "react";

const Book = () => {
  let { id } = useParams();
  let [show, setShow] = useState("");
  let [seats, setSeats] = useState(1);

  const shows = ["10:00 AM", "1:00 PM", "6:00 PM", "9:00 PM"];

  const handleBooking = () => {
    alert('Booked ${seats} seat(s) for movie ${id} at ${show}');
  };

  return (
    <div>
      <h3>Book Your Ticket</h3>
      <p>Movie ID: {id}</p>
      <div className="mb-3">
        <label>Select Show Time</label>
        <select className="form-select" value={show} onChange={e => setShow(e.target.value)}>
          <option value="">Choose show</option>
          {shows.map(time => <option key={time}>{time}</option>)}
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
          onChange={e => setSeats(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleBooking}>Book Ticket</button>
    </div>
  );
};

export default Book;