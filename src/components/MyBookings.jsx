import React, { useState } from "react";
import { dummyBookings } from "../data/dummyBookings";

function MyBookings() {
  const [bookings, setBookings] = useState(dummyBookings);
  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  function handleCancelClick(booking) {
    setSelectedBooking(booking);
    setShowModal(true);
  }

  function confirmCancel() {
    const updatedBookings = bookings.map((b) =>
      b.bookingId === selectedBooking.bookingId
        ? { ...b, status: "CANCELLED" }
        : b
    );
    setBookings(updatedBookings);
    setShowModal(false);
    setSelectedBooking(null);
  }

  function closeModal() {
    setShowModal(false);
    setSelectedBooking(null);
  }

  return (
    <div className="container py-4">
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Movie</th>
              <th>Show Time</th>
              <th>Seats</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Paid</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.bookingId}>
                <td>{booking.bookingId}</td>
                <td>{booking.movieTitle}</td>
                <td>{booking.showTime}</td>
                <td>{booking.seats}</td>
                <td>{booking.amount}</td>
                <td>{booking.status}</td>
                <td>{booking.isPaid ? "Yes" : "No"}</td>
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

      {/* Bootstrap Modal for Cancel Confirmation */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Cancellation</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <p>
                  Are you sure you want to cancel booking ID{" "}
                  {selectedBooking.bookingId} for "{selectedBooking.movieTitle}"?
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
    </div>
  );
}

export default MyBookings;