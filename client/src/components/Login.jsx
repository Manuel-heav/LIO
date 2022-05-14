import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login">
      <div className="login__header">
        <h1>LIO</h1>
        <div className="login__btn__container">
          <button className="widerBtn"><Link to="/register"> Sign up for free</Link></button>
        </div>
      </div>
      <div className="main__container">
        <div className="login__container">
            <h1>Log In for LIO</h1>
            <h2>Write what you feel.</h2>
            <form>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <button>Log In</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Login