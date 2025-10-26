import { useState } from "react"
import '../styles/userRegistration.css';
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { BASE_URL } from "../utils/Constants";

export default function UserRegistration() {
    const navigate = useNavigate();

    const [user, setUser] = useState(
        // { firstName: "Ambika", lastName: "Garg", mobileNo: "9897788790", email: "ambika@gmail.com", password: "Ambika@123" }
         { firstName: "", lastName: "", mobileNo: "", email: "", password: "" }
    )

    const [error, setError] = useState({}); //state of errors

    const handleInputChange = (event) => {
        const { name, value } = event.target;
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
                    console.log("User Registered successfully", response.data);
                    //sessionStorage.setItem("UserId", user.email);
                    navigate("/login");
                })
                .catch((error) => {
                    if (error && error.response && error.response.data) {
                        alert(JSON.stringify(error.response.data));
                    }
                });
        }
    }

    return (
        <div className="registration-container">
            <div className="form-container">
                <h1>Registration</h1>

                <label>
                    FirstName:
                    <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} ></input>
                    {error.firstName ? <p className="error">{error.firstName}</p> : null}
                </label>
                <label> LastName:
                    <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange}></input>
                    {error.lastName ? <p className="error">{error.lastName}</p> : null}
                </label>
                <label> MobileNo:
                    <input type="tel" name="mobileNo" value={user.mobileNo} onChange={handleInputChange} maxLength={10} ></input>
                    {error.mobileNo ? <p className="error">{error.mobileNo}</p> : null}
                </label>
                <label> Email:
                    <input type="email" name="email" value={user.email} onChange={handleInputChange}></input>
                    {error.email ? <p className="error">{error.email}</p> : null}
                </label>
                <label> Password:
                    <input type="password" name="password" value={user.password} onChange={handleInputChange}></input>
                    {error.password ? <p className="error">{error.password}</p> : null}
                </label>

                <button onClick={handleRegister}>Register</button>

            </div>
        </div>
    )
}