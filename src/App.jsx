import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import Dashboard from "./pages/Dashboard";
import UserRegistration from "./components/UserRegistration";
import Login from "./components/UserLogin";
import PrivateRoute from "./components/PrivateRoute";
import MovieDetails from "./components/MovieDetails";
import MyBookings from "./components/MyBookings";
import Book from "./components/Book";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
          {/* <Route path="/book/:id" element={<Booking />} /> */}
          
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/login" element={<Login />} />
         
          <Route path="/Book/:id" element={<Book />} />

          <Route path="/MovieDetails/:id" element={<MovieDetails />} />
          <Route
  path="/mybookings"
  element={
    <PrivateRoute>
      <MyBookings />
    </PrivateRoute>
  }
/>
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
