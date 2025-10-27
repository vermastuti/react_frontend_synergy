import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import Dashboard from "./pages/Dashboard";
import UserRegistration from "./components/UserRegistration";
import Login from "./components/UserLogin";
import PrivateRoute from "./components/PrivateRoute";
import MovieDetails from "./components/MovieDetails";
import MyBookings from "./components/MyBookings";
import Book from "./components/Book";
import AdminDashboard from "./components/AdminPanel/AdminDashboard";
import { PublicPages } from "./components/PublicPages";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/admin/*" element={<AdminDashboard/>}/>
          <Route path="/*" element={<PublicPages />} />
        </Routes>
    </Router>
  );
}

export default App;
