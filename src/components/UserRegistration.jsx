import { useState } from "react"
import '../styles/userRegistration.css';
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import { Modal, Button } from 'react-bootstrap';


export default function UserRegistration() {
    const navigate = useNavigate();

    const [user, setUser] = useState(
        // { firstName: "Ambika", lastName: "Garg", mobileNo: "9897788790", email: "ambika@gmail.com", password: "Ambika@123" }
        { firstName: "", lastName: "", mobileNo: "", email: "", password: "" }
    )
    const [error, setError] = useState({}); //state of errors

    const [showModal, setShowModal] = useState(false);

    const [modalMessage, setModalMessage] = useState("");

    const [showModalCloseButton, setShowModalCloseButton] = useState(false);

    const handleCloseModal = () => setShowModal(false);

    const handleShowModal = (message, showCloseButton) => {
        setModalMessage(message);
        setShowModal(true);
        setShowModalCloseButton(showCloseButton);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === "mobileNo") {
            // allow only digits
            const digitsOnly = value.replace(/\D/g, "");
            setUser({
                ...user,
                [name]: digitsOnly
            });
            return; 
        }

        setUser({
            ...user,
            [name]: value
        });
    };


    const validate = () => {
        let errors = {};
        if (!user.firstName.trim()) {
            errors.firstName = "FirstName cannot be empty."
        }

        if (!user.lastName.trim()) {
            errors.lastName = "LastName cannot be empty."
        }

        if (!user.mobileNo.trim()) {
            errors.mobileNo = "Mobile Number cannot be empty."
        }
        else if (!/^[0-9]{10}$/.test(user.mobileNo)) {
            errors.mobileNo = "Mobile number must be 10 digits";
        }

        if (!user.email.trim()) {
            errors.email = "Email cannot be empty."
        }
        else if (!/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = "Please enter a valid email";
        }

        if (!user.password.trim()) {
            errors.password = "Password cannot be empty."
        }
        else if (user.password.length < 8) {
            errors.password = "Password must be at least 8 characters";
        }

        setError(errors); //setting error state
        return Object.keys(errors).length === 0;

    }

    const handleRegister = () => {
        if (validate()) {
            axios.post(BASE_URL + "/api/auth/register", {
                "firstName": user.firstName,
                "lastName": user.lastName,
                "mobileNo": user.mobileNo,
                "email": user.email,
                "password": user.password,
            })
                .then((response) => {
                    //console.log("User Registered successfully", response.data);
                    handleShowModal("User Registered Successfully!", false);
                    setTimeout(() => navigate("/login"), 2000);

                })
                .catch((err) => {
                    if (err && err.response && err.response.data) {
                        const errorMessage = err.response.data;

                        if (typeof errorMessage === "string" && errorMessage.includes("Email already exists")) {
                            handleShowModal("This email is already registered. Please use a different email address.", true);


                        } else {
                            setError({
                                ...error,
                                ...err.response.data,
                            })
                        }
                    }
                });
        }
    }

    return (
        <div className="container-fluid registration-container d-flex justify-content-center align-items-center min-vh-100">
            <div className="form-container col-11 col-sm-8 col-md-6 col-lg-4 p-4 shadow-lg rounded">
                <h1 className="text-center mb-4 text-danger">Registration</h1>
                <div className="mb-3">
                    <label className="form-label">First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="Enter your first name"
                        value={user.firstName}
                        onChange={handleInputChange}
                    />
                    {error.firstName ? <p className="error">{error.firstName}</p> : null}
                </div>

                <div className="mb-3">
                    <label className="form-label">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Enter your last name"
                        value={user.lastName}
                        onChange={handleInputChange}
                    />
                    {error.lastName ? <p className="error">{error.lastName}</p> : null}
                </div>

                <div className="mb-3">
                    <label className="form-label">Mobile No:</label>
                    <input
                        type="tel"
                        name="mobileNo"
                        className="form-control"
                        placeholder="Enter your mobile no."
                        value={user.mobileNo}
                        onChange={handleInputChange}
                        maxLength={10}
                    />
                    {error.mobileNo ? <p className="error">{error.mobileNo}</p> : null}
                </div>

                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={user.email}
                        onChange={handleInputChange}
                    />
                    {error.email ? <p className="error">{error.email}</p> : null}
                </div>

                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={user.password}
                        onChange={handleInputChange}
                    />
                    {error.password ? <p className="error">{error.password}</p> : null}
                </div>

                <button className="registrationbutton btn btn-danger w-100" onClick={handleRegister}>
                    Register
                </button>
            </div>
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton className="bg-dark text-white">
                    <Modal.Title>MovieBooking 🎬</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">{modalMessage}</Modal.Body>

                {showModalCloseButton ? <Modal.Footer>
                    <Button variant="danger" onClick={handleCloseModal}>Close</Button>
                </Modal.Footer> : null}
            </Modal>
        </div>
    );
}