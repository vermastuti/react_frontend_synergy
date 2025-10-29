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

  const { showId, showTime, theatreName, theatreLocation, price, movieTitle, showDate } = location.state || {};
  console.log(id)
  const [showModal, setShowModal] = useState(false);
  const [seats, setSeats] = useState(1);
  const [loading, setLoading] = useState(false);
   const [confirmMessage, setConfirmMessage] = useState("");
   const [failureMessage, setFailureMessage] = useState("");

  // Hardcoded email for now — in a real app, you’d take it from logged-in user info
  const email = sessionStorage.getItem("username");

  async function handleBooking() {
    if (!showId) {
      alert("No show selected!");
      return;
    }

  

    const amount = seats * price;

    // Construct the request body
    const bookingData = {
      email: email,
      movieShowId: showId,
      movieTitle: movieTitle || id,
      showDate: showDate || "2025-10-28",  // fallback date
      showTime: showTime,
      seats: seats,
      amount: amount
    };

    console.log("Booking Request:", bookingData);

    try {
      setLoading(true);

      // ✅ Replace with your actual backend endpoint
      const response = await axios.post("http://localhost:9003/api/book/add", bookingData);
      setConfirmMessage("Your Booking has been confirmed with us!");
     // alert(`Booking Successful!\nBooking ID: ${response.data.id}\nTotal: ₹${amount}`);
    } catch (error) {
      console.error("Booking failed:", error);
      if (error.response) {
        setFailureMessage("Something went wrong!");
       // alert(`Booking failed: ${error.response.data.message || "Server error"}`);
      } else {
        setFailureMessage("Something went wrong!");
       // alert("Booking failed. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  }

  if (!showId) return <p>No show selected!</p>;
    function closeModal() {
    setShowModal(false);
   // setSelectedBooking(null);
  }
  function closeConfirmMessage() {
    setConfirmMessage("");
  }
   function closeFailureMessage() {
    setFailureMessage("");
  }
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
          // className="form-control seatsinput"
          value={seats}
          onChange={function (e) {
            setSeats(parseInt(e.target.value) || 1);
          }}
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

       {/* Success Message Modal */}
       {confirmMessage && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog"  style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, -30%)",
        maxWidth: "500px",
        width: "90%",
      }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Booking Confirmation</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <p>
                  {confirmMessage}  {" "} 
                </p>
              </div>
              <div className="modal-footer">
                 <button className="btn btn-primary mt-3" onClick={closeConfirmMessage}>
                OK
              </button>
               
              </div>
            </div>
          </div>
        </div>
    )} 

       {/* failure Message Modal */}
       {failureMessage && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog"  style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, -30%)",
        maxWidth: "500px",
        width: "90%",
      }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Booking Error!</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <p>
                  {failureMessage}  {" "} 
                </p>
              </div>
              <div className="modal-footer">
                 <button className="btn btn-primary mt-3" onClick={closeFailureMessage}>
                OK
              </button>
               
              </div>
            </div>
          </div>
        </div>
    )} 
    </div>
  );
};

export default Book;