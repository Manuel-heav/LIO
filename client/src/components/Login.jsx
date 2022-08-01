import React from 'react'
import "./login.css"
const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
      <h1>Lio</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Passsword" />
      <button>Login</button>
      <p>Don't have an account? Sign up</p>
      </div>
    </div>
  )
}

export default Login