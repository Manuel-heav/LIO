import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
      <h1>Lio</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Passsword" />
      <button>Login</button>
      <Link to="/signup"><p>Don't have an account?</p></Link>
      </div>
    </div>
  )
}

export default Login