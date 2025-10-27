import { Link,useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Header = () => {
  const { user, isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
   function handleLogout(event) {
    event.preventDefault(); // prevent default link behavior
    logout();               // clear user from context and sessionStorage
    navigate("/");          // redirect to Dashboard / MovieList
  }
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h2>
          <Link to="/" className="text-white text-decoration-none">
            🎬 MovieBooking
          </Link>
        </h2>

        <nav>
         

          {!isLoggedIn ? (
            <>
             <Link to="/" className="text-white me-3">
            Home
          </Link>
              <Link to="/login" className="text-white me-3">
                Login
              </Link>
              <Link to="/register" className="text-white me-3">Register</Link>
              <Link to="/admin" className="text-white me-3">Admin Panel</Link>
            </>
          ) : (
            <>
            <span className="me-3">Welcome, {user}</span>
              <Link to="/mybookings" className="text-white me-3">
                My Bookings
              </Link>
              
           <Link
                to="/" // the route won't actually be used
                className="text-white"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;