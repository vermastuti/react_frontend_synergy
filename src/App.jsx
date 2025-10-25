import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import MovieDetails from "./pages/MovieDetails";
import UserRegistration from "./components/UserRegistration";
// import Booking from "./pages/Booking";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
          {/* <Route path="/book/:id" element={<Booking />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/register" element={<UserRegistration />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
