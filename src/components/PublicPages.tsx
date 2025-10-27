import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import Dashboard from "../pages/Dashboard";
import UserRegistration from "./UserRegistration";
import Login from "./UserLogin";
import Book from "./Book";
import MovieDetails from "./MovieDetails";
import PrivateRoute from "./PrivateRoute";
import MyBookings from "./MyBookings";


export const PublicPages = () => {
    return ( 
        <div>
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
            </Routes>
            </MainLayout>
        </div>
    );
}