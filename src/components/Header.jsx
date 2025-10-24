import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h2><Link to="/" className="text-white text-decoration-none">🎬 MovieBooking</Link></h2>
        <nav>
          <Link to="/" className="text-white me-3">Home</Link>
          <Link to="/login" className="text-white me-3">Login</Link>
          <Link to="/register" className="text-white">Register</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;