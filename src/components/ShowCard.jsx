export default function ShowCard({ show }) {
  return (
    <div className="card">
        <div className="card-body">
      <p><strong>Theatre:</strong> {show.theatreName}</p>
      <p><strong>Date:</strong> {show.showDate}</p>
      <p><strong>Time:</strong> {show.showTime}</p>
      <p><strong>Price:</strong> ₹{show.totalPrice}</p>
      <p><strong>Available Seats:</strong> {show.availableSeats}</p>
      <p><strong>Status:</strong> {show.status}</p>
      <button disabled={show.availableSeats === 0}>
        {show.availableSeats === 0 ? "Sold Out" : "Book Now"}
      </button>
      </div>
    </div>
  );
}
