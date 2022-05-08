import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div className="login">
      <div className="login__header">
        <h1>LIO</h1>
        <div className="login__btn__container">
          <button className="smallBtn">Login</button>
          <button className="widerBtn">Sign up for free</button>
        </div>
      </div>
      <div className="main__container">
        <div className="login__container">
            <h1>Sign In for LIO</h1>
            <h2>Write what you feel.</h2>
            <form>
                <label>Username</label>
                <input type="text" name="username" placeholder="Enter Username..." />
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter Password..." />
                <button>Log In</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Login