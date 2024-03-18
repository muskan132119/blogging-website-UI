import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
const Register = () => {
  return (
    <div className="Register"> 
    <span className="Registerpage">Register</span>
        <form className="Register-form">
            <label>Username</label>
            <input type="text" className='RegisterInput' placeholder='Enter your username..' />
            <label >Email</label>
            <input type="text" className='RegisterInput' placeholder="Enter your email.."/>
            <label>Password</label>
            <input type="password" className='RegisterInput'placeholder="Enter your password" />
            <button className="Registerbutton">Register</button>
        </form>
        <button className="RegisterRegisterbutton"><Link  className="link"to="/login">Login</Link></button>
       
        
    </div>
  )
}

export default Register