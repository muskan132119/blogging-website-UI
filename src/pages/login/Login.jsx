import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
  return (
    <div className="login"> 
    <span className="loginpage">Login</span>
        <form className="login-form">
            <label >Email</label>
            <input type="text" className='loginInput' placeholder="enter your email.."/>
            <label>Password</label>
            <input type="password" className='loginInput'placeholder="enter your password" />
            <button className="loginbutton">login</button>
        </form>
        <button className="loginRegisterbutton">
        <Link className="link" to="/register">Register</Link></button>
        {/* <Link className="link" to="/register">Register</Link> */}
    </div>
  )
}

export default Login