// import { useLocation, useParams } from "react-router-dom";
// import "../styles/movieTheme.css";
// import { useState } from "react";

// const Book = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const { showId, showTime, theatreName, theatreLocation, price } = location.state || {};

//   const [seats, setSeats] = useState(1);

//   const handleBooking = () => {
//     const total = seats * price;
//     alert(`Booked ${seats} seat(s) for movie ${id} at ${showTime} in ${theatreName} (${theatreLocation})\nTotal Bill: ₹${total}`);
//   };

//   if (!showId) return <p>No show selected!</p>;

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h3>Book Your Ticket</h3>
//       <p>Movie : {id}</p>
//       <p>Show Time: {showTime}</p>
//       <p>Theatre: {theatreName}, {theatreLocation}</p>
//       <p>Price per seat: ₹{price}</p>

//       <div className="mb-3">
//         <label>Number of Seats</label>
//         <input
//           type="number"
//           min="1"
//           max="10"
//           className="form-control"
//           value={seats}
//           onChange={e => setSeats(parseInt(e.target.value))}
//         />
//       </div>

//       <p><strong>Total Bill: ₹{seats * price}</strong></p>

//       <button className="btn btn-primary" onClick={handleBooking}>Book Ticket</button>
//     </div>
//   );
// }

// export default Book;

import { useLocation, useParams } from "react-router-dom";
import "../styles/movieTheme.css";
import { useState } from "react";
import axios from "axios";

const Book = () => {
  const { id } = useParams();
  const location = useLocation();

  const {
    showId,
    showTime,
    theatreName,
    theatreLocation,
    price,
    movieTitle,
    showDate
  } = location.state || {};

  const [seats, setSeats] = useState(1);
  const [loading, setLoading] = useState(false);

  // Temporary hardcoded user ID (replace with logged-in user's ID)
  const userProfileId = 1;

  async function handleBooking() {
    if (!showId) {
      alert("No show selected!");
      return;
    }

    // ✅ Prepare data according to backend requirement
    const bookingData = {
      userProfileId: userProfileId,
      movieShowId: showId,
      seats: seats,
    };

    console.log("Booking Request:", bookingData);

    try {
      setLoading(true);

      // ✅ Correct endpoint URL (remove extra colon)
      const response = await axios.post(
        "http://localhost:9003/api/book/add",
        bookingData
      );

      alert(`🎟 Booking Successful!
Booking ID: ${response.data.bookingId || response.data.id || "N/A"}
Total Amount: ₹${seats * price}`);
    } catch (error) {
      console.error("Booking failed:", error);

      if (error.response) {
        alert(`❌ Booking failed: ${error.response.data.message || "Server error"}`);
      } else {
        alert("❌ Booking failed. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  }

  if (!showId) return <p>No show selected!</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h3>Book Your Ticket</h3>
      <p><strong>Movie:</strong> {movieTitle || id}</p>
      <p><strong>Show Date:</strong> {showDate}</p>
      <p><strong>Show Time:</strong> {showTime}</p>
      <p><strong>Theatre:</strong> {theatreName}, {theatreLocation}</p>
      <p><strong>Price per seat:</strong> ₹{price}</p>

      <div className="mb-3">
        <label>Number of Seats</label>
        <input
          type="number"
          min="1"
          max="10"
          className="form-control"
          value={seats}
          onChange={(e) => setSeats(parseInt(e.target.value) || 1)}
        />
      </div>

      <p><strong>Total Bill: ₹{seats * price}</strong></p>

      <button
        className="btn btn-primary"
        onClick={handleBooking}
        disabled={loading}
      >
        {loading ? "Booking..." : "Book Ticket"}
      </button>
    </div>
  );
};

export default Book;
