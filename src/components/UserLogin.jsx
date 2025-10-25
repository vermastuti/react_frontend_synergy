import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
   const navigate=useNavigate()

 
  
  const [username , setUsername] = useState("") 

  const [password , setPassword] = useState("") 

  function getUsername(evt) {

    setUsername(evt.target.value) 

  } 

  function getPassword(evt) { 

    setPassword(evt.target.value)

  }

  function validatingInputs() { 
    if(username == "Sangeeta" && password == "Pass@123") { 
        sessionStorage.setItem("username",username)
        navigate("/")
        //alert("User Authenticated ")
    }
    else 
        alert("Invalid User")

  }
    return (
    <div>
      <div>User Name : <input type='email' name="username" onChange={getUsername}/></div><br/>
      <div>Password : <input type="password" name="password" onChange={getPassword}/></div><br/>
      <div><input type="button" value="Login" onClick={validatingInputs}/></div>

    </div>
  )
}
