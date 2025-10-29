# BookMyMovie - Movie Ticket Booking System

A React application that provides FrontEnd for movie ticket booking and management.

## Features

- User Registration and Login
- Admin Operations for Movie Management, Show Management, Theatre Management
- Show movie details and presenting the show details for Booking the ticket
- MyBooking section for particular customer
- confirmation panels and Booking reports

## Tech Stack


Layer	                            Technology
Frontend	                        React 18 (Vite)
State Management	                React Context API / Redux
Routing	                            React Router DOM
HTTP Client	                        Axios
Styling	                             Bootstrap
Backend (API)	Spring Boot + MySQL

## Prerequisites

Node.js v16+

npm or yarn

Backend server running (Spring Boot API)

## Project Structure

```
BookMyMovie_FE/
│
├── src/
│   ├── components/        # Reusable UI components (Navbar, Footer, SeatMap, etc.)
│   ├── pages/             # Page components (Login, Register, Movies, AdminDashboard, etc.)          
│   ├── context/           # Authentication and global state management
│   ├── utils/             # Helper functions and constants
│   ├── App.js             # Main app entry point
│   └── index.js           # Renders React app
│
├── public/                # Static assets
├── package.json           # Dependencies and scripts
└── README.md    
```

## API Endpoints


### User Management
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - User login

### Movie Management (Admin)
- POST `/api/admin/movies` - Add a new movie
- PUT `/api/admin/movies/{id}` - Update movie details
- DELETE `/api/admin/movies/{id}` - Delete a movie

### Show Management
- POST `/api/movieShows` - Add a new movieShow
- GET `/api/movieShows` - Get all movieShows
- GET `/api/movieShows/{id}` - Get movieShow details

### Booking Management
- POST `/api/bookings` - Book tickets
- GET `/api/bookings/{id}` - Get booking details
- PUT `/api/bookings/{id}` - Update booking status

## Getting Started

### Prerequisites
- Java JDK
- Maven
- Your favorite IDE (IntelliJ IDEA, Eclipse, etc.)

### Installation

1. Clone the repository
```bash
git clone https://github.com/ks212/BookMyMovie_FE
```

2. Navigate to the project directory
```bash
cd BookMyMovie_FE
```

3. Install dependencies

npm install


4. Run the application
npm run dev

The application will start running at `http://localhost:9173`

## Security



## Contributing

1. clone the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the Thoughtworks License - see the LICENSE file for details.
