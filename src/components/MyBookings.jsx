
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function MyBookings() {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [confirmMessage, setConfirmMessage] = useState("");

  // Replace this with your backend base URL
  const BASE_URL = "http://localhost:9003/api/book";

  // Simulate fetching bookings for userId = 1
  const userId = sessionStorage.getItem("username"); // TODO: Replace this with actual userProfileId when available
  console.log(userId);

  useEffect(() => {
    fetchBookings();
    
  }, []);

  async function fetchBookings() {
    try {
      const response = await axios.get(`${BASE_URL}/user/${userId}`);
      setBookings(response.data);
      
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setBookings([]);
    }
  }

  function handleCancelClick(booking) {
    setSelectedBooking(booking);
    setShowModal(true);
  }

  async function confirmCancel() {
    try {
      const response = await axios.put(`${BASE_URL}/${selectedBooking.bookingId}/cancel`);
      
      setConfirmMessage(`Booking for this movie has been cancelled successfully!`);
      // Update status locally for instant UI response
      const updatedBookings = bookings.map((b) =>
        b.bookingId === selectedBooking.bookingId
          ? { ...b, status: "CANCELLED", paid: false }
          : b
      );
      setBookings(updatedBookings);
  
    } catch (error) {
      setConfirmMessage("Error cancelling booking. Please try again.");
      console.error("Cancel booking error:", error);
    } finally {
      setShowModal(false);
      setSelectedBooking(null);
    }
  }

  function closeModal() {
    setShowModal(false);
    setSelectedBooking(null);
  }

  function closeConfirmMessage() {
    setConfirmMessage("");
  }

  return (
    <div className="container py-4">
      <h2>My Bookings {user && `(Welcome, ${user})`}</h2>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              {/* <th>Booking ID</th> */}
              <th>Movie Title</th>
              <th>Show Date</th>
              <th>Show Timing</th>
              <th>Seats</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.bookingId}>
                {/* <td>{booking.bookingId}</td> */}
                <td>{booking.movieTitle}</td>
                 <td>{booking.showDate}</td>
                <td>{booking.showTime}</td>
                <td>{booking.seats}</td>
                <td>{booking.amount}</td>
                <td>{booking.status}</td>
                <td>
                  {booking.status !== "CANCELLED" && (
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleCancelClick(booking)}
                    >
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Cancel Confirmation Modal */}
      {showModal && selectedBooking && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog"  style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, -30%)",
        maxWidth: "500px",
        width: "90%",
      }} >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Cancellation</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <p>
                  Are you sure you want to cancel booking {" "}
                  {/* <strong>{selectedBooking.bookingId}</strong> */}
                   {" "}for the movie <b>{selectedBooking.movieTitle}</b>?
                  
                </p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
                <button className="btn btn-danger" onClick={confirmCancel}>
                  Yes, Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Message Modal */}
       {confirmMessage && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog" style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, -30%)",
        maxWidth: "500px",
        width: "90%",
      }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Booking Cancelled</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <p>
                  {confirmMessage}  {" "} 
                  <br/>Your refund will get initiated in 3-4 business days!
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
    
    </div>
  );
}

export default MyBookings;